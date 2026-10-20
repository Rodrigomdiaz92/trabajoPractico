# 🌤️ MeteoApp - Weather Dashboard

Aplicación web que permite consultar el pronóstico del tiempo y las condiciones meteorológicas en tiempo real para ciudadades del mundo, consumiendo la API REST [Open-Meteo](https://open-meteo.com/).

AUTOR: Rodrigo Martín Díaz
---

## 🛠️ Tecnologías y Requisitos

### Tecnologías utilizadas:
- **HTML5:** Estructura semántica de la interfaz.
- **CSS3 (`style.css`):** Diseño responsive y estilizado.
- **JavaScript (`script.js`):** Lógica asíncrona mediante `fetch` para consumir la API REST de Open-Meteo.
- **Nginx (`alpine`):** Servidor web ejecutado en contenedor.
- **Docker:** Contenedorización de la aplicación.
- **Git & GitHub:** Control de versiones y repositorio remoto.

### Requisitos previos:
- Tener instalado y en ejecución [Docker Desktop](https://www.docker.com/products/docker-desktop/).
- Navegador web (Chrome, Edge, Firefox).

---

## 🚀 Instrucciones para Construir y Ejecutar la Imagen Docker

Sigue estos pasos en la terminal desde la carpeta raíz del proyecto (`TP`):

### 1. Clonar el repositorio
```bash
git clone [https://github.com/Rodrigomdiaz92/trabajoPractico.git](https://github.com/Rodrigomdiaz92/trabajoPractico.git)
cd trabajoPractico
```

### 2. Construir la imagen de Docker
```bash
docker build -t meteo-app .
```
### 3. Ejecutar el contenedor
```bash
docker run -d -p 8080:80 --name mi-meteo-app meteo-app
```
### 1. Acceder a la aplicación

**Abre tu navegador e ingresa a:**
👉 http://localhost:8080

## 🛑 Comandos Útiles

**Verificar contenedor en ejecución:**
```bash
docker ps
```
**Ver logs del contenedor:**
```bash
docker logs mi-meteo-app
```
**Detener el contenedor:**
```bash
docker stop mi-meteo-app
```
**Eliminar el contenedor:**
```bash
docker rm mi-meteo-app
```
**Eliminar la imagen creada:**
```bash
docker rmi meteo-app
```