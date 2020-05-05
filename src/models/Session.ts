const SESSION_KEY = "token";

export const Session = {
  login: (token: string) => localStorage.setItem(SESSION_KEY, token),
  logout: () => localStorage.removeItem(SESSION_KEY),
  getToken: () => localStorage.getItem(SESSION_KEY)
};
