import { SessionStorageRepository, CurrentRole } from "$repositories";

describe("SessionStorageRepository", () => {
  it("saves the admin as the currentRole in the session storage", () => {
    const currentRole = CurrentRole.admin;
    SessionStorageRepository.saveCurrentRole(currentRole);
    expect(SessionStorageRepository.getCurrentRole()).toEqual(currentRole);
  });

  it("saves the company as the currentRole in the session storage", () => {
    const currentRole = CurrentRole.company;
    SessionStorageRepository.saveCurrentRole(currentRole);
    expect(SessionStorageRepository.getCurrentRole()).toEqual(currentRole);
  });

  it("saves the applicant as the currentRole in the session storage", () => {
    const currentRole = CurrentRole.applicant;
    SessionStorageRepository.saveCurrentRole(currentRole);
    expect(SessionStorageRepository.getCurrentRole()).toEqual(currentRole);
  });
});
