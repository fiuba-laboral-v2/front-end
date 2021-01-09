import { IUseCompaniesFilter } from "$hooks";

const COMPANY_NAME = "nombre-de-empresa";
const BUSINESS_SECTOR = "rubro";

export class CompaniesFilter extends URLSearchParams {
  public setValues(values: IUseCompaniesFilter) {
    this.setCompanyName(values.companyName);
    this.setBusinessSector(values.businessSector);
  }

  public getValues() {
    return {
      companyName: this.getCompanyName(),
      businessSector: this.getBusinessSector()
    };
  }

  public clear() {
    this.delete(COMPANY_NAME);
    this.delete(BUSINESS_SECTOR);
  }

  public getCompanyName() {
    return this.getName(COMPANY_NAME);
  }

  public getBusinessSector() {
    return this.getName(BUSINESS_SECTOR);
  }

  private setCompanyName(companyName?: string) {
    return this.setName(COMPANY_NAME, companyName);
  }

  private setBusinessSector(applicantName?: string) {
    return this.setName(BUSINESS_SECTOR, applicantName);
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
