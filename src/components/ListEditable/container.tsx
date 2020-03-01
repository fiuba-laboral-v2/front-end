import React, { FunctionComponent, useState } from "react";
import { IListEditableProps } from "./interface";
import { ListEditable } from "./component";

const ListEditableContainer: FunctionComponent<IListEditableProps> = (
  {
    setList,
    list,
    title
  }) => {
  const [state, setState] = useState<string | number>();

  const onChange = (newValue: string | number) => {
    setState(newValue);
  };

  const onFinish = () => {
    if (state) setList(state);
    setState(undefined);
  };

  return (
    <ListEditable
      setList={onChange}
      list={list}
      title={title}
      onFinish={onFinish}
    />
  );
};

export { ListEditableContainer };
