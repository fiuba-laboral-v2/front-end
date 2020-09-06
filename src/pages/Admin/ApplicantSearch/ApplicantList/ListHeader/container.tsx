import React, { FunctionComponent } from "react";
import { useGetTranslations } from "$hooks";
import { HeaderContainer, Item } from "./styles";

export const ListHeaderContainer: FunctionComponent = () => {
  const translations = useGetTranslations("adminApplicantListHeader");
  return (
    <HeaderContainer>
      {
        translations &&
        translations.map(({ key, value }) => (<Item key={key} text={value} />))
      }
    </HeaderContainer>
  );
};
