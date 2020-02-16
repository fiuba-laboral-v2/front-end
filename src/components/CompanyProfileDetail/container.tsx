import React, { FunctionComponent } from "react";
import CompanyProfileDetail from "./component";
import { getCompanyById } from "$queries";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import NotFound from "$pages/NotFound";

const CompanyProfileDetailContainer: FunctionComponent = () => {
  const { id } = useParams();
  const response = useQuery(getCompanyById, {
        variables: {
          id: id
        }
      }
  );

  if (response.error) {
    return (<NotFound/>);
  }

  const {
    companyName,
    slogan,
    logo,
    description,
    photos,
    website,
    email
  } = response.data ? response.data.getCompanyById : {
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
