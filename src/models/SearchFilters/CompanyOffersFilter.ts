import { IUseMyOffersFilter } from "../hooks/queries/useMyOffers";

const HIDE_REJECTED_AND_EXPIRED_OFFERS = "ocultar-ofertar-rechazadas-y-expiradas";

export class CompanyOffersFilter extends URLSearchParams {
  public setValues(values: IUseMyOffersFilter) {
    this.setHideRejectedAndExpiredOffers(values.hideRejectedAndExpiredOffers);
  }

  public getValues() {
    return {
      hideRejectedAndExpiredOffers: this.getHideRejectedAndExpiredOffers()
    };
  }

  public getHideRejectedAndExpiredOffers() {
    const value = this.get(HIDE_REJECTED_AND_EXPIRED_OFFERS);
    if (value === null) return true;
    if (!["false", "true"].includes(value)) return true;
    return value === "true";
  }

  private setHideRejectedAndExpiredOffers(hideRejectedAndExpiredOffers: boolean) {
    return this.set(HIDE_REJECTED_AND_EXPIRED_OFFERS, String(hideRejectedAndExpiredOffers));
  }
}
