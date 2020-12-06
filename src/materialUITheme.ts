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
        position: "absolute"
      }
    },
    MuiFormHelperText: {
      root: {
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    },
    MuiDrawer: {
      paper: {
        top: 78,
        bottom: 0,
        height: "unset",
        background: "#f6f5f5",
        "@media (max-width: 768px)": {
          top: 63
        }
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
    MuiFormLabel: {
      asterisk: {
        color: "#767676"
      }
    },
    MuiInput: {
      input: {
        "min-height": "22px"
      },
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
      },
      root: {
        zIndex: "5010 !important" as any
      }
    },
    MuiDialogTitle: {
      root: {
        paddingBottom: 7
      }
    },
    MuiBadge: {
      anchorOriginTopRightRectangle: {
        top: "8px",
        right: "8px"
      }
    }
  }
});
