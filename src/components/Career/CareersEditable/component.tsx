import React, { FunctionComponent } from "react";
import { ICareersEditableProps } from "./interface";
import styles from "./styles.module.scss";
import { InputEditable } from "$components/InputEditable";
import { ItemsDetailEditable } from "$components/Detail/ItemsDetailEditable";
import { ICareer } from "$interfaces/Applicant";

const CareersEditable: FunctionComponent<ICareersEditableProps> = (
  {
    selectACareerTranslation,
    creditsProgressTranslation,
    careersTitleTranslation,
    currentCareers,
    allCareers,
    setCareer,
    setCreditsCount,
    onFinish,
    onDelete
  }) => {
  const percentage = (career: ICareer) => {
    career.creditsCount = career.creditsCount || 0;
    return ((career.creditsCount/career.credits)*100).toFixed(2);
  };

  const interpolateCareer = (career: ICareer) => {
    return `${career.code} - ${career.description}:
            ${percentage(career)} ${creditsProgressTranslation}`;
  };

  return (
    <ItemsDetailEditable
      onDelete={onDelete}
      titleTranslation={careersTitleTranslation}
      items={
        currentCareers?.map((career: ICareer) => {
          return {
            id: career.code,
            value: interpolateCareer(career)
          };
        })
      }
      onFinish={onFinish}>
      <div className={styles.selectorContainer}>
        <select
          className={styles.careersSelector}
          onChange={(event => setCareer(event.target.value, allCareers))}
        >
          <option defaultValue={"none"} value="none">{selectACareerTranslation}</option>
          {
            allCareers.map((career, index) => {
              return (<option key={index} value={career.code}>{career.description}</option>);
            })
          }
        </select>
        <InputEditable
          className={styles.creditsCount}
          type={"number"}
          min={0}
          onChange={setCreditsCount}
        />
      </div>
    </ItemsDetailEditable>
  );
};

export { CareersEditable };
