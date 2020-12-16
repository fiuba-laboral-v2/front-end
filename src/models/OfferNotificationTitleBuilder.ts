import { Secretary } from "$interfaces/Secretary";

interface ITitleTranslations {
  title: string;
  forGraduates: string;
  forStudents: string;
}

export const OfferNotificationTitleBuilder = {
  build: (secretary: Secretary, { title, forGraduates, forStudents }: ITitleTranslations) => {
    if (secretary === Secretary.graduados) return `${title} ${forGraduates}`;
    return `${title} ${forStudents}`;
  }
};
