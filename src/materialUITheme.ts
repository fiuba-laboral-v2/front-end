import { createMuiTheme } from "@material-ui/core/styles";

export const MaterialUITheme = createMuiTheme({
  shape: {
    borderRadius: 0
  },
  palette: {
    primary: {
      main: "#000000"
    }
  },
  typography: {
    fontSize: 22,
    fontFamily: "inherit"
  },
  overrides: {
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
    }
  }
});
