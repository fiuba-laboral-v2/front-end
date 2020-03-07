import React, { FunctionComponent } from "react";
import { ICareersEditableProps } from "./interface";
import { Editable } from "$components/Editable";
import styles from "./styles.module.scss";
import { CareersDetail } from "$components/Career/CareersDetail";
import { InputEditable } from "../../InputEditable";

const CareersEditable: FunctionComponent<ICareersEditableProps> = (
  {
    title,
    creditsTranslation,
    currentCareers,
    allCareers,
    setCareer,
    setCreditsCount,
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
          <div className={styles.selectorContainer}>
          <select
            className={styles.careersSelector}
            onChange={(event => setCareer(event.target.value, allCareers))}
          >
            <option value="none" selected disabled hidden>seleccione la carrera</option>
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
