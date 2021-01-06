import React, { FunctionComponent, useState } from "react";
import { useHistory } from "react-router-dom";
import { IApplicant } from "$interfaces/Applicant";
import { useApplicants, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ApplicantsFilter } from "$models/ApplicantsFilter";

import { ListPageContainer } from "$components/ListPageContainer";
import { ListHeader } from "./ListHeader";
import { ListContentItem } from "./ListContentItem";
import { Filter } from "./Filter";
import { Button } from "$components/Button";

import styles from "./styles.module.scss";

export const Applicants: FunctionComponent<IContainerProps> = ({ searchQuery }) => {
  const history = useHistory();
  const translations = useTranslations<ITranslations>("adminApplicants");
  const [showFilter, setShowFilter] = useState(false);
  const filter = new ApplicantsFilter(searchQuery);
  const response = useApplicants(filter);
  const applicants = response?.data?.getApplicants.results;

  return (
    <ListPageContainer
      titleTranslationPath={"adminApplicantListMainTitle"}
      listHeader={<ListHeader />}
      filter={
        <Filter filter={filter} refetchApplicants={response.refetch} showFilter={showFilter} />
      }
      listContentItem={(applicant: IApplicant) => <ListContentItem applicant={applicant} />}
      listHeaderClassName={styles.tableDisplay}
      rowClassName={styles.tableDisplay}
      items={applicants}
      fetchMore={response.fetchMore}
      shouldFetchMore={response.data?.getApplicants.shouldFetchMore}
      loading={response.loading}
    >
      <Button
        kind="secondary"
        onClick={() => {
          setShowFilter(!showFilter);
          filter.clear();
          history.push(RoutesBuilder.admin.applicants({ searchParams: filter.toString() }));
        }}
      >
        {showFilter ? translations?.cleanFilters : translations?.filters}
      </Button>
    </ListPageContainer>
  );
};

interface IContainerProps {
  searchQuery: string;
}

interface ITranslations {
  cleanFilters: string;
  filters: string;
}
