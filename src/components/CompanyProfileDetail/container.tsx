import React, { FunctionComponent } from "react";
import CompanyProfileDetail from "./component";
import { getCompanyProfileById } from "$queries";
import { useQuery } from "@apollo/react-hooks";

const CompanyProfileDetailContainer: FunctionComponent = () => {
  const { data } = useQuery(getCompanyProfileById, {
        variables: {
          id: 4
        }
      }
  );

  const {
    companyName,
    slogan,
    logo,
    description,
    photos,
    website,
    email

  } = data ? data.getCompanyProfileById : {
    companyName: "",
    slogan: "",
    logo: "",
    description: "",
    website: "",
    email: "",
    photos: []

  };

  return (
    <CompanyProfileDetail
      name={companyName}
      email={email}
      slogan={slogan}
      logoImageSource={logo}
      website={website}
      description={description}
      photoImageSources={photos}
    />
  );
};

export default CompanyProfileDetailContainer;
