/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 PRO React TS Base Styles
import borders from '@/mui/assets/theme/base/borders';
import colors from '@/mui/assets/theme/base/colors';

// Material Dashboard 2 PRO React TS Helper Functions
import pxToRem from '@/mui/assets/theme/functions/pxToRem';

const { borderWidth } = borders;
const { light } = colors;

// types
type Types = any;

const tableCell: Types = {
  styleOverrides: {
    root: {
      padding: `${pxToRem(12)} ${pxToRem(16)}`,
      borderBottom: `${borderWidth[1]} solid ${light.main}`,
    },
  },
};

export default tableCell;
