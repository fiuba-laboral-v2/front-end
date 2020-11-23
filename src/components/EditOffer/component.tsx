import React, { FunctionComponent } from "react";
import { Form } from "$components/Form";
import { InfoMessage } from "$components/InfoMessage";
import { MainInformationFormSection } from "./MainInformationFormSection";
import { DescriptionFormSection } from "./DescriptionFormSection";
import { RecipientsFormSection } from "./RecipientsFormSection";
import { FormikForm } from "../FormikForm";
import { IEditOfferProps } from "./interfaces";
import { Window } from "../Window";
import { Formik } from "../Formik";
import styles from "./styles.module.scss";

export const EditOffer: FunctionComponent<IEditOfferProps> = ({
  title,
  offer,
  autoFocus,
  formFooter,
  onSubmit,
  acceptanceCriteria,
  modelToValues,
  validateForm: validate,
  infoMessageTranslationGroup
}) => (
  <Window>
    <Formik initialValues={modelToValues()} {...{ validate, onSubmit }}>
      {formikProps => (
        <Form title={title} acceptanceCriteria={acceptanceCriteria}>
          <FormikForm initialValuesModel={offer} {...{ modelToValues, formikProps }}>
            {infoMessageTranslationGroup && (
              <InfoMessage translationGroupName={infoMessageTranslationGroup} />
            )}
            <MainInformationFormSection className={styles.formSection} autoFocus={autoFocus} />
            <DescriptionFormSection
              className={styles.formSection}
              sections={formikProps.values.sections}
              name="sections"
            />
            <RecipientsFormSection className={styles.formSection} />
          </FormikForm>
          {formFooter(formikProps)}
        </Form>
      )}
    </Formik>
  </Window>
);
