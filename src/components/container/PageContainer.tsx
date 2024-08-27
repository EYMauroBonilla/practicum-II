import React, { ReactNode } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Box, SxProps, Theme } from '@mui/material';

interface PageContainerProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  sx?: SxProps<Theme>;
}

const PageContainer: React.FC<PageContainerProps> = ({ title, description, children, sx }) => (
  <HelmetProvider>
    <Box sx={{ height: '100vh', ...sx }}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      {children}
    </Box>
  </HelmetProvider>
);

export default PageContainer;