import React from 'react';
import { Button, useTheme, ButtonProps } from '@mui/material';
import { darken } from '@mui/material/styles';
import FeatherIcon from 'feather-icons-react';

const getContrastColor = (hexColor: string): string => {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
};

const sizeStyles = {
  small: { fontSize: '0.8125rem', padding: '6px 16px' },
  medium: { fontSize: '0.875rem', padding: '8px 20px' },
  large: { fontSize: '0.9375rem', padding: '10px 24px' }
};

const iconSizes = { small: 16, medium: 20, large: 24 };

type CustomButtonColor = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';

interface CustomButtonProps extends Omit<ButtonProps, 'color'> {
  color?: CustomButtonColor;
  size?: 'small' | 'medium' | 'large';
  icon?: string;
  fontSizeScale?: number;
  iconSizeScale?: number;
  widthScale?: number;
  heightScale?: number;
  to?: string;
}

interface IconWrapperProps {
  icon: string;
  size: number;
  color: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon, size, color }) => {
  return (
    <div style={{ color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <FeatherIcon icon={icon} size={size} />
    </div>
  );
};

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  color = 'primary',
  size = 'medium',
  icon,
  fontSizeScale = 0.07,
  iconSizeScale = 0.4,
  widthScale = 1.2,
  heightScale = 0.9,
  ...props
}) => {
  const theme = useTheme();
  const buttonColor = color === 'inherit' ? 'inherit' : theme.palette[color]?.main || theme.palette.primary.main;
  const contrastColor = typeof buttonColor === 'string' ? getContrastColor(buttonColor) : theme.palette.getContrastText(theme.palette.primary.main);

  const calculateFontSize = (baseSize: string, scale: number): string => 
    `${parseFloat(baseSize) * (1 + scale)}rem`;
  const calculateIconSize = (baseSize: number, scale: number): number => 
    baseSize * (1 + scale);

  const buttonSx = {
    backgroundColor: buttonColor,
    color: contrastColor,
    fontWeight: 'bold',
    fontSize: calculateFontSize(sizeStyles[size].fontSize, fontSizeScale),
    padding: `${parseFloat(sizeStyles[size].padding.split(' ')[0]) * heightScale}px ${parseFloat(sizeStyles[size].padding.split(' ')[1]) * widthScale}px`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: typeof buttonColor === 'string' ? darken(buttonColor, 0.2) : undefined,
    },
  };

  const iconContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '8px',
  };

  const iconSize = calculateIconSize(iconSizes[size], iconSizeScale);

  return (
    <Button
      variant="contained"
      size={size}
      sx={buttonSx}
      {...props}
    >
      {icon && (
        <div style={iconContainerStyle}>
          <IconWrapper
            icon={icon}
            size={iconSize}
            color={contrastColor}
          />
        </div>
      )}
      <span style={{ flex: 1, textAlign: 'center' }}>{children}</span>
    </Button>
  );
};

export default CustomButton;