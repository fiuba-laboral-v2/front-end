import React, { FunctionComponent } from "react";
import { Form } from "$components/Form";
import { OfferInfoMessage } from "$components/OfferInfoMessage";
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
  company,
  autoFocus,
  formFooter,
  onSubmit,
  acceptanceCriteria,
  modelToValues,
  validateForm: validate,
  infoMessageTranslationGroup,
  loading
}) => (
  <Window loading={loading}>
    <Formik initialValues={modelToValues()} validate={validate} onSubmit={onSubmit}>
      {formikProps => (
        <Form title={title} acceptanceCriteria={acceptanceCriteria}>
          <FormikForm
            initialValuesModel={offer}
            modelToValues={modelToValues}
            formikProps={formikProps}
          >
            <OfferInfoMessage translationGroupName={infoMessageTranslationGroup} />
            <MainInformationFormSection
              values={formikProps.values}
              className={styles.formSection}
              autoFocus={autoFocus}
              company={company}
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
