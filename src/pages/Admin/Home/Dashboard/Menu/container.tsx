import React, { Fragment, FunctionComponent } from "react";
import { Redirect } from "$components/Redirect";
import { useTranslations } from "$hooks/queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { IMenuTranslations } from "./interfaces";
import { Menu } from "./component";

export const MenuContainer: FunctionComponent = () => {
  const transactions = useTranslations<IMenuTranslations>("adminMenu");
  if (transactions.loading) return <Fragment/>;
  if (transactions.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  return <Menu translations={transactions.data}/>;
};
