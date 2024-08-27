import { Outlet } from 'react-router-dom';
import { Global, css } from '@emotion/react';
import backgroundImage from '../../assets/images/anh-wallpapers/wp1.png';

const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
    position: relative;
    &::before {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url(${backgroundImage});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      filter: blur(15px);
      z-index: -2;
    }
    &::after {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #FAFBFB;
      opacity: 0.8;
      z-index: -1;
    }
  }
`;

const BlankLayout: React.FC = () => (
  <>
    <Global styles={globalStyles} />
    <Outlet />
  </>
);

export default BlankLayout;
