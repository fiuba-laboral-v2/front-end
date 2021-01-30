export enum RoleName {
  Company = "Company",
  Applicant = "Applicant",
  Admin = "Admin"
}

export class Role {
  public name: RoleName;

  constructor(name: RoleName) {
    this.name = name;
  }

  public isCompanyRole() {
    return this.name === RoleName.Company;
  }

  public isApplicantRole() {
    return this.name === RoleName.Applicant;
  }

  public isAdminRole() {
    return this.name === RoleName.Admin;
  }
}
