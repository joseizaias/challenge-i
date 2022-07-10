import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')

  // console.log('env', env)
  return {
    // vite config
    server: {
      host: '0.0.0.0',
      port: 3000,
    },    define: {
      GOOGLE_CLIENT_ID: env.GOOGLE_CLIENT_ID,
    },
    plugins: [react(), reactRefresh()],
  }
});
