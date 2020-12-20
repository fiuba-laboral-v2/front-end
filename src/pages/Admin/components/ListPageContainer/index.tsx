import React, { FunctionComponent, ReactNode } from "react";
import { Window } from "$components/Window";
import { MainTitle } from "./MainTitle";
import { MainContainer } from "./MainContainer";
import { List } from "./List";
import { Listable, ListableReactNodes } from "./interfaces";
import styles from "./style.module.scss";

export const ListPageContainer: FunctionComponent<IListPageContainer> = ({
  titleTranslationPath,
  listHeader,
  listContentItem,
  items,
  listHeaderClassName,
  rowClassName,
  fetchMore,
  shouldFetchMore,
  loading,
  children
}) => (
  <Window loading={!items} width="fullWidth" desktopOnly>
    <MainContainer>
      <div className={styles.titleContainer}>
        <MainTitle className={styles.title} translationPath={titleTranslationPath} />
        <div className={styles.children}>{children}</div>
      </div>
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
    </MainContainer>
  </Window>
);

interface IListPageContainer {
  titleTranslationPath: string;
  listHeader: ReactNode;
  listContentItem: ListableReactNodes;
  items?: Listable[];
  listHeaderClassName: string;
  rowClassName: string;
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
  loading: boolean;
}
