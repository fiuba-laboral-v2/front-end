import environmentVariables from "$config/environment";

const env = (process.env.NODE_ENV || "development") as ("production" | "staging" | "development" | "test" | "test_travis");
const configuration = environmentVariables[env];

export default configuration;
