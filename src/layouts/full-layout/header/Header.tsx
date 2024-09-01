import React, { useState } from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Menu,
  Typography,
  Avatar,
  Button,
  Drawer,
} from "@mui/material";
import { Box } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import ProfileDropdown from "./ProfileDropdown";
import userimg from "../../../assets/images/users/user-1.svg";
import { useStyles } from "./styles/stylesHeader";

interface HeaderProps {
  sx?: React.CSSProperties;
  customClass?: string;
  toggleSidebar: () => void;
  toggleMobileSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ sx, customClass, toggleSidebar, toggleMobileSidebar }) => {
  const [anchorEl4, setAnchorEl4] = useState<null | HTMLElement>(null);
  const [showDrawer2, setShowDrawer2] = useState(false);
  
  const theme = useTheme();
  const classes = useStyles();

  const handleClick4 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorEl4(null);
  };

  const handleDrawerClose2 = () => {
    setShowDrawer2(false);
  };

  return (
    <AppBar
      sx={{
        ...sx,
        backgroundColor: theme.palette.primary.main,
      }}
      elevation={0}
      className={customClass}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleSidebar}
          size="large"
          className={classes.menuButton}
        >
          <FeatherIcon icon="menu" size={20} />
        </IconButton>

        <IconButton
          size="large"
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          className={classes.mobileMenuButton}
        >
          <FeatherIcon icon="menu" size={20} />
        </IconButton>

        <Drawer
          anchor="top"
          open={showDrawer2}
          onClose={handleDrawerClose2}
          classes={{ paper: classes.drawerPaper }}
        >
          <Box display="flex" alignItems="center">
            <Box sx={{ ml: "auto" }}>
              <IconButton
                color="inherit"
                onClick={handleDrawerClose2}
                className={classes.closeButton}
              >
                <FeatherIcon icon="x-circle" size={20} />
              </IconButton>
            </Box>
          </Box>
        </Drawer>

        <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
          <Typography variant="h3" component="div" className={classes.title}>
            Orquestrador de patios
          </Typography>
          <Box flexGrow={1} />
          <Box sx={{ ml: 3, display: "flex", flexDirection: "column" }} />
        </Box>

        <Button
          aria-label="menu"
          color="inherit"
          aria-controls="profile-menu"
          aria-haspopup="true"
          onClick={handleClick4}
          className={classes.profileButton}
        >
          <Box display="flex" alignItems="center">
            <Avatar
              src={userimg}
              alt="user"
              sx={{
                width: "30px",
                height: "30px",
              }}
            />
            <Box className={classes.userInfo}>
              <Typography color="inherit" variant="h5" fontWeight="400" className={classes.greeting}>
                Hola,
              </Typography>
              <Typography variant="h5" fontWeight="700" className={classes.username}>
                Usuario
              </Typography>
              <FeatherIcon icon="chevron-down" size={20} />
            </Box>
          </Box>
        </Button>
        <Menu
          id="profile-menu"
          anchorEl={anchorEl4}
          keepMounted
          open={Boolean(anchorEl4)}
          onClose={handleClose4}
          className={classes.profileMenu}
        >
          <Box sx={{ mb: 1 }}>
            <ProfileDropdown />
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/auth/login"
            >
              <Button
                className={classes.logoutButton}
                variant="contained"
                color="primary"
              >
                Cerrar sesión
              </Button>
            </Link>
          </Box>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;