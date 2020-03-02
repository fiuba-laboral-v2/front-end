import React, { FunctionComponent, useState } from "react";
import { ICareersEditableContainerProps } from "./interface";
import { CareersEditable } from "./component";
import { ICareer } from "../../interfaces/Applicant";

const CareersEditableContainer: FunctionComponent<ICareersEditableContainerProps> = (
  {
    padron,
    setCareer,
    careers
  }) => {
  const [state, setState] = useState<ICareer>();

  const allCareers: ICareer[] = [
    {
      code: "10",
      description: "Ingenieria Informatica",
      credits: 256
    },
    {
      code: "11",
      description: "Ingenieria Civil",
      credits: 256
    },
    {
      code: "12",
      description: "Ingenieria Quimica",
      credits: 256
    }
  ];

  const onFinish = () => {
    if (state !== undefined) setCareer(state!);
  };

  const onChange = (code: string, Careers: ICareer[]) => {
    const career = Careers.find(aCareer => aCareer.code === code);
    if (!career) throw new Error(`The career ${code} does not exists`);

    return setState(career);
  };

  return (
    <CareersEditable
      onFinish={onFinish}
      setCareer={onChange}
      allCareers={allCareers}
      currentCareers={careers || []}
    />
  );
};

export { CareersEditableContainer };
