import deployJSON from "$config/environment.json";

const env = (process.env.NODE_ENV || "development") as ("production" | "staging" | "development" | "test" | "test_travis");
const configuration = deployJSON[env];

export default configuration;
