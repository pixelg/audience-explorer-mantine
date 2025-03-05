import {MantineColorsTuple, createTheme, virtualColor} from "@mantine/core";

/* PRIMARY COLORS */
//--color-dark-cyan-3: #1D2F49;
const primaryDeepColors: MantineColorsTuple = [
    "#f0f4f9",
    "#e0e5ec",
    "#bdc9db",
    "#97abca",
    "#7792bc",
    "#6382b3",
    "#587ab0",
    "#49689b",
    "#3f5d8b",
    "#31507c"
];

//--color-cornflower-blue: #4687E2;
const primaryVibrantColors: MantineColorsTuple = [
  "#e6f4ff",
  "#d2e5fe",
  "#a7c7f4",
  "#78a8eb",
  "#518ee4",
  "#377de0",
  "#2775df",
  "#1764c7",
  "#0858b3",
  "#004c9f"
]

//--color-light-blue-5: #D6E1F0;
const primaryLightColors: MantineColorsTuple = [
  "#edf4ff",
  "#dce6f2",
  "#b8cae2",
  "#91acd2",
  "#7093c4",
  "#5b83bc",
  "#507bb9",
  "#4069a4",
  "#365e93",
  "#285184"
]

/* SUPPORTING COLORS */
//--color-dark-gray-20: #747474;
const supportingColorsNeutralDarkLight: MantineColorsTuple = [
  "#fef2f5",
  "#eae6e7",
  "#cdcdcd",
  "#b2b2b2",
  "#9a9a9a",
  "#8b8b8b",
  "#848484",
  "#717171",
  "#676465",
  "#5e5457"
];

//--color-dark-cyan-2: #016150;
const supportingColorsBrightDeep: MantineColorsTuple = [
  "#ebfffb",
  "#d7fdf6",
  "#a9fced",
  "#7bfbe3",
  "#5cfbdb",
  "#4dfad6",
  "#44fbd3",
  "#38dfba",
  "#29c6a5",
  "#02ac8e"
];

//--color-dark-gray-2: #475962;
const supportingColorsNeutral: MantineColorsTuple = [
  "#f3f5f6",
  "#e8e8e8",
  "#cececf",
  "#afb4b7",
  "#959ea2",
  "#849096",
  "#7b8990",
  "#68767d",
  "#5a6971",
  "#495b65"
];

//--color-dark-gray-3: #5D747F;
const supportingColorsNeutralDark: MantineColorsTuple = [
  "#ebf7fd",
  "#e1e9ed",
  "#c6d0d5",
  "#a7b6bd",
  "#8e9fa8",
  "#7d919b",
  "#738b96",
  "#607883",
  "#526b76",
  "#405d6a"
];

//--color-light-gray-2: #EBEEF0;
const supportingColorsTintedLight: MantineColorsTuple = [
  "#eef6fb",
  "#e4e8eb",
  "#c9ced2",
  "#aab3b9",
  "#919ca4",
  "#808e97",
  "#768792",
  "#64747f",
  "#566873",
  "#455a67"
];

//--color-dark-blue-15: #00907E;
const supportingColorsBright: MantineColorsTuple = [
  "#ebfffc",
  "#d7fdf8",
  "#a9fdf2",
  "#7bfdeb",
  "#5dfde6",
  "#50fde2",
  "#47fde1",
  "#3be1c7",
  "#2bc8b0",
  "#00ad98"
];

//--color-dark-gray-1: #222222;
const supportingColorsNeutralLight: MantineColorsTuple = [
  "#f5f5f5",
  "#e7e7e7",
  "#cdcdcd",
  "#b2b2b2",
  "#9a9a9a",
  "#8b8b8b",
  "#848484",
  "#717171",
  "#656565",
  "#575757"
];


export const theme = createTheme({
  primaryColor: 'dark-gray-20',

  colors: {
    'primary': virtualColor({
      name: "primary",
      light: "light-gray-2",
      dark: "cornflower-blue"
    }),
    'dark-cyan': primaryDeepColors,
    'cornflower-blue': primaryVibrantColors,
    'light-blue-5': primaryLightColors,
    'dark-gray-20': supportingColorsNeutralDarkLight,
    'dark-cyan-2': supportingColorsBrightDeep,
    'dark-gray-2': supportingColorsNeutral,
    'dark-gray-3': supportingColorsNeutralDark,
    'light-gray-2': supportingColorsTintedLight,
    'dark-blue-15': supportingColorsBright,
    'dark-gray-1': supportingColorsNeutralLight
  },
  fontFamily: "'Montserrat', sans-serif",
});