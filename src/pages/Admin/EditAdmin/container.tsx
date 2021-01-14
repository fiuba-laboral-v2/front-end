import React, { FunctionComponent, useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAdminByUuid, useShowError, useTranslations, useUpdateAdmin } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { FormikHelpers } from "formik/dist/types";
import { Secretary } from "$interfaces/Secretary";
import { ITranslations, IUpdateAdminForm } from "./interfaces";
import { IAdmin } from "$interfaces/Admin";

import { EditAdmin } from "./component";
import { Window } from "$components/Window";

export const EditAdminContainer: FunctionComponent = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const history = useHistory();
  const translations = useTranslations<ITranslations>("editAdmin");
  const { updateAdmin } = useUpdateAdmin();
  const admin = useAdminByUuid(uuid);
  const showError = useShowError();

  const onSubmitAdmin = async (
    { _form, ...variables }: IUpdateAdminForm,
    { setSubmitting }: FormikHelpers<IUpdateAdminForm>
  ) => {
    const result = await updateAdmin({
      variables,
      errorHandlers: {
        UserEmailAlreadyExistsError: () =>
          showError({ message: translations?.userEmailAlreadyExistsError })
      }
    });

    if (result.error) return;
    setSubmitting(false);
    history.push(RoutesBuilder.admin.admins());
  };

  const modelToValues = useCallback(
    (model?: IAdmin) => ({
      uuid: model?.uuid || "",
      secretary: model?.secretary || Secretary.extension,
      user: {
        email: model?.user.email || "",
        name: model?.user.name || "",
        surname: model?.user.surname || ""
      },
      _form: ""
    }),
    []
  );

  return (
    <Window loading={!translations || !admin}>
      <EditAdmin
        translations={translations}
        onSubmit={onSubmitAdmin}
        modelToValues={modelToValues}
        admin={admin}
      />
    </Window>
  );
};
