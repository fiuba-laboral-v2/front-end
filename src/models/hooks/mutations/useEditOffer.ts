import { EDIT_OFFER } from "$mutations";
import { useMutation } from "$hooks";
import { IOffer } from "$interfaces/Offer";

export const useEditOffer = () =>
  useMutation<IEditOffer, { editOffer: IOffer & { company: never } }>(EDIT_OFFER);

interface IEditOffer {
  title: string;
  description: string;
  hoursPerDay: number;
  minimumSalary: number;
  maximumSalary: number;
}
