import { CurrentRole } from "./interfaces";

export const SessionStorageRepository = {
  saveCurrentRole: (role: CurrentRole) => sessionStorage.setItem("currentRole", role),
  getCurrentRole: () => sessionStorage.getItem("currentRole")
};
