export interface IPaginatedResult<Result> {
  results: Result[];
  shouldFetchMore?: boolean;
}
