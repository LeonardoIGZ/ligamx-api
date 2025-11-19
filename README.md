# ⚽ Liga MX API (Node.js + Express + PostgreSQL)

API profesional para consultar la información de la Liga MX utilizando:
- Node.js + Express
- PostgreSQL = sequelize
- Cron jobs para mantener datos actualizados
- Docker + Docker compose
- Swagger para documentación

## 🚀 Features
✔ Consulta de equipos
✔ Consulta de partidos
✔ Tabla general
✔ Sincronización automatica via cron jobs 
✔ Arquitectura escalable (contorllers -> services -> repositories)
✔ Base de datos normalizada
✔ Docker Docker para levantar el entorno 

## 🐳 Levantar con Docker
```bash
docker-compose up --build