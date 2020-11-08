const PATH_NAME = window.location.pathname;
const SEARCH = window.location.search;

export const Window = {
  reload: () => window.location.reload(),
  goHome: () => {
    window.location.href = PATH_NAME + SEARCH;
    Window.reload();
  }
};
