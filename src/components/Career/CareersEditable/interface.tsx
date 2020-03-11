import { ICareer } from "$interfaces/Applicant";

export interface ICareersEditableProps {
  selectACareerTranslation: string;
  creditsProgressTranslation: string;
  careersTitleTranslation: string;
  allCareers: ICareer[];
  currentCareers: ICareer[];
  setCreditsCount: (creditsCount: number | string) => void;
  setCareer: (code: string, careers: ICareer[]) => void;
  onFinish: () => void;
  onDelete: (item: string) => void;
}

export interface ICareersEditableContainerProps {
  careers: ICareer[];
  setCareer: (career: ICareer) => void;
  deleteCareer: (code: string) => void;
}
