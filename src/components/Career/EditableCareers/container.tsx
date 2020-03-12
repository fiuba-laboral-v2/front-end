import React, { FunctionComponent, useState } from "react";
import { IEditableCareersContainerProps } from "./interface";
import { EditableCareers } from "./component";
import { ICareer } from "../../../interfaces/Applicant";
import { getCareers, getTranslations } from "$queries";
import { useQuery } from "@apollo/react-hooks";
import NotFound from "$pages/NotFound";

const EditableCareersContainer: FunctionComponent<IEditableCareersContainerProps> = (
  {
    setCareer,
    deleteCareer,
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
    selectACareerTranslation,
    creditsProgressTranslation,
    careersTitleTranslation
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

  const onDelete = (code: string) => {
    deleteCareer(code);
  };

  const onChange = (code: string, Careers: ICareer[]) => {
    if (code === "none") return;

    const career = Careers.find(aCareer => aCareer.code === code);
    career!.creditsCount = state?.creditsCount;
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
    <EditableCareers
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

export { EditableCareersContainer };
