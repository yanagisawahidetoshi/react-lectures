import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// ブラウザ環境用のモックサーバーを設定
export const worker = setupWorker(...handlers);