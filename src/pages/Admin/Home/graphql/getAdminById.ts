import { gql } from "apollo-boost";

const GET_ADMIN = gql`
    {
      getAdminById(id: "0") {
        id
        name
        surname
        age
      }
    }
`;

export default GET_ADMIN;
