import React, { FunctionComponent } from "react";
import { Item } from "./Item";
import { ITranslations } from "./container";
import { Columns } from "../Columns";

export const ListHeader: FunctionComponent<IListHeader> = ({ translations }) => (
  <Columns>
    { column => <Item key={column} column={column} text={translations[column]} /> }
  </Columns>
);

interface IListHeader {
  translations: ITranslations;
}
