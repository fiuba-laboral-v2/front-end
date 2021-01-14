import { queries } from "./queries";

const discardExistingResults = (_: object[] | undefined, incoming: object[]) => incoming;

export const typePolicies = {
  Query: {
    fields: {
      ...queries
    }
  },
  Applicant: {
    fields: {
      knowledgeSections: { merge: discardExistingResults },
      experienceSections: { merge: discardExistingResults },
      careers: { merge: discardExistingResults }
    }
  },
  Offer: {
    fields: {
      sections: { merge: discardExistingResults }
    }
  },
  AdminSettings: {
    keyFields: []
  },
  SharedSettings: {
    keyFields: []
  },
  HasUnreadAdminNotifications: {
    keyFields: []
  },
  HasUnreadApplicantNotifications: {
    keyFields: []
  },
  HasUnreadCompanyNotifications: {
    keyFields: []
  }
};
