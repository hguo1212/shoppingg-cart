import tinycolor from "tinycolor2";  //用来颜色转换

// const primary = "#536DFE";
const primary = "#666";
const secondary = "#FF5C93";
const warning = "#FFC260";
const success = "#3CD4A0";
const info = "#9013FE";

const lightenRate = 7.5;
const darkenRate = 15;
// 主题配置样式
// palette 配色
// Typography 文字排版
// Breakpoints
// z-index
// Globals 全局样式
export default {
  palette: {
    primary: {
      main: primary,
      light: tinycolor(primary)
        .lighten(lightenRate)
        .toHexString(),           //转为16进制
      dark: tinycolor(primary)
        .darken(darkenRate)
        .toHexString()
    },
    secondary: {
      main: secondary,
      light: tinycolor(secondary)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(secondary)
        .darken(darkenRate)
        .toHexString(),
      contrastText: "#FFFFFF"
    },
    warning: {
      main: warning,
      light: tinycolor(warning)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(warning)
        .darken(darkenRate)
        .toHexString()
    },
    success: {
      main: success,
      light: tinycolor(success)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(success)
        .darken(darkenRate)
        .toHexString()
    },
    info: {
      main: info,
      light: tinycolor(info)
        .lighten(lightenRate)
        .toHexString(),
      dark: tinycolor(info)
        .darken(darkenRate)
        .toHexString()
    },
    text: {                  //文字设置颜色
      primary: "#4A4A4A",
      secondary: "#6E6E6E",
      hint: "#B9B9B9"
    },
    background: {         //背景颜色
      default: "#F6F7FF",
      light: "#F3F5FF"
    }
  },
  // 
  customShadows: {
    widget:
      "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
    widgetDark:
      "0px 3px 18px 0px #4558A3B3, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
    widgetWide:
      "0px 12px 33px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
  },
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: "#4A4A4A1A"
      }
    },
    MuiMenu: {
      paper: {
        boxShadow:
          "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
      }
    },
    MuiSelect: {
      icon: {
        color: "#B9B9B9",
      }
    },
    MuiListItem: {
      button: {
        '&:hover, &:focus': {
          backgroundColor: '#F3F5FF',
        },
      },
      selected: {
        backgroundColor: '#F3F5FF !important',
        '&:focus': {
          backgroundColor: '#F3F5FF',
        },
      }
    },
    MuiTouchRipple: {
      child: {
        backgroundColor: "white"
      }
    },
    MuiTableRow: {
      root: {
        height: 56,
      }
    },
    MuiTableCell: {
      root: {
        borderBottom: '1px solid rgba(224, 224, 224, .5)',
      },
      head: {
        fontSize: '0.95rem',
      },
      body: {
        fontSize: '0.95rem',
      },
      footer:{
        fontSize:'0.95rem'
      }
    },
    MuiListItemText:{
      root:{
        flex:2,
      }
    },
    MuiCard: {
      root:{
        '&:hover, &:focus': {
          backgroundColor: '#F3F5FF',
        },
      }
    },
  }
};
