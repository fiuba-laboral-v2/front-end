export const paginatedQuery = {
  keyArgs: [],
  merge: (
    existing: IQueryResult | undefined,
    incoming: IQueryResult,
    { args }: { args: Record<string, any> | null }
  ) => {
    if (!args?.updatedBeforeThan) existing = undefined;
    return ({
      ...incoming,
      results: [...existing?.results || [], ...incoming.results]
    });
  }
};

interface IQueryResult {
  results: object[];
}
