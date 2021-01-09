import React, { FunctionComponent, useState } from "react";
import { useHistory } from "react-router-dom";
import { JobApplicationsFilter } from "$models/SearchFilters/JobApplicationsFilter";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { ListPageContainer } from "$components/ListPageContainer";
import { ListHeader } from "./ListHeader";
import { Filter } from "./Filter";
import { ListContentItem } from "./ListContentItem";
import { FiltersButton } from "../components/FiltersButton";
import { IJobApplication } from "$interfaces/JobApplication";
import { useJobApplications } from "$hooks/queries";

import styles from "./styles.module.scss";

export const JobApplications: FunctionComponent<IContainerProps> = ({ searchQuery }) => {
  const [showFilter, setShowFilter] = useState(!!searchQuery);
  const filter = new JobApplicationsFilter(searchQuery);
  const response = useJobApplications(filter);
  const jobApplications = response?.data?.getJobApplications.results;
  const history = useHistory();

  const onClickFilter = () => {
    setShowFilter(!showFilter);
    filter.clear();
    history.push(RoutesBuilder.admin.jobApplications({ searchParams: filter.toString() }));
  };

  return (
    <ListPageContainer
      titleTranslationPath={"adminJobApplicationsListMainTitle"}
      listHeader={<ListHeader />}
      listContentItem={(jobApplication: IJobApplication) => (
        <ListContentItem jobApplication={jobApplication} />
      )}
      filter={
        <Filter filter={filter} refetchJobApplications={response.refetch} showFilter={showFilter} />
      }
      listHeaderClassName={styles.tableDisplay}
      rowClassName={styles.tableDisplay}
      items={jobApplications}
      fetchMore={response.fetchMore}
      shouldFetchMore={response.data?.getJobApplications.shouldFetchMore}
      loading={response.loading}
    >
      <FiltersButton showFilter={showFilter} onClick={onClickFilter} />
    </ListPageContainer>
  );
};

interface IContainerProps {
  searchQuery: string;
}
