import { forwardRef, ReactNode } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Box } from '@mui/material';

interface ScrollbarProps {
  children: ReactNode;
}

const Scrollbar = forwardRef<PerfectScrollbar, ScrollbarProps>((props, ref) => {
  const { children, ...other } = props;

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  if (isMobile) {
    return (
      <Box sx={{ overflowX: 'auto' }}>
        {children}
      </Box>
    );
  }

  return (
    <PerfectScrollbar ref={ref} {...other}>
      {children}
    </PerfectScrollbar>
  );
});

Scrollbar.displayName = 'Scrollbar';

export default Scrollbar;