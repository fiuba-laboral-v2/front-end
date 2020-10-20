import { INavBarLink } from "../../models/NavBarLinks/Interfaces";

export interface INavBarTranslations {
  companies: string;
  applicants: string;
  admins: string;
  jobOffers: string;
  jobApplications: string;
  createOffer: string;
  tasks: string;
  signUp: string;
  logIn: string;
  logOut: string;
  myProfile: string;
  myCompanyProfile: string;
  myOffers: string;
  pendingProfile: string;
  rejectedProfile: string;
}

export interface INavBarContainerProps {
  inDrawer?: boolean;
}

export interface INavBarProps extends INavBarContainerProps {
  logOut: () => void;
  links: INavBarLink[];
  isLoggedIn: boolean;
  username?: string;
  translations: INavBarTranslations;
}
