import React, { FunctionComponent, useState } from "react";
import { ICareersEditableContainerProps } from "./interface";
import { CareersEditable } from "./component";
import { ICareer } from "../../interfaces/Applicant";
import { getCareers } from "$queries";
import { useQuery } from "@apollo/react-hooks";
import NotFound from "$pages/NotFound";

const CareersEditableContainer: FunctionComponent<ICareersEditableContainerProps> = (
  {
    title,
    creditsTranslation,
    setCareer,
    careers
  }) => {
  const [state, setState] = useState<ICareer>();

  const { data, error } = useQuery(getCareers);

  const allCareers =  data ? data.getCareers : [];

  const onFinish = () => {
    if (state !== undefined) setCareer(state!);
  };

  const onChange = (code: string, Careers: ICareer[]) => {
    const career = Careers.find(aCareer => aCareer.code === code);
    if (!career) throw new Error(`The career ${code} does not exists`);

    return setState(career);
  };

  if (error) {
    alert("could not fetch careers");
    return (<NotFound/>);
  }

  return (
    <CareersEditable
      title={title}
      creditsTranslation={creditsTranslation}
      onFinish={onFinish}
      setCareer={onChange}
      allCareers={allCareers}
      currentCareers={careers || []}
    />
  );
};

export { CareersEditableContainer };
