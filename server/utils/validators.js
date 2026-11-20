const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// Texto, máximo 150 caracteres (VARCHAR(150) de la tabla users) y formato de correo
export const isValidEmail = (value) =>
  typeof value === 'string' && value.trim().length <= 150 && EMAIL_REGEX.test(value.trim());

// Un id inválido se rechaza con 400 aquí; si llegara a PostgreSQL provocaría el error 22P02 (500)
export const isUuid = (value) => typeof value === 'string' && UUID_REGEX.test(value);