import React, { FunctionComponent, useState } from "react";
import { ICareersEditableContainerProps } from "./interface";
import { CareersEditable } from "./component";
import { ICareer } from "../../../interfaces/Applicant";
import { getCareers, getTranslations } from "$queries";
import { useQuery } from "@apollo/react-hooks";
import NotFound from "$pages/NotFound";

const CareersEditableContainer: FunctionComponent<ICareersEditableContainerProps> = (
  {
    setCareer,
    careers
  }) => {
  const [state, setState] = useState<ICareer>();
  const { data, error } = useQuery(getCareers);
  const { data: translationsData } = useQuery(getTranslations, {
      variables: {
        paths: [
          "career.selectACareer",
          "applicant.creditsProgress",
          "applicant.careers"
        ]
      }
    }
  );

  const [
    creditsProgressTranslation,
    careersTitleTranslation,
    selectACareerTranslation
  ] = translationsData ? translationsData.getTranslations : ["", "", ""];
  const allCareers: ICareer[] =  data ? data.getCareers : [];

  const stateUndefined = () => {
    if (state === undefined) return true;
    if (state.code === undefined) return true;
    if (state.description === undefined) return true;
    if (state.credits === undefined) return true;
    return state.creditsCount === undefined;
  };

  const onFinish = () => {
    if (!stateUndefined()) setCareer(state!);
  };

  const onDelete = (item: string) => {
    alert(`Are you sure to delete: ${item}`);
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
    alert(error.message);
    return (<NotFound/>);
  }

  return (
    <CareersEditable
      selectACareerTranslation={selectACareerTranslation}
      creditsProgressTranslation={creditsProgressTranslation}
      careersTitleTranslation={careersTitleTranslation}
      onFinish={onFinish}
      onDelete={onDelete}
      setCareer={onChange}
      setCreditsCount={setCreditsCount}
      allCareers={allCareers}
      currentCareers={careers || []}
    />
  );
};

export { CareersEditableContainer };
