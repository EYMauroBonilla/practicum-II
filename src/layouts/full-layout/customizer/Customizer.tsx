import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BuildTheme } from '../../../assets/global/Theme-variable';

interface CustomizerState {
  activeDir: 'ltr' | 'rtl';
  activeTheme: string;
}


interface RootState {
  CustomizerReducer: CustomizerState;
}

const ThemeSettings = () => {
  const customizer = useSelector((state: RootState) => state.CustomizerReducer);

  const theme = BuildTheme({
    direction: customizer.activeDir,
  });

  useEffect(() => {
    document.dir = customizer.activeDir;
  }, [customizer]);

  return theme;
};

export default ThemeSettings;