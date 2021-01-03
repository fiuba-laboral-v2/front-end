import { CurrentRole } from "./interfaces";
import { Role } from "$models/Role";

export const SessionStorageRepository = {
  saveCurrentRole: (role: Role) => sessionStorage.setItem("currentRole", role.role),
  getCurrentRole: () => {
    const role = sessionStorage.getItem("currentRole") as CurrentRole;
    if (!role) throw new Error("Current role was not found");
    return new Role(role);
  },
  clear: () => sessionStorage.clear()
};
