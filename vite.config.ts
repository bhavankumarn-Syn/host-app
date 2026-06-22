import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // resolve: {
  //   alias: {
  //     remoteApp: '/src'
  //   }
  // },
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      federation({
          name: 'host_app',
          remotes: {
            remoteApp: env.VITE_REMOTE_APP_URL
          },
          // Must mirror the remote's shared list (incl. react/jsx-runtime) so a
          // single instance of each is used across host + remote. Mismatched
          // sharing reintroduces a 2nd React -> null hooks dispatcher.
          shared: [
            'react',
            'react-dom',
            // Explicit version: the plugin can't auto-resolve react/jsx-runtime's
            // package.json (React's exports field blocks the subpath), so we pin it.
            { 'react/jsx-runtime': { version: '19.2.7' } },
            'react-router-dom',
            'react-redux',
            '@reduxjs/toolkit',
          ]
        })
    ],
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false
    }
  }
})
