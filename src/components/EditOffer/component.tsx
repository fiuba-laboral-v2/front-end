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
import classNames from "classnames";

export const EditOffer: FunctionComponent<IEditOfferProps> = ({
  title,
  offer,
  autoFocus,
  formFooter,
  onSubmit,
  acceptanceCriteria,
  modelToValues,
  validateForm: validate,
  infoMessageTranslationGroup,
  loading
}) => (
  <Window {...{ loading }}>
    <Formik initialValues={modelToValues()} {...{ validate, onSubmit }}>
      {formikProps => (
        <Form title={title} acceptanceCriteria={acceptanceCriteria}>
          <FormikForm initialValuesModel={offer} {...{ modelToValues, formikProps }}>
            <InfoMessage translationGroupName={infoMessageTranslationGroup} />
            <MainInformationFormSection
              values={formikProps.values}
              className={styles.formSection}
              autoFocus={autoFocus}
            />
            <DescriptionFormSection
              className={styles.formSection}
              sections={formikProps.values.sections}
              name="sections"
            />
            <RecipientsFormSection className={classNames(styles.formSection, styles.recipients)} />
          </FormikForm>
          {formFooter(formikProps)}
        </Form>
      )}
    </Formik>
  </Window>
);
