export interface ITitleBarContainerProps {
  alwaysShowDrawerButton: boolean;
  toggleDrawer: () => void;
  showNavBar: boolean;
}

export interface ITitleBarProps extends ITitleBarContainerProps {
  title?: string;
  canChangeCurrentRole: () => boolean;
}

export interface ITranslations {
  title: string;
}
