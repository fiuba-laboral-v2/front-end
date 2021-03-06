import React, { FunctionComponent, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { FormikHelpers } from "formik";
import {
  useMyCompanyProfile,
  useTranslations,
  useUpdateCurrentCompany,
  useSharedSettings
} from "$hooks";
import { EditableProfile } from "./component";
import { IEditableProfileFormValues, IEditableProfileTranslations } from "./interfaces";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { saveCompanyErrorHandlers } from "$errorHandlers/saveCompanyErrorHandlers";
import { useShowError } from "$hooks/snackbar";
import { Window } from "$components/Window";
import { ICompany } from "$interfaces/Company";

export const EditableProfileContainer: FunctionComponent = () => {
  const [confirmDialogIsOpen, setConfirmDialogIsOpen] = useState(false);
  const history = useHistory();
  const showError = useShowError();
  const { updateCurrentCompany } = useUpdateCurrentCompany();
  const company = useMyCompanyProfile();
  const translations = useTranslations<IEditableProfileTranslations>("editMyCompanyProfile");
  const acceptanceCriteria = useSharedSettings()?.companyEditableAcceptanceCriteria;

  const modelToValues = useCallback((model?: ICompany) => {
    const values: IEditableProfileFormValues = {
      uuid: model?.uuid || "",
      companyName: model?.companyName || "",
      businessSector: model?.businessSector || "",
      slogan: model?.slogan,
      description: model?.description,
      logo: model?.logo,
      website: model?.website,
      email: model?.email,
      phoneNumbers: model?.phoneNumbers,
      photos: model?.photos,
      _form: ""
    };
    return values;
  }, []);

  const onSubmit = useCallback(
    async (
      { _form, ...companyValues }: IEditableProfileFormValues,
      { setErrors }: FormikHelpers<IEditableProfileFormValues>
    ) => {
      const updateCompanyResult = await updateCurrentCompany({
        variables: companyValues,
        errorHandlers: saveCompanyErrorHandlers({ setErrors, showError })
      });
      if (updateCompanyResult.error) return;
      history.push(RoutesBuilder.company.myProfile());
    },
    [showError, history, updateCurrentCompany]
  );

  return (
    <Window loading={!translations || !company || !acceptanceCriteria || !company}>
      <EditableProfile
        modelToValues={modelToValues}
        company={company}
        onSubmit={onSubmit}
        confirmDialogIsOpen={confirmDialogIsOpen}
        setConfirmDialogIsOpen={setConfirmDialogIsOpen}
        acceptanceCriteria={acceptanceCriteria}
        translations={translations}
      />
    </Window>
  );
};
