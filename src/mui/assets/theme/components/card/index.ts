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
import colors from '@/mui/assets/theme/base/colors';
import borders from '@/mui/assets/theme/base/borders';
import boxShadows from '@/mui/assets/theme/base/boxShadows';

// Material Dashboard 2 PRO React Helper Function
import rgba from '@/mui/assets/theme/functions/rgba';

const { black, white } = colors;
const { borderWidth, borderRadius } = borders;
const { md } = boxShadows;

// types
// types
type Types = any;

const card: Types = {
  styleOverrides: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      minWidth: 0,
      wordWrap: 'break-word',
      backgroundColor: white.main,
      backgroundClip: 'border-box',
      border: `${borderWidth[0]} solid ${rgba(
        black.main,
        0.125,
      )}`,
      borderRadius: borderRadius.xl,
      boxShadow: md,
      overflow: 'visible',
    },
  },
};

export default card;
