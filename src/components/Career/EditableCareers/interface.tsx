import { ICareer } from "$interfaces/Applicant";

export interface IEditableCareersProps {
  selectACareerTranslation: string;
  creditsProgressTranslation: string;
  careersTitleTranslation: string;
  allCareers: ICareer[];
  currentCareers: ICareer[];
  setCreditsCount: (creditsCount: string) => void;
  setCareer: (index: number) => void;
  onFinish: () => void;
  onDelete: (item: string) => void;
}

export interface IEditableCareersContainerProps {
  careers: ICareer[];
  setCareer: (career: ICareer) => void;
  deleteCareer: (code: string) => void;
}
