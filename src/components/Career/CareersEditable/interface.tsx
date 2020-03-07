import { ICareer } from "$interfaces/Applicant";

export interface ICareersEditableProps {
  title: string;
  creditsProgressTranslation: string;
  selectACareerTranslation: string;
  allCareers: ICareer[];
  currentCareers: ICareer[];
  setCareer: (code: string, careers: ICareer[]) => void;
  setCreditsCount: (creditsCount: number | string) => void;
  onFinish: () => void;
}

export interface ICareersEditableContainerProps {
  careers?: ICareer[];
  setCareer: (career: ICareer) => void;
}
