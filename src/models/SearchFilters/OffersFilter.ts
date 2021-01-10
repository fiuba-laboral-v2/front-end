import { IUseOffersFilter } from "$hooks";
import { OfferStatus } from "$interfaces/Offer";
import { difference } from "lodash";

const SEPARATOR = "-";
const CAREER_CODES = "carreras";
const COMPANY_NAME = "nombre-de-empresa";
const BUSINESS_SECTOR = "rubro";
const TITLE = "nombre-del-puesto";
const STUDENTS_STATUS = "estado-de-aprobacion-de-alumnos";
const GRADUATES_STATUS = "estado-de-aprobacion-de-graduados";
const VALID_STATUSES = [
  OfferStatus.approved,
  OfferStatus.rejected,
  OfferStatus.pending,
  OfferStatus.expired
];

export class OffersFilter extends URLSearchParams {
  public setValues(values: IUseOffersFilter) {
    this.setCompanyName(values.companyName);
    this.setBusinessSector(values.businessSector);
    this.setTitle(values.title);
    this.setStudentsStatus(values.studentsStatus);
    this.setGraduatesStatus(values.graduatesStatus);
    this.setCareerCodes(values.careerCodes);
  }

  public getValues() {
    return {
      companyName: this.getCompanyName(),
      businessSector: this.getBusinessSector(),
      title: this.getTitle(),
      studentsStatus: this.getStudentsStatus(),
      graduatesStatus: this.getGraduatesStatus(),
      careerCodes: this.getCareerCodes()
    };
  }

  public clear() {
    this.delete(COMPANY_NAME);
    this.delete(BUSINESS_SECTOR);
    this.delete(TITLE);
    this.delete(STUDENTS_STATUS);
    this.delete(GRADUATES_STATUS);
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

  public getStudentsStatus() {
    const status = this.get(STUDENTS_STATUS);
    if (!VALID_STATUSES.includes(status as OfferStatus)) return undefined;
    return status as OfferStatus | undefined;
  }

  public getGraduatesStatus() {
    const status = this.get(GRADUATES_STATUS);
    if (!VALID_STATUSES.includes(status as OfferStatus)) return undefined;
    return status as OfferStatus | undefined;
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

  private setStudentsStatus(status?: OfferStatus) {
    this.set(STUDENTS_STATUS, status as OfferStatus);
  }

  private setGraduatesStatus(status?: OfferStatus) {
    this.set(GRADUATES_STATUS, status as OfferStatus);
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
