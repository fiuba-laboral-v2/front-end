import { difference } from "lodash";

const SEPARATOR = "-";
const CAREERS = "carreras";
const ALL = "todas";

export class OfferFilter extends URLSearchParams {
  public careerCodes() {
    return difference(this.get(CAREERS)?.split(SEPARATOR), ["", ALL]);
  }

  public addCareer(code: string) {
    this.set(CAREERS, this.careerCodes().concat(code).join(SEPARATOR));
  }

  public removeCareer(code: string) {
    const careers = this.careerCodes().filter(careerCode => careerCode !== code).join(SEPARATOR);
    this.set(CAREERS, careers || ALL);
  }
}
