import React, { FunctionComponent, useState } from "react";
import { ICareersEditableContainerProps } from "./interface";
import { CareersEditable } from "./component";
import { ICareer } from "../../../interfaces/Applicant";
import { getCareers } from "$queries";
import { useQuery } from "@apollo/react-hooks";
import NotFound from "$pages/NotFound";

const CareersEditableContainer: FunctionComponent<ICareersEditableContainerProps> = (
  {
    title,
    creditsProgressTranslation,
    setCareer,
    careers
  }) => {
  const [state, setState] = useState<ICareer>();

  const { data, error } = useQuery(getCareers);

  const allCareers =  data ? data.getCareers : [];

  const stateUndefined = () => {
    if (state === undefined) return true;
    if (state.code === undefined) return true;
    if (state.description === undefined) return true;
    if (state.credits === undefined) return true;
    if (state.creditsCount === undefined) return true;
    return false;
  };

  const onFinish = () => {
    if (!stateUndefined()) setCareer(state!);
  };

  const onChange = (code: string, Careers: ICareer[]) => {
    if (code === "none") return;

    const career = Careers.find(aCareer => aCareer.code === code);
    if (!career) throw new Error(`The career ${code} does not exists`);

    career.creditsCount = state?.creditsCount;
    return setState(career);
  };

  const setCreditsCount = (creditsCount: number | string) => {
    const newState = Object.assign({}, state);
    newState.creditsCount = Number(creditsCount);
    setState(newState);
  };

  if (error) {
    alert("could not fetch careers");
    return (<NotFound/>);
  }

  return (
    <CareersEditable
      title={title}
      creditsProgressTranslation={creditsProgressTranslation}
      onFinish={onFinish}
      setCareer={onChange}
      setCreditsCount={setCreditsCount}
      allCareers={allCareers}
      currentCareers={careers || []}
    />
  );
};

export { CareersEditableContainer };
