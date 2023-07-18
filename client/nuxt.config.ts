import { fileURLToPath, URL } from 'url';
import eslintPlugin from 'vite-plugin-eslint';

/**
 * @see https://nuxt.com/docs/api/configuration/nuxt-config
 */
// @ts-ignore
const nuxtConfig = {
      ssr: false, // 서버사이드 렌더링 사용
      app: {
          head: {
              htmlAttrs: {
                  lang: 'ko',
              },
              title: 'nuxt3-study',
              charset: 'utf-8',
              viewport: 'width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1',
              meta: [
                  { name: 'description', content: 'description' },
                  { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
                  { 'http-equiv': 'pragma', content: 'no-cache' },
                  { 'http-equiv': 'cache-control', content: 'no-cache' },
                  { 'http-equiv': 'expires', content: '0' },
              ],
              link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
          },
      },

      modules: [],

      vite: {
          resolve: {
              /** vite 내부 모듈 해석 별칭 설정 */
              alias: {
                  '~': fileURLToPath(new URL('./', import.meta.url)),
              },
          },
          /** lint 관련 설정 */
          plugins: [
              eslintPlugin({
                  emitWarning: true,
                  emitError: true,
              }),
          ],
      },
  }
export default defineNuxtConfig( nuxtConfig );
