# imagen base de node 
FROM node:25-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar package.json (mejor caché)
COPY package*.json ./

# Instalar dependencias
RUN npm install --production

# Copiar resto del proyecto
COPY . .

# Exponiendo el puerto de la API
EXPOSE 4000

# Arrancar la app
CMD [ "node", "src/server.js" ]