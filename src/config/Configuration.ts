import configurationVariables from "$config/configurationVariables";

const env = (process.env.REACT_APP_STAGE || process.env.NODE_ENV) as ("production" | "staging" | "development" | "test" | "test_travis");
const Configuration = configurationVariables[env];

export default Configuration;
