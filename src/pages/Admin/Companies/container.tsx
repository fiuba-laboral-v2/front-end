import React, { FunctionComponent, useState } from "react";
import { useHistory } from "react-router-dom";
import { ICompany } from "$interfaces/Company";
import { useCompanies } from "$hooks/queries";
import { CompaniesFilter } from "$models/SearchFilters/CompaniesFilter";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { ListPageContainer } from "$components/ListPageContainer";
import { ListHeader } from "./ListHeader";
import { Filter } from "./Filter";
import { FiltersButton } from "../components/FiltersButton";
import { ListContentItem } from "./ListContentItem";

import styles from "./styles.module.scss";

export const Companies: FunctionComponent<IContainerProps> = ({ searchQuery }) => {
  const [showFilter, setShowFilter] = useState(!!searchQuery);
  const filter = new CompaniesFilter(searchQuery);
  const response = useCompanies(filter);
  const companies = response?.data?.getCompanies.results;
  const history = useHistory();

  const onClickFilter = () => {
    setShowFilter(!showFilter);
    filter.clear();
    history.push(RoutesBuilder.admin.companies({ searchParams: filter.toString() }));
  };

  return (
    <ListPageContainer
      titleTranslationPath={"adminCompanyListMainTitle"}
      listHeader={<ListHeader />}
      listContentItem={(company: ICompany) => <ListContentItem company={company} />}
      filter={
        <Filter filter={filter} refetchCompanies={response.refetch} showFilter={showFilter} />
      }
      listHeaderClassName={styles.tableDisplay}
      rowClassName={styles.tableDisplay}
      items={companies}
      fetchMore={response.fetchMore}
      shouldFetchMore={response.data?.getCompanies.shouldFetchMore}
      loading={response.loading}
    >
      <FiltersButton showFilter={showFilter} onClick={onClickFilter} />
    </ListPageContainer>
  );
};

interface IContainerProps {
  searchQuery: string;
}
