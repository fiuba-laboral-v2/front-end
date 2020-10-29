export interface ISalary {
  minimumSalary: number;
  maximumSalary?: number;
}

interface ICommonProps {
  workload: number;
  className?: string;
}

export interface IContainerProps extends ICommonProps {
  salary: ISalary;
}

export interface ITranslation {
  timeDescription: string;
}

export interface IComponentProps extends ICommonProps {
  salary: string;
  translations: ITranslation;
}
