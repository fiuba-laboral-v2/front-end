import { INavBarLink } from "$models/NavBarLinks/Interfaces";
import { RefObject } from "react";

export interface INavBarTranslations {
  companies: string;
  applicants: string;
  admins: string;
  jobOffers: string;
  jobApplications: string;
  createOffer: string;
  notifications: string;
  tasks: string;
  signUp: string;
  logOut: string;
  myProfile: string;
  myCompanyProfile: string;
  myOffers: string;
  pendingProfile: string;
  rejectedProfile: string;
}

export interface INavBarContainerProps {
  className?: string;
  inDrawer?: boolean;
  toggleDrawer?: () => void;
}

export interface INavBarProps extends INavBarContainerProps {
  logOut: () => void;
  links: INavBarLink[];
  username?: string;
  translations: INavBarTranslations;
  currentPath: string;
  bottomEl: RefObject<HTMLDivElement>;
  navBarEl: RefObject<HTMLDivElement>;
  iconEl: RefObject<SVGSVGElement>;
  canScroll: boolean;
}
