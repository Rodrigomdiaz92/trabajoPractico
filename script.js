document.getElementById('searchBtn').addEventListener('click', searchWeather);
document.getElementById('cityInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchWeather();
});

async function searchWeather() {
    const city = document.getElementById('cityInput').value.trim();
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const weatherResult = document.getElementById('weatherResult');

    if (!city) return;

    // Mostrar loader y ocultar resultados previos
    loading.classList.remove('hidden');
    error.classList.add('hidden');
    weatherResult.classList.add('hidden');

    try {
        // Obtener latitud y longitud mediante la API de Geocodificación de Open-Meteo
        const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=es&format=json`);
        const geoData = await geoResponse.json();

        if (!geoData.results || geoData.results.length === 0) {
            throw new Error('Ciudad no encontrada. Verifica el nombre ingresado.');
        }

        const { name, country, latitude, longitude } = geoData.results[0];

        //  El clima actual usando coordenadas
        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`);
        const weatherData = await weatherResponse.json();

        const current = weatherData.current;

        // Renderizar 
        document.getElementById('cityName').textContent = `${name}, ${country}`;
        document.getElementById('temperature').textContent = Math.round(current.temperature_2m);
        document.getElementById('windspeed').textContent = `${current.wind_speed_10m} km/h`;
        document.getElementById('humidity').textContent = `${current.relative_humidity_2m} %`;
        document.getElementById('coordinates').textContent = `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;

        weatherResult.classList.remove('hidden');
    } catch (err) {
        error.textContent = err.message;
        error.classList.remove('hidden');
    } finally {
        loading.classList.add('hidden');
    }
}