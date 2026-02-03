# Battle of Monsters

Aplicación web para simular batallas entre monstruos, desarrollada con React, TypeScript, Redux Toolkit y Material-UI.

## 🌐 Demo en Vivo

🔗 **[Ver Demo](https://ycantill.github.io/battle-of-monsters)**

## 📋 Requisitos Previos

- **Node.js**: 20.5.1
- **npm**: 9.8.0+

## 🚀 Instalación y Ejecución

### Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar con backend local (JSON Server)
npm run serve:data    # Terminal 1 - Backend (puerto 3001)
npm run dev           # Terminal 2 - Frontend (puerto 3000)
```

## 📜 Scripts Disponibles

- `npm run dev` - Inicia la aplicación en desarrollo
- `npm run serve:data` - Inicia el servidor JSON
- `npm run build` - Compila para producción
- `npm test` - Ejecuta pruebas con cobertura
- `npm run lint` - Revisa el código

## 🛠️ Tecnologías

- React 18.2.0
- TypeScript 4.7.4
- Redux Toolkit 1.8.3
- Material-UI 5.8.7
- Firebase Functions (Backend API)
- JSON Server (Desarrollo local)

## 🚀 Despliegue

**Frontend (GitHub Pages):** Se despliega automáticamente al hacer push a `main`

**Backend (Firebase Functions):** Desplegado en Cloud Functions
- URL Base: `https://us-central1-battle-of-monsters.cloudfunctions.net`
- Endpoints: `/monsters` (GET) y `/battle` (POST)

**Configuración:**
1. GitHub → Settings → Pages → Source: **GitHub Actions**
2. Push a `main` y espera el despliegue automático

**Demo:** `https://ycantill.github.io/battle-of-monsters`

## 📝 Notas

- **Desarrollo:** Usa JSON Server local (puerto 3001)
- **Producción:** Usa Firebase Cloud Functions automáticamente
- El backend se despliega por separado con `firebase deploy --only functions`

## 📄 Licencia

Uso interno.
