import React, { FunctionComponent } from "react";
import { Detail } from "./component";
import { getCompanyById } from "$queries";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import NotFound from "$pages/NotFound";

const DetailContainer: FunctionComponent = () => {
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
    <Detail
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

export { DetailContainer };
