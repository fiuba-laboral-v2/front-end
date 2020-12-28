import React, { FunctionComponent } from "react";
import { OfferDetail } from "$components/OfferDetail";
import { useOfferByUuid } from "$hooks/queries";
import { LoadingSpinner } from "../../LoadingSpinner";
import { RoutesBuilder } from "$models/RoutesBuilder";

export const OfferDetailContent: FunctionComponent<IOfferDetailContentProps> = ({
  offerUuid,
  scrollToTop,
  className
}) => {
  const offer = useOfferByUuid(offerUuid).data?.getOfferByUuid;
  if (scrollToTop) scrollToTop();
  return (
    <>
      {!offer && <LoadingSpinner />}
      <OfferDetail
        {...{ offer, className }}
        goToCompany={offer && RoutesBuilder.admin.companyDetail(offer?.company.uuid)}
      />
    </>
  );
};

interface IOfferDetailContentProps {
  offerUuid: string;
  scrollToTop?: () => void;
  className?: string;
}
