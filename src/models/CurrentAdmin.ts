import { Secretary, SeparateApprovalStatusAttributes } from "../interfaces/Secretary";

export type TCurrentAdminAttributes = {
  userUuid: string;
  secretary: Secretary;
};

export const CurrentAdmin = (
  {
    secretary,
    ...attributes
  }: TCurrentAdminAttributes): TCurrentAdmin => {
  return {
    ...attributes,
    secretary,
    approvalStatusAttribute: () => secretary === Secretary.graduados ?
      SeparateApprovalStatusAttributes.graduados : SeparateApprovalStatusAttributes.extension
  } as TCurrentAdmin;
};

export type TCurrentAdmin = TCurrentAdminAttributes & {
  approvalStatusAttribute: () => SeparateApprovalStatusAttributes;
};
