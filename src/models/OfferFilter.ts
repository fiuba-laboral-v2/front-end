export class OfferFilter extends URLSearchParams {
  public careerCodes() {
    return (this.get("carreras")?.split(",") || []).filter(Boolean);
  }
}
