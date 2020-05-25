import React, { Fragment, FunctionComponent } from "react";
import { Title } from "./Title";
import { ApplicantDetail } from "$components/ApplicantDetail";
import { Window } from "$components/Window";
import { IApplicant } from "$interfaces/Applicant";
import { useHistory } from "react-router-dom";
import { RoutesBuilder } from "$models/RoutesBuilder";
import Button from "$components/Button";
import { useTranslations } from "../../../models/hooks/queries";
import { Redirect } from "../../../components/Redirect";

export const Profile: FunctionComponent<IProfile> = ({ applicant }) => {
  const history = useHistory();
  const translations = useTranslations<ITranslations>("applicantProfileDetail");
  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.public.internalServerError}/>;

  return (
    <Window>
      <Title/>
      <ApplicantDetail
        applicant={applicant}
        editButton={
          <Button
            className={"primary"}
            onClick={() => history.push(RoutesBuilder.applicant.editMyProfile)}>
            {translations.data.edit}
          </Button>
        }
      />
    </Window>
  );
};

interface IProfile {
  applicant: IApplicant;
}

interface ITranslations {
  edit: string;
}
