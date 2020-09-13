export interface IStudentTranslations {
  approvedSubjectCount: string;
  currentCareerYear: string;
  connector: string;
}
export interface IGraduateTranslations {
  isGraduate: string;
  connector: string;
}

export type ITranslations = IStudentTranslations & IGraduateTranslations;
