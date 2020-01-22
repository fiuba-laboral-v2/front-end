import configurationVariables from "$config/environment";

const env = (process.env.REACT_APP_STAGE || "development") as ("production" | "staging" | "development" | "test" | "test_travis");
const configuration = configurationVariables[env];

export default configuration;
