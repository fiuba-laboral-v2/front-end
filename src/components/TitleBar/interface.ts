export interface ITitleBarContainerProps {
  withDrawerButton: boolean;
  toggleDrawer: () => void;
}

export interface ITitleBarProps extends ITitleBarContainerProps {
  title: string;
}
