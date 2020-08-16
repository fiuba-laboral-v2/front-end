export const getOffers = {
  keyArgs: [],
  merge: (existing: IQueryResult | undefined, incoming: IQueryResult) => ({
    ...incoming,
    results: [...existing?.results || [], ...incoming.results]
  })
};

interface IQueryResult {
  results: object[];
}