import { gql } from "apollo-boost";

const GET_ADMIN = gql`
    {
      getAdminById(id: "001") {
        id
        name
        surname
        age
      }
    }
`;

export default GET_ADMIN;
