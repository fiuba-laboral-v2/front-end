export enum OfferFutureStateMessage {
  republish = "offerRepublishFutureStateMessage",
  expire = "offerExpireFutureStateMessage"
}

export interface IOfferFutureStateContainerProps {
  canForStudents: boolean;
  canForGraduates: boolean;
  offerFutureMessage: OfferFutureStateMessage;
}

export interface IOfferFutureStateProps {
  message: string[];
}
export interface ITranslations {
  forStudents: string;
  forGraduates: string;
}
