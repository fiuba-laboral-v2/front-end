import React, { FunctionComponent } from "react";
import { HeaderContainer } from "./HeaderContainer";
import { Item } from "./Item";
import { ITranslations } from "./container";
import { Columns } from "../Columns";

export const ListHeader: FunctionComponent<IListHeader> = ({ translations }) => (
  <HeaderContainer>
    <Columns>
      { column => <Item key={column} column={column} text={translations[column]} /> }
    </Columns>
  </HeaderContainer>
);

interface IListHeader {
  translations: ITranslations;
}
