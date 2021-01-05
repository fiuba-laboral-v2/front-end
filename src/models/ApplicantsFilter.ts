import { difference } from "lodash";
import { IUseApplicantsFilter } from "$hooks";
import { ApplicantType } from "$interfaces/Applicant";

const SEPARATOR = "-";
const CAREER_CODES = "carreras";
const NAME = "nombre";
const APPLICANT_TYPE = "tipo_de_postulante";
const VALID_APPLICANT_TYPES = [ApplicantType.student, ApplicantType.graduate];

export class ApplicantsFilter extends URLSearchParams {
  public setValues(values: IUseApplicantsFilter) {
    this.setCareerCodes(values.careerCodes);
    this.setName(values.name);
    this.setApplicantType(values.applicantType);
  }

  public getValues() {
    return {
      careerCodes: this.getCareerCodes(),
      name: this.getName(),
      applicantType: this.getApplicantType()
    };
  }

  public getCareerCodes() {
    const careerCodes = difference(this.get(CAREER_CODES)?.split(SEPARATOR), [""]);
    if (careerCodes.length === 0) return undefined;
    return careerCodes;
  }

  public getName() {
    const name = this.get(NAME);
    if (name === null) return undefined;
    return name;
  }

  public getApplicantType() {
    const applicantType = this.get(APPLICANT_TYPE);
    if (!VALID_APPLICANT_TYPES.includes(applicantType as ApplicantType)) return undefined;
    return applicantType as ApplicantType | undefined;
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
