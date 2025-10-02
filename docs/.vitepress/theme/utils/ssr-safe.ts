// 浏览器 API 短路版
export const isClient = typeof document !== "undefined";

/** localStorage 安全读写 */
export const ls = {
  get: (k: string, def = "") => (isClient ? (localStorage.getItem(k) ?? def) : def),
  set: (k: string, v: string) => {
    if (isClient) localStorage.setItem(k, v);
  },
  remove: (k: string) => {
    if (isClient) localStorage.removeItem(k);
  },
};

/** sessionStorage 安全读写 */
export const ss = {
  get: (k: string, def = "") => (isClient ? (sessionStorage.getItem(k) ?? def) : def),
  set: (k: string, v: string) => {
    if (isClient) sessionStorage.setItem(k, v);
  },
  remove: (k: string) => {
    if (isClient) sessionStorage.removeItem(k);
  },
};

// // 解决watch(immediate) 报错，在 Node 环境下把 localStorage 全部 Mock 掉，无需改动页面代码
if (typeof global !== "undefined" && !global.localStorage) {
  Object.defineProperty(global, "localStorage", {
    value: {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
      key: () => null,
      length: 0,
    },
    writable: false,
    configurable: false,
  });
}
