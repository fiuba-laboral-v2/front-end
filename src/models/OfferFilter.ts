const SEPARATOR = "-";
const CAREERS = "carreras";

export class OfferFilter extends URLSearchParams {
  public careerCodes() {
    return (this.get(CAREERS)?.split(SEPARATOR) || []).filter(careerCode => careerCode !== "");
  }

  public addCareer(code: string) {
    this.set(CAREERS, this.careerCodes().concat(code).join(SEPARATOR));
  }

  public removeCareer(code: string) {
    const careers = this.careerCodes().filter(careerCode => careerCode !== code).join(SEPARATOR);
    if (careers) {
      this.set(CAREERS, careers);
    } else {
      this.delete(CAREERS);
    }
  }
}
