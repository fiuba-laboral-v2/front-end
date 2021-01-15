import { IAdminTasksFilter } from "$interfaces/AdminTask";

const SEPARATOR = "-";
const TYPES = "types";
const STATUSES = "statuses";

export class AdminTasksFilter extends URLSearchParams {
  public getFilter(): IAdminTasksFilter | undefined {
    const stringStatuses = this.get(STATUSES);
    const stringTypes = this.get(TYPES);
    if (stringStatuses === null || stringTypes === null) return;
    return {
      statuses: stringStatuses.split(SEPARATOR).filter(status => status !== ""),
      adminTaskTypes: stringTypes.split(SEPARATOR).filter(status => status !== "")
    } as IAdminTasksFilter;
  }

  public setFilter(filter: IAdminTasksFilter) {
    this.set(STATUSES, filter.statuses.join(SEPARATOR));
    this.set(TYPES, filter.adminTaskTypes.join(SEPARATOR));
  }
}
