import React, { FunctionComponent } from "react";
import { HeaderContainer, Item } from "./elements";
import { ITranslations } from "./container";
import { Columns } from "../Columns";

export const ListHeader: FunctionComponent<IListHeader> = ({ translations }) => (
  <HeaderContainer>
    <Columns>
      { column => <Item key={column} text={translations[column]} /> }
    </Columns>
  </HeaderContainer>
);

interface IListHeader {
  translations: ITranslations;
}
