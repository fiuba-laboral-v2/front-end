import { IUseJobApplicationsFilter } from "$hooks";

const COMPANY_NAME = "nombre-de-empresa";
const APPLICANT_NAME = "nombre-de-postulante";
const OFFER_TITLE = "nombre-del-puesto";

export class JobApplicationsFilter extends URLSearchParams {
  public setValues(values: IUseJobApplicationsFilter) {
    this.setCompanyName(values.companyName);
    this.setApplicantName(values.applicantName);
    this.setOfferTitle(values.offerTitle);
  }

  public getValues() {
    return {
      companyName: this.getCompanyName(),
      applicantName: this.getApplicantName(),
      offerTitle: this.getOfferTitle()
    };
  }

  public clear() {
    this.delete(COMPANY_NAME);
    this.delete(APPLICANT_NAME);
    this.delete(OFFER_TITLE);
  }

  public getCompanyName() {
    return this.getName(COMPANY_NAME);
  }

  public getApplicantName() {
    return this.getName(APPLICANT_NAME);
  }

  public getOfferTitle() {
    return this.getName(OFFER_TITLE);
  }

  private setCompanyName(companyName?: string) {
    return this.setName(COMPANY_NAME, companyName);
  }

  private setApplicantName(applicantName?: string) {
    return this.setName(APPLICANT_NAME, applicantName);
  }

  private setOfferTitle(offerTitle?: string) {
    return this.setName(OFFER_TITLE, offerTitle);
  }

  private setName(key: string, name?: string) {
    if (name === undefined || name === null) return;
    this.set(key, name);
  }

  private getName(key: string) {
    const name = this.get(key);
    if (name === null) return undefined;
    return name;
  }
}
