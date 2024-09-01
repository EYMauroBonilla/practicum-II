import React from 'react';
import { Typography, Avatar, Box } from '@mui/material';
import userimg from '../../../assets/images/users/user-1.svg';
import { useStyles } from './styles/stylesProfileDropdown';

const ProfileDropdown: React.FC = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.profileContainer}>
        <Box display="flex" alignItems="center">
          <Avatar
            src={userimg}
            alt={userimg}
            className={classes.avatar}
          />
          <Box className={classes.userInfo}>
            <Typography
              variant="h4"
              className={classes.userName}
            >
              Usuario Anahuac
            </Typography>
            <Typography color="textSecondary" variant="h6" fontWeight="400">
              Estudiante
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileDropdown;