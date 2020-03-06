import { ICareer } from "$interfaces/Applicant";

export interface ICareersEditableProps {
  title: string;
  creditsTranslation: string;
  allCareers: ICareer[];
  currentCareers: ICareer[];
  setCareer: (code: string, careers: ICareer[]) => void;
  onFinish: () => void;
}

export interface ICareersEditableContainerProps {
  title: string;
  creditsTranslation: string;
  careers?: ICareer[];
  setCareer: (career: ICareer) => void;
}
