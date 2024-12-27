import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1DA57A', // Измените основной цвет
          'link-color': '#1DA57A',   // Цвет ссылок
          'border-radius-base': '4px', // Скругление углов
        },
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') 
    }
  },

  server: {
    port: 8080, // Порт сервера разработки
    open: true, // Автоматическое открытие браузера при запуске
  },
  
  build: {
    outDir: 'dist', // Каталог для сборки проекта
    assetsDir: 'assets', // Подкаталог для статических ресурсов
    sourcemap: true, // Генерация карты исходных кодов
    // Уберите эту часть, если не хотите использовать Terser:
    // rollupOptions: {
    //   plugins: [
    //     terser() // Уберите этот плагин
    //   ]
    // },
    minify: false, // Отключение минификации
}


})
