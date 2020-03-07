import { ICareer } from "$interfaces/Applicant";

export interface ICareersEditableProps {
  title: string;
  creditsProgressTranslation: string;
  allCareers: ICareer[];
  currentCareers: ICareer[];
  setCareer: (code: string, careers: ICareer[]) => void;
  setCreditsCount: (creditsCount: number | string) => void;
  onFinish: () => void;
}

export interface ICareersEditableContainerProps {
  title: string;
  creditsProgressTranslation: string;
  careers?: ICareer[];
  setCareer: (career: ICareer) => void;
}
