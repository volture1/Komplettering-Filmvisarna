export default {
    proxy: {
      '/rest': {
          // important that we use the
          // same port as Java Express
        target: 'http://localhost:4000',
        changeOrigin: true,
        ws: true
      }
    }
  }