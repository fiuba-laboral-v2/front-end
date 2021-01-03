import { SessionStorageRepository, CurrentRole } from "$repositories";
import { Role } from "$models/Role";

describe("SessionStorageRepository", () => {
  it("saves the admin as the currentRole in the session storage", () => {
    const currentRole = new Role(CurrentRole.admin);
    SessionStorageRepository.saveCurrentRole(currentRole);
    expect(SessionStorageRepository.getCurrentRole()).toEqual(currentRole);
  });

  it("saves the company as the currentRole in the session storage", () => {
    const currentRole = new Role(CurrentRole.company);
    SessionStorageRepository.saveCurrentRole(currentRole);
    expect(SessionStorageRepository.getCurrentRole()).toEqual(currentRole);
  });

  it("saves the applicant as the currentRole in the session storage", () => {
    const currentRole = new Role(CurrentRole.applicant);
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
