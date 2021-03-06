import React, { FunctionComponent, ReactNode } from "react";
import { Window } from "$components/Window";
import { Header } from "$components/Header";
import { MainTitle } from "./MainTitle";
import { MainContainer } from "./MainContainer";
import { List } from "./List";
import { Listable, ListableReactNodes } from "./interfaces";
import styles from "./style.module.scss";

export const ListPageContainer: FunctionComponent<IListPageContainer> = ({
  title,
  titleTranslationPath,
  listHeader,
  listContentItem,
  items,
  listHeaderClassName,
  rowClassName,
  fetchMore,
  shouldFetchMore,
  loading,
  children,
  filter
}) => (
  <Window loading={!items} width="fullWidth" desktopOnly>
    <MainContainer>
      <div className={styles.titleAndFilterContainer}>
        <div className={styles.titleContainer}>
          {!title && <MainTitle className={styles.title} translationPath={titleTranslationPath} />}
          {title && <Header className={styles.title} title={title || ""} />}
          <div className={styles.children}>{children}</div>
        </div>
        <div className={styles.filterContainer}>{filter}</div>
      </div>
      {filter && (
        <div className={styles.container}>
          <List
            className={styles.list}
            headerClassName={listHeaderClassName}
            rowClassName={rowClassName}
            listHeader={listHeader}
            listContentItem={listContentItem}
            items={items || []}
            fetchMore={fetchMore}
            shouldFetchMore={shouldFetchMore}
            loading={loading}
          />
        </div>
      )}
      {!filter && (
        <List
          headerClassName={listHeaderClassName}
          rowClassName={rowClassName}
          listHeader={listHeader}
          listContentItem={listContentItem}
          items={items || []}
          fetchMore={fetchMore}
          shouldFetchMore={shouldFetchMore}
          loading={loading}
        />
      )}
    </MainContainer>
  </Window>
);

interface IListPageContainer {
  title?: string;
  titleTranslationPath: string;
  filter?: ReactNode;
  listHeader: ReactNode;
  listContentItem: ListableReactNodes;
  items?: Listable[];
  listHeaderClassName: string;
  rowClassName: string;
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
  loading: boolean;
}
