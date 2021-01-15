import { AdminTasksFilter } from "$models/SearchFilters/AdminTasksFilter";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

describe("AdminTasksFilter", () => {
  describe("getFilter", () => {
    it("transforms a search query into an IAdminTasksFilter", () => {
      const adminTasksFilter = new AdminTasksFilter(
        ["statuses=pending", "types=Applicant-Company-JobApplication-Offer"].join("&")
      );
      expect(adminTasksFilter.getFilter()).toEqual({
        statuses: [ApprovalStatus.pending],
        adminTaskTypes: ["Applicant", "Company", "JobApplication", "Offer"]
      });
    });

    it("transforms another search query into an IAdminTasksFilter", () => {
      const adminTasksFilter = new AdminTasksFilter(
        ["statuses=pending-approved-rejected", "types=Applicant-Offer"].join("&")
      );
      expect(adminTasksFilter.getFilter()).toEqual({
        statuses: [ApprovalStatus.pending, ApprovalStatus.approved, ApprovalStatus.rejected],
        adminTaskTypes: ["Applicant", "Offer"]
      });
    });

    it("transforms an empty search query into an empty IAdminTasksFilter", () => {
      const adminTasksFilter = new AdminTasksFilter(["statuses=", "types="].join("&"));
      expect(adminTasksFilter.getFilter()).toEqual({
        statuses: [],
        adminTaskTypes: []
      });
    });

    it("transforms a search query without statuses into an IAdminTasksFilter", () => {
      const adminTasksFilter = new AdminTasksFilter(["statuses=", "types=Company"].join("&"));
      expect(adminTasksFilter.getFilter()).toEqual({
        statuses: [],
        adminTaskTypes: ["Company"]
      });
    });

    it("transforms a search query without types into an IAdminTasksFilter", () => {
      const adminTasksFilter = new AdminTasksFilter(
        ["statuses=rejected-pending", "types="].join("&")
      );
      expect(adminTasksFilter.getFilter()).toEqual({
        statuses: [ApprovalStatus.rejected, ApprovalStatus.pending],
        adminTaskTypes: []
      });
    });
  });

  describe("setFilter", () => {
    it("transforms an IAdminTasksFilter into a search query", () => {
      const adminTasksFilter = new AdminTasksFilter();
      adminTasksFilter.setFilter({
        statuses: [ApprovalStatus.pending],
        adminTaskTypes: ["Applicant", "Company", "JobApplication", "Offer"]
      });
      expect(adminTasksFilter.toString()).toEqual(
        ["statuses=pending", "types=Applicant-Company-JobApplication-Offer"].join("&")
      );
    });

    it("transforms another IAdminTasksFilter into a search query", () => {
      const adminTasksFilter = new AdminTasksFilter();
      adminTasksFilter.setFilter({
        statuses: [ApprovalStatus.pending, ApprovalStatus.approved, ApprovalStatus.rejected],
        adminTaskTypes: ["Applicant", "Offer"]
      });
      expect(adminTasksFilter.toString()).toEqual(
        ["statuses=pending-approved-rejected", "types=Applicant-Offer"].join("&")
      );
    });

    it("transforms an empty IAdminTasksFilter into an empty search query", () => {
      const adminTasksFilter = new AdminTasksFilter();
      adminTasksFilter.setFilter({
        statuses: [],
        adminTaskTypes: []
      });
      expect(adminTasksFilter.toString()).toEqual(["statuses=", "types="].join("&"));
    });

    it("transforms an IAdminTasksFilter without statuses into a search query", () => {
      const adminTasksFilter = new AdminTasksFilter();
      adminTasksFilter.setFilter({
        statuses: [],
        adminTaskTypes: ["Company"]
      });
      expect(adminTasksFilter.toString()).toEqual(["statuses=", "types=Company"].join("&"));
    });

    it("transforms an IAdminTasksFilter without types into a search query", () => {
      const adminTasksFilter = new AdminTasksFilter();
      adminTasksFilter.setFilter({
        statuses: [ApprovalStatus.rejected, ApprovalStatus.pending],
        adminTaskTypes: []
      });
      expect(adminTasksFilter.toString()).toEqual(
        ["statuses=rejected-pending", "types="].join("&")
      );
    });
  });
});
