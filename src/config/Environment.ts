type Env = "production" | "staging" | "development" | "test";

export const Environment = {
  NODE_ENV: () => process.env.NODE_ENV,
  env: () => (process.env.REACT_APP_STAGE || Environment.NODE_ENV()) as Env,
  publicUrl: () => process.env.PUBLIC_URL
};
