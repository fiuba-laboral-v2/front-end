import { CREATE_OFFER } from "$mutations";
import { GET_MY_OFFERS } from "$queries";
import { IMutationOptions, useMutation } from "$hooks";
import { ICreateOffer, IOfferAttributes } from "$interfaces/Offer";
import { IPaginatedResult } from "$hooks/queries/interfaces";

export const useCreateOffer = () => {
  const { mutation, ...result } = useMutation<ICreateOffer, IResponse>(CREATE_OFFER);

  const createOffer = ({ variables, ...options }: IMutationOptions<IResponse, ICreateOffer>) =>
    mutation({
      variables,
      ...options,
      update: (cache, { data }) =>
        cache.modify({
          fields: {
            getMyOffers: async (existingOffers: IPaginatedResult<IOfferAttributes>) => {
              await cache.writeQuery({
                data: {
                  getMyOffers: {
                    shouldFetchMore: true,
                    results: [data?.createOffer]
                  }
                },
                query: GET_MY_OFFERS
              });
              return existingOffers;
            }
          }
        })
    });

  return { createOffer, ...result };
};

interface IResponse {
  createOffer: IOfferAttributes;
}
