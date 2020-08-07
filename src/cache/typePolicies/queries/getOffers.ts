export const getOffers = {
  keyArgs: [],
  merge: (existing: IQueryResult | undefined, incoming: IQueryResult) => ({
    ...incoming,
    offers: [...existing?.offers || [], ...incoming.offers]
  })
};

interface IQueryResult {
  offers: object[];
}
