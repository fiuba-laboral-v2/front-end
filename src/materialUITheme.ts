import { createMuiTheme } from "@material-ui/core/styles";

export const MaterialUITheme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000"
    }
  },
  typography: {
    fontSize: 20,
    fontFamily: "inherit"
  },
  overrides: {
    MuiBackdrop: {
      root: {
        top: 78
      }
    },
    MuiDrawer: {
      paper: {
        top: 78,
        background: "#f6f5f5",
        height: "calc(100vh - 78px)"
      }
    },
    MuiButton: {
      textSizeSmall: {
        fontSize: 14
      }
    },
    MuiSnackbarContent: {
      message: {
        fontSize: 14
      }
    },
    MuiInput: {
      underline: {
        "&:before, &:after": {
          "border-width": "1px !important"
        },
        "& div": {
          top: "calc(50% - 18px)"
        }
      }
    },
    MuiCircularProgress: {
      colorPrimary: {
        color: "#0095DB"
      }
    },
    MuiInputLabel: {
      root: {
        height: "30px",
        maxWidth: "100%",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      },
      shrink: {
        maxWidth: "130%"
      }
    },
    MuiDialog: {
      paper: {
        borderRadius: 15,
        padding: 7
      },
      paperFullScreen: {
        padding: 0
      }
    },
    MuiDialogTitle: {
      root: {
        paddingBottom: 7
      }
    }
  }
});
