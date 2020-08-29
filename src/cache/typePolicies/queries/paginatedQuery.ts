import unionBy from "lodash/unionBy";

export const paginatedQuery = {
  keyArgs: [],
  merge: (existing: IQueryResult | undefined, incoming: IQueryResult) => ({
    ...incoming,
    results: unionBy(existing?.results || [], incoming.results, "__ref")
  })
};

interface IQueryResult {
  results: object[];
}
