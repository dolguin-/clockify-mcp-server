const DEBUG = process.env.DEBUG === 'true';

export const logger = {
  debug: (...args: any[]) => {
    if (DEBUG) {
      console.error('[DEBUG]', ...args);
    }
  },
  error: (...args: any[]) => {
    console.error('[ERROR]', ...args);
  },
  info: (...args: any[]) => {
    if (DEBUG) {
      console.error('[INFO]', ...args);
    }
  },
};
