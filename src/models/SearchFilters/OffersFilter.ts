import { IUseOffersFilter } from "$hooks";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";
import { difference } from "lodash";

const SEPARATOR = "-";
const CAREER_CODES = "carreras";
const COMPANY_NAME = "nombre-de-empresa";
const BUSINESS_SECTOR = "rubro";
const TITLE = "nombre-del-puesto";
const APPROVAL_STATUS = "estado-de-aprobacion";
const VALID_APPROVAL_STATUSES = [
  ApprovalStatus.approved,
  ApprovalStatus.rejected,
  ApprovalStatus.pending
];

export class OffersFilter extends URLSearchParams {
  public setValues(values: IUseOffersFilter) {
    this.setCompanyName(values.companyName);
    this.setBusinessSector(values.businessSector);
    this.setTitle(values.title);
    this.setApprovalStatus(values.approvalStatus);
    this.setCareerCodes(values.careerCodes);
  }

  public getValues() {
    return {
      companyName: this.getCompanyName(),
      businessSector: this.getBusinessSector(),
      title: this.getTitle(),
      approvalStatus: this.getApprovalStatus(),
      careerCodes: this.getCareerCodes()
    };
  }

  public clear() {
    this.delete(COMPANY_NAME);
    this.delete(BUSINESS_SECTOR);
    this.delete(TITLE);
    this.delete(APPROVAL_STATUS);
    this.delete(CAREER_CODES);
  }

  public getCompanyName() {
    return this.getName(COMPANY_NAME);
  }

  public getBusinessSector() {
    return this.getName(BUSINESS_SECTOR);
  }

  public getTitle() {
    return this.getName(TITLE);
  }

  public getApprovalStatus() {
    const status = this.get(APPROVAL_STATUS);
    if (!VALID_APPROVAL_STATUSES.includes(status as ApprovalStatus)) return undefined;
    return status as ApprovalStatus | undefined;
  }

  public getCareerCodes() {
    const careerCodes = difference(this.get(CAREER_CODES)?.split(SEPARATOR), [""]);
    if (careerCodes.length === 0) return undefined;
    return careerCodes;
  }

  private setCompanyName(companyName?: string) {
    return this.setName(COMPANY_NAME, companyName);
  }

  private setBusinessSector(businessSector?: string) {
    return this.setName(BUSINESS_SECTOR, businessSector);
  }

  private setTitle(title?: string) {
    return this.setName(TITLE, title);
  }

  private setApprovalStatus(status?: ApprovalStatus) {
    if (status === undefined || status === null) return;
    this.set(APPROVAL_STATUS, status);
  }

  private setCareerCodes(codes?: string[]) {
    if (codes === undefined || codes === null) return;
    this.set(CAREER_CODES, codes.join(SEPARATOR));
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
