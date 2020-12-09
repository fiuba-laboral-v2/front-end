type Env = "production" | "staging" | "development" | "test";
const env = (process.env.REACT_APP_STAGE || process.env.NODE_ENV) as Env;

export const NotificationsConfig = {
  production: {
    pollInterval: 30000
  },
  staging: {
    pollInterval: 30000
  },
  development: {
    pollInterval: 30000
  },
  test: {
    pollInterval: 30000
  }
}[env];
