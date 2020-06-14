export interface INavBarTranslations {
  companies: string;
  applicants: string;
  jobOffers: string;
  jobApplications: string;
  createOffer: string;
  signUp: string;
  logIn: string;
  logOut: string;
  myProfile: string;
  myCompanyProfile: string;
  myOffers: string;
}

export interface INavBarLink {
  path: string;
  title: string;
  disabled?: boolean;
}
