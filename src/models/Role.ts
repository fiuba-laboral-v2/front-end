import { CurrentRole } from "./Repositories";

export class Role {
  public name: CurrentRole;

  constructor(name: CurrentRole) {
    this.name = name;
  }

  public isCompanyRole() {
    return this.name === CurrentRole.Company;
  }

  public isApplicantRole() {
    return this.name === CurrentRole.Applicant;
  }

  public isAdminRole() {
    return this.name === CurrentRole.Admin;
  }
}
