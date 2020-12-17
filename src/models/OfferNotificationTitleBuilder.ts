import { Secretary } from "$interfaces/Secretary";

export interface ITitleTranslations {
  title: string;
  forGraduates: string;
  forStudents: string;
}

export const OfferNotificationTitleBuilder = {
  build: (secretary: Secretary, titleTranslations?: ITitleTranslations) => {
    if (!titleTranslations) return "";

    const { title, forStudents, forGraduates } = titleTranslations;
    if (secretary === Secretary.graduados) return `${title} ${forGraduates}`;
    return `${title} ${forStudents}`;
  }
};
