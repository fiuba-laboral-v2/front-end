import React, { FunctionComponent } from "react";
import { ICareersEditableProps } from "./interface";
import { Editable } from "$components/Editable";
import styles from "./styles.module.scss";
import { CareersDetail } from "$components/CareersDetail";

const CareersEditable: FunctionComponent<ICareersEditableProps> = (
  {
    title,
    creditsTranslation,
    currentCareers,
    allCareers,
    setCareer,
    onFinish
  }) => (
  <Editable
    onClick={onFinish}
    editableComponent={
      <div className={styles.careersEditableContainer}>
        <CareersDetail
          careers={currentCareers}
          careersTitle={title}
          creditsTitle={creditsTranslation}
        />
        <select className={""} onChange={(event => setCareer(event.target.value, allCareers))}>
          <option defaultValue={""} disabled={true}>seleccione la carrera</option>
          {
            allCareers.map((career, index) => {
              return (<option key={index} value={career.code}>{career.description}</option>);
            })
          }
        </select>
      </div>
    }
    staticComponent={
      <CareersDetail
        careers={currentCareers}
        careersTitle={title}
        creditsTitle={creditsTranslation}
      />
    }
  />
);

export { CareersEditable };
