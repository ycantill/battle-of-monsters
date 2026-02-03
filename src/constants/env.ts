// URL base del API
// En desarrollo: usa el servidor local (JSON Server o Firebase Emulators)
// En producción: usa Firebase Cloud Functions
export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://us-central1-battle-of-monsters.cloudfunctions.net'
    : 'http://localhost:3001';

