import React, { FunctionComponent, useState } from "react";
import { Title } from "$components/Title";
import { AppliedFilters } from "./AppliedFilters";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { ApplyFilters } from "./ApplyFilters";
import { IFiltersProps } from "./interface";
import { Button } from "$components/Button";
import { Dialog, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { ApplyFiltersTitle } from "./ApplyFiltersTitle";

export const Filters: FunctionComponent<IFiltersProps> = ({
  className,
  filter,
  careers,
  translations
}) => {
  const [filtersAreOpen, setFiltersAreOpen] = useState(false);
  const applyFiltersProps = {
    filter: filter,
    careers: careers,
    translations: translations
  };
  return (
    <div className={classNames(styles.filtersContainer, className)}>
      <div className={styles.filters}>
        <div className={styles.titleContainer}>
          <Title className={styles.title}>{translations?.title}</Title>
          <div>
            <Button
              className={styles.openMobileApplyFilters}
              kind="primary"
              onClick={() => setFiltersAreOpen(true)}
            >
              {translations?.filter}
            </Button>
          </div>
        </div>
        <AppliedFilters className={styles.appliedFilters} filter={filter} careers={careers} />
        <ApplyFilters withTitle className={styles.desktopApplyFilters} {...applyFiltersProps} />
        <Dialog fullScreen open={filtersAreOpen}>
          <header className={styles.mobileApplyFiltersHeader}>
            <ApplyFiltersTitle>{translations?.addFilters}</ApplyFiltersTitle>
            <IconButton disableRipple color="primary" onClick={() => setFiltersAreOpen(false)}>
              <CloseIcon />
            </IconButton>
          </header>
          <ApplyFilters
            withTitle={false}
            className={styles.mobileApplyFilters}
            {...applyFiltersProps}
          />
        </Dialog>
      </div>
    </div>
  );
};
