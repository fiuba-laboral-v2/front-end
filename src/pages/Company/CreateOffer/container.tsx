import React, { FunctionComponent } from "react";
import { useCreateOffer, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { EditOffer, IEditOfferTranslations } from "$components/EditOffer";
import { formErrorHandlers } from "$models/errorHandlers/formErrorHandlers";
import { useSnackbar } from "notistack";
import { FormFooter } from "$components/FormFooter";
import { Window } from "$components/Window";
import { LoadingWindow } from "$components/LoadingWindow";

export const CreateOfferContainer: FunctionComponent = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { createOffer } = useCreateOffer();
  const translations = useTranslations<IEditOfferTranslations>("editOffer");
  const acceptanceCriteria = useTranslations<{ text: string }>("editOfferAcceptanceCriteria");

  if (!translations || !acceptanceCriteria) return <LoadingWindow />;

  return (
    <Window>
      <EditOffer
        title={translations?.create}
        acceptanceCriteria={acceptanceCriteria?.text}
        initialValues={{
          title: "",
          description: "",
          targetApplicantType: "",
          hoursPerDay: NaN,
          minimumSalary: NaN,
          maximumSalary: NaN,
          isInternship: false,
          careers: [],
          sections: [],
          _form: ""
        }}
        onSubmit={async variables => {
          const response = await createOffer({
            variables: {
              ...variables,
              careers: variables.careers.map(({ code }) => ({ careerCode: code }))
            },
            errorHandlers: formErrorHandlers({ enqueueSnackbar })()
          });
          if (response.error) return;
          history.push(RoutesBuilder.company.offer(response.data.createOffer.uuid));
        }}
        formFooter={({ isSubmitting, submitForm, errors }) =>
          translations &&
          acceptanceCriteria && (
            <FormFooter
              isSubmitting={isSubmitting}
              submitButtonText={translations?.submit}
              errors={errors}
              onSubmit={submitForm}
            />
          )
        }
      />
    </Window>
  );
};
