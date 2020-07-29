export interface ITimeHumanizerContainerProps {
  since: string;
  className?: string;
  type: "update" | "create";
}

export interface ITimeHumanizerTranslations {
  create: string;
  update: string;
}

export interface ITimeHumanizerProps extends Omit<ITimeHumanizerContainerProps, "type"> {
  labelPrefix: string;
}
