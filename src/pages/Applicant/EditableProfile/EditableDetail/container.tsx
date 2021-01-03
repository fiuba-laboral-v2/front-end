import React, { FunctionComponent, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { EditableDetail } from "./component";
import { useMyApplicantProfile, useTranslations, useUpdateCurrentApplicant } from "$hooks";
import { hasUniqueValues } from "$models/hasUniqueValues";
import { IApplicantDetailEditableTranslations, IApplicantEditableFormValues } from "./interfaces";
import { formErrorHandlers } from "$models/errorHandlers/formErrorHandlers";
import { updateCurrentApplicantArguments } from "$models/MutationArguments";
import { useSnackbar } from "$hooks/snackbar/useSnackbar";
import { Window } from "$components/Window";
import { IApplicant } from "$interfaces/Applicant";
import { FormikForm } from "$components/FormikForm";
import { Formik } from "$components/Formik";

export const EditableDetailContainer: FunctionComponent = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { updateCurrentApplicant } = useUpdateCurrentApplicant();
  const translations = useTranslations<IApplicantDetailEditableTranslations>("editableDetail");
  const applicant = useMyApplicantProfile();

  const modelToValues = useCallback(
    (model?: IApplicant) => ({
      user: {
        email: model?.user.email || "",
        name: model?.user.name || "",
        surname: model?.user.surname || ""
      },
      description: model?.description || "",
      links: model?.links || [],
      careers: model?.careers.map(applicantCareer => ({
        careerCode: applicantCareer.career.code,
        approvedSubjectCount: applicantCareer.approvedSubjectCount || NaN,
        currentCareerYear: applicantCareer.currentCareerYear || NaN,
        isGraduate: applicantCareer.isGraduate
      })) || [{ careerCode: "", isGraduate: true }],
      capabilities: model?.capabilities || [{ description: "" }],
      knowledgeSections: model?.knowledgeSections || [{ title: "", text: "", displayOrder: NaN }],
      experienceSections: model?.experienceSections || [{ title: "", text: "", displayOrder: NaN }],
      _form: []
    }),
    []
  );

  const validateForm = useCallback(
    ({ careers: selectedCareers, links: selectedLinks }: IApplicantEditableFormValues) => {
      const formErrors = [];
      const selectedCodes = selectedCareers.map(career => career.careerCode);
      if (hasUniqueValues(selectedCodes)) {
        formErrors.push("No se pueden repetir carreras");
      }
      if (selectedCodes.length === 0) {
        formErrors.push("Debes elegir como mínimo una carrera");
      }
      const linksNames: string[] = [];
      const linksUrls: string[] = [];
      selectedLinks.forEach(({ name, url }) => {
        linksNames.push(name);
        linksUrls.push(url);
      });
      if (hasUniqueValues(linksNames)) {
        formErrors.push("No se pueden repetir los nombres de los links");
      }
      if (hasUniqueValues(linksUrls)) {
        formErrors.push("No se pueden repetir las urls de los links");
      }

      return { ...(formErrors.length > 0 && { _form: formErrors }) };
    },
    []
  );

  const onSubmit = useCallback(
    async ({ _form, ...variables }: IApplicantEditableFormValues) => {
      const result = await updateCurrentApplicant({
        variables: updateCurrentApplicantArguments(variables),
        errorHandlers: formErrorHandlers({ enqueueSnackbar })()
      });
      if (!result.error) history.push(RoutesBuilder.applicant.myProfile());
    },
    [enqueueSnackbar, history, updateCurrentApplicant]
  );

  return (
    <Window loading={!applicant || !translations || !applicant}>
      <Formik initialValues={modelToValues()} validate={validateForm} onSubmit={onSubmit}>
        {formikProps => (
          <FormikForm
            initialValuesModel={applicant}
            modelToValues={modelToValues}
            formikProps={formikProps}
          >
            <EditableDetail translations={translations} formikProps={formikProps} />
          </FormikForm>
        )}
      </Formik>
    </Window>
  );
};
