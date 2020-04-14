export const Session = {
  key: "token",
  login: (token: string) => localStorage.setItem(Session.key, token),
  logout: () => localStorage.removeItem(Session.key)
};
