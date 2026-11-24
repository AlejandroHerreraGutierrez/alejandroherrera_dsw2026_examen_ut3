# Respuestas

## Cómo se instala y arranca tu proyecto.
El proyecto se instala ejecutando npm install. Para arrancarlo tienes que ejecutar npm run dev.

## Dónde se configura el puerto y cómo llega ese valor hasta el arranque del servidor.
El puerto se configura en el archivo .env, el archivo server.ts importa el PORT del archivo.env y este lo utiliza para arrancar el servidor.

## Por qué se sube a GitHub el .env.example y se excluye .env.
El .env se excluye ya que contiene información confidencial normalmente exclusiva de cada equipo. Por eso se sube el .env.example, ya que es una plantilla.