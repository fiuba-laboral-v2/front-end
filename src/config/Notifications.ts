import { Environment } from "./Environment";

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
}[Environment.env()];
