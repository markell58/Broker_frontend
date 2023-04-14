import React from 'react';
import Link from 'next/link';
import i18n from '@/i18n';
import { selectMuiSettings } from '@/modules/mui/muiSelectors';
import MDButton from '@/mui/components/MDButton';
import { Card } from '@mui/material';
import { BrandLogo } from '@/assets/resources';
import MDBox from '@/mui/components/MDBox';
import BasicLayout from '@/mui/shared/Layouts/BasicLayout';
import MDTypography from '@/mui/components/MDTypography';
import { useSelector } from 'react-redux';

const Error500Page = () => {
  const { sidenavColor } = selectMuiSettings();
  return (
    <>
      <BasicLayout
        image={'/images/500.svg'}
      >
        <Card>
          <MDBox
            variant="gradient"
            bgColor={sidenavColor}
            borderRadius="lg"
            coloredShadow={sidenavColor}
            mx={2}
            mt={-3}
            p={2}
            mb={1}
            textAlign="center"
          >
            <MDBox
              display="flex"
              justifyContent="center"
              py={2}
            >
              <BrandLogo width="80%" />
            </MDBox>
          </MDBox>
          <MDBox pt={4} pb={4} px={3}>
            <MDTypography variant="h3" textAlign="center">
              500
            </MDTypography>
            <MDTypography
              variant="h6"
              textAlign="center"
              my={3}
            >
              {i18n.errors[500]}
            </MDTypography>
            <MDButton
              component={Link}
              href="/"
              variant="gradient"
              color={sidenavColor}
              type="button"
              fullWidth
            >
              {i18n.errors.backToHome}
            </MDButton>
          </MDBox>
        </Card>
      </BasicLayout>
    </>
  );
};

export default Error500Page;
