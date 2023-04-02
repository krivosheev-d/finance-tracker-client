import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd())
  };

  return defineConfig({
    plugins: [vue()],
    cacheDir: '.vite',
    server: {
      port: parseInt(process.env.VITE_PORT),
    },
    resolve: {
      alias: [
        {
          find: '@app',
          replacement: path.resolve(__dirname, 'src/app/')
        }, {
          find: '@store',
          replacement: path.resolve(__dirname, 'src/app/store/modules')
        }, {
          find: '@',
          replacement: path.resolve(__dirname, 'src/')
        }, {
          find: '~',
          replacement: path.resolve(__dirname, 'src/')
        }
      ]
    },
  });
};
