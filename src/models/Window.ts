const PATH_NAME = window.location.pathname;
const SEARCH = window.location.search;
const HASH = window.location.hash;

export const Window = {
  reload: () => window.location.href = PATH_NAME + SEARCH + HASH,
  goHome: () => window.location.href = PATH_NAME + SEARCH
};
