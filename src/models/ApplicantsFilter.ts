import { difference } from "lodash";
import { IUseApplicantsFilter } from "$hooks";
import { ApplicantType } from "$interfaces/Applicant";

const SEPARATOR = "-";
const CAREER_CODES = "carreras";
const NAME = "nombre";
const APPLICANT_TYPE = "tipo_de_postulante";
const VALID_APPLICANT_TYPES = [ApplicantType.student, ApplicantType.graduate];

export class ApplicantsFilter extends URLSearchParams {
  public setFilter(values: IUseApplicantsFilter) {
    this.setCareerCodes(values.careerCodes);
    this.setName(values.name);
    this.setApplicantType(values.applicantType);
  }

  public getCareerCodes() {
    return difference(this.get(CAREER_CODES)?.split(SEPARATOR), [""]);
  }

  public getName() {
    return this.get(NAME);
  }

  public getApplicantType() {
    const applicantType = this.get(APPLICANT_TYPE);
    if (!VALID_APPLICANT_TYPES.includes(applicantType as ApplicantType)) return null;
    return applicantType as ApplicantType | null;
  }

  private setCareerCodes(codes?: string[]) {
    if (codes === undefined || codes === null) return;
    this.set(CAREER_CODES, codes.join(SEPARATOR));
  }

  private setName(name?: string) {
    if (name === undefined || name === null) return;
    this.set(NAME, name);
  }

  private setApplicantType(applicantType?: ApplicantType) {
    if (applicantType === undefined || applicantType === null) return;
    this.set(APPLICANT_TYPE, applicantType);
  }
}
