import { OfferNotificationTitleBuilder } from "$models/OfferNotificationTitleBuilder";
import { Secretary } from "$interfaces/Secretary";

describe("OfferNotificationTitleBuilder", () => {
  const translations = {
    title: "Aprobado",
    forGraduates: "para graduados/as",
    forStudents: "para alumnos/as"
  };

  it("builds the offer notification title for graduates", () => {
    const title = OfferNotificationTitleBuilder.build(Secretary.graduados, translations);
    expect(title).toEqual("Aprobado para graduados/as");
  });

  it("builds the offer notification title for students", () => {
    const title = OfferNotificationTitleBuilder.build(Secretary.extension, translations);
    expect(title).toEqual("Aprobado para alumnos/as");
  });
});
