import { loader } from "graphql.macro";

const getAdminById = loader("./getAdminByID.graphql");
const translation = loader("./translation.graphql");

export {
  getAdminById,
  translation
};
