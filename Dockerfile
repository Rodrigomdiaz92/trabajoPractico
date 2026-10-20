# Usa la imagen Nginx 
FROM nginx:alpine

# Copia los archivos estáticos de tu proyecto al directorio donde Nginx sirve contenido
COPY . /usr/share/nginx/html

# Puerto 80 del contenedor
EXPOSE 80

# Comando de inicio Nginx en primer plano.
CMD ["nginx", "-g", "daemon off;"]