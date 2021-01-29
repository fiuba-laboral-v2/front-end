import React, { FunctionComponent } from "react";
import { Link, useHistory } from "react-router-dom";
import { Window } from "$models/Window";

export const ReloadLink: FunctionComponent<IReloadLinkProps> = ({ to, className, children }) => {
  const history = useHistory();

  return (
    <Link
      className={className}
      to="#"
      onClick={() => {
        document.getElementById("root")!.style.display = "none";
        history.push(to);
        Window.reload();
      }}
    >
      {children}
    </Link>
  );
};

interface IReloadLinkProps {
  to: string;
  className?: string;
}
