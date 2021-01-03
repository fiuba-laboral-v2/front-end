import { SessionStorageRepository, RoleName } from "$repositories";
import { Role } from "$models/Role";

describe("SessionStorageRepository", () => {
  it("saves the admin as the currentRole in the session storage", () => {
    const currentRole = new Role(RoleName.Admin);
    SessionStorageRepository.saveCurrentRole(currentRole);
    expect(SessionStorageRepository.getCurrentRole()).toEqual(currentRole);
  });

  it("saves the company as the currentRole in the session storage", () => {
    const currentRole = new Role(RoleName.Company);
    SessionStorageRepository.saveCurrentRole(currentRole);
    expect(SessionStorageRepository.getCurrentRole()).toEqual(currentRole);
  });

  it("saves the applicant as the currentRole in the session storage", () => {
    const currentRole = new Role(RoleName.Applicant);
    SessionStorageRepository.saveCurrentRole(currentRole);
    expect(SessionStorageRepository.getCurrentRole()).toEqual(currentRole);
  });

  it("throws an error if no current role is stored", () => {
    SessionStorageRepository.clear();
    expect(() => SessionStorageRepository.getCurrentRole()).toThrowError(
      "Current role was not found"
    );
  });
});
