# Battle of Monsters

Aplicación web para simular batallas entre monstruos, desarrollada con React, TypeScript, Redux Toolkit y Material-UI.

## 🌐 Demo en Vivo

🔗 **[Ver Demo](https://ycantill.github.io/battle-of-monsters)**

## 📋 Requisitos Previos

- **Node.js**: 20.5.1
- **npm**: 9.8.0+

## 🚀 Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar (requiere 2 terminales)
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
- JSON Server

## 🚀 Despliegue

El proyecto se despliega automáticamente en GitHub Pages al hacer push a `main`. 

**Configuración:**
1. GitHub → Settings → Pages → Source: **GitHub Actions**
2. Push a `main` y espera el despliegue automático

**URL:** `https://ycantill.github.io/battle-of-monsters`

## 📝 Notas

- Asegúrate de que los puertos 3000 y 3001 estén disponibles
- El servidor de datos debe ejecutarse junto con la aplicación React
- GitHub Pages solo sirve archivos estáticos (el backend JSON Server no funcionará en producción)

## 📄 Licencia

Uso interno.
