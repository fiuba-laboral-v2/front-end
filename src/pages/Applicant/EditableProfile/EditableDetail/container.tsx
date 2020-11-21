import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { EditableDetail } from "./component";
import { useMyApplicantProfile, useTranslations, useUpdateCurrentApplicant } from "$hooks";
import { hasUniqueValues } from "$models/hasUniqueValues";
import { IApplicantDetailEditableTranslations, IApplicantEditableFormValues } from "./interfaces";
import { Redirect } from "$components/Redirect";
import { formErrorHandlers } from "$models/errorHandlers/formErrorHandlers";
import { updateCurrentApplicantArguments } from "$models/MutationArguments";
import { useSnackbar } from "$hooks/snackbar/useSnackbar";
import { Window } from "$components/Window";
import { Formik2 } from "$components/Formik2";
import { IApplicant } from "$interfaces/Applicant";

export const EditableDetailContainer: FunctionComponent = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { updateCurrentApplicant } = useUpdateCurrentApplicant();
  const translations = useTranslations<IApplicantDetailEditableTranslations>("editableDetail");
  const applicantProfile = useMyApplicantProfile();
  const applicant = applicantProfile.data?.getCurrentUser.applicant;

  if (applicantProfile.error) {
    return <Redirect to={RoutesBuilder.public.internalServerError()} />;
  }

  const modelToValues = (model?: IApplicant) => ({
    user: {
      email: model?.user.email || "",
      name: model?.user.name || "",
      surname: model?.user.surname || ""
    },
    padron: model?.padron || NaN,
    description: model?.description || "",
    links: model?.links || [],
    careers:
      model?.careers.map(applicantCareer => ({
        careerCode: applicantCareer.career.code,
        approvedSubjectCount: applicantCareer.approvedSubjectCount || NaN,
        currentCareerYear: applicantCareer.currentCareerYear || NaN,
        isGraduate: applicantCareer.isGraduate
      })) || [],
    capabilities: model?.capabilities || [],
    knowledgeSections: model?.knowledgeSections || [],
    experienceSections: model?.experienceSections || [],
    _form: []
  });

  const validateForm = ({
    careers: selectedCareers,
    links: selectedLinks
  }: IApplicantEditableFormValues) => {
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
  };

  const onSubmit = async ({ _form, ...variables }: IApplicantEditableFormValues) => {
    const result = await updateCurrentApplicant({
      variables: updateCurrentApplicantArguments(variables),
      errorHandlers: formErrorHandlers({ enqueueSnackbar })()
    });
    if (!result.error) history.push(RoutesBuilder.applicant.myProfile());
  };

  return (
    <Window loading={!applicantProfile || !translations || !applicant}>
      <Formik2
        formName="editApplicantDetailForm"
        initialValuesModel={applicant}
        {...{ modelToValues, validateForm, onSubmit }}
      >
        {formikProps => <EditableDetail {...{ translations, formikProps }} />}
      </Formik2>
    </Window>
  );
};
