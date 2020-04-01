import React, { FunctionComponent, useState } from "react";
import { IEditableCareersContainerProps } from "./interface";
import { EditableCareers } from "./component";
import { ICareer } from "$interfaces/Applicant";
import { GET_CAREERS, getTranslations } from "$queries";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import { RoutesBuilder } from "$src/routesBuilder";

const EditableCareersContainer: FunctionComponent<IEditableCareersContainerProps> = (
  {
    setCareer,
    deleteCareer,
    careers
  }) => {
  const history = useHistory();
  const [state, setState] = useState<ICareer>(
    {
      code: "none",
      description: "",
      credits: 0,
      creditsCount: 0
    }
  );
  const { data, error } = useQuery(GET_CAREERS);
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
  const allCareers: ICareer[] = data ? data.getCareers : [];

  const onFinish = () => {
    if (state.code === "none") return;
    setCareer(state);
  };

  const onChange = (index: number) => {
    if (index === -1) return;

    return setState({ ...allCareers[index], creditsCount: state.creditsCount });
  };

  const setCreditsCount = (creditsCount: string) => {
    setState({ ...state, creditsCount: Number(creditsCount) });
  };

  if (error) history.push(RoutesBuilder.notFound);

  return (
    <EditableCareers
      selectACareerTranslation={selectACareerTranslation}
      creditsProgressTranslation={creditsProgressTranslation}
      careersTitleTranslation={careersTitleTranslation}
      onFinish={onFinish}
      onDelete={deleteCareer}
      setCareer={onChange}
      setCreditsCount={setCreditsCount}
      allCareers={allCareers}
      currentCareers={careers || []}
    />
  );
};

export { EditableCareersContainer };
