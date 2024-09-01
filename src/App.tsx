import React from 'react';
import { useRoutes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BuildTheme } from "./assets/global/Theme-variable";
import Router from "./routes/Router";
import "react-perfect-scrollbar/dist/css/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App: React.FC = () => {
  const routing = useRoutes(Router);
  const theme = BuildTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {routing}
    </ThemeProvider>
  );
}

export default App;