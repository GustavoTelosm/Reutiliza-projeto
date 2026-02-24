export const environment = {
  production: false,
  apiUrl: 'https://reutiliza-projeto-backend.vercel.app',  // ← Caminho relativo (usa proxy)

  // Configurações do Capacitor
  appVersion: '1.0.0',
  appName: 'Reutiliza',

  // Configurações de mapa
  defaultMapCenter: {
    lat: -27.1004, // Chapecó, SC
    lng: -52.6152
  },
  defaultMapZoom: 15
};
