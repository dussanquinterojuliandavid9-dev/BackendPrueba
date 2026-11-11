import pg from 'pg';
import mongoose from 'mongoose';
import { config } from './environment.js';

// 1. Pool de PostgreSQL
const pool = new pg.Pool(config.postgres);

// 2. Listeners de ciclo de vida del clúster Atlas en Mongoose
mongoose.connection.on('connected', () => {
  console.log('🍃 [MongoDB] Conexión establecida exitosamente con el clúster');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ [MongoDB Error de Conexión]:', err.message);
});

mongoose.connection.on('disconnected', () => {
  console.warn('⚠️ [MongoDB] Desconectado del servidor de base de datos');
});

// 3. Conectar ambas bases de datos
export async function connectDatabases() {
  await pool.query('SELECT NOW()');
  console.log('🐘 [PostgreSQL] Conexión establecida exitosamente');

  await mongoose.connect(config.mongo.uri);
}

// 4. Cerrar ambas conexiones (apagado ordenado)
export async function disconnectDatabases() {
  await pool.end();
  await mongoose.disconnect();
}

export { pool, mongoose };