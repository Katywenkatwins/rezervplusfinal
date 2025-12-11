// Register Service Worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Автоматично визначити правильний шлях до Service Worker
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const baseUrl = isLocalhost ? '' : '/Rezerv';
    const swPath = `${baseUrl}/service-worker.js`;
    const scope = isLocalhost ? '/' : '/rezervplusfinal/';
    
    navigator.serviceWorker.register(swPath, { scope })
      .then((registration) => {
        console.log('✅ Service Worker зареєстровано успішно:', registration);
      })
      .catch((error) => {
        console.error('❌ Помилка реєстрації Service Worker:', error);
      });
  });
}
