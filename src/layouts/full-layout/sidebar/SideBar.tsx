import React, { useState, Fragment } from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import {
  Box,
  Drawer,
  useMediaQuery,
  List,
  Typography,
  ListItem,
  Collapse,
  ListItemIcon,
  ListItemText,
  Theme,
} from '@mui/material';
import FeatherIcon from 'feather-icons-react';

import { SidebarWidth } from '../../../assets/global/Theme-variable';
import LogoIcon from '../logo/Logo';
import Menuitems from './MenuItems';
import Scrollbar from '../../../components/custom-scroller/ScrollBar';

interface SidebarProps {
  isMobileSidebarOpen: boolean;
  onSidebarClose: () => void;
  isSidebarOpen: boolean;
}

interface MenuItem {
  subheader?: string;
  title?: string;
  href?: string;
  icon?: string;
  children?: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ isMobileSidebarOpen, onSidebarClose, isSidebarOpen }) => {
  const [open, setOpen] = useState<boolean | number>(true);
  const { pathname } = useLocation();
  const pathDirect = pathname;
  const pathWithoutLastPart = pathname.slice(0, pathname.lastIndexOf('/'));
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  const handleClick = (index: number) => {
    if (open === index) {
      setOpen((prevopen) => !prevopen);
    } else {
      setOpen(index);
    }
  };

  const SidebarContent = (
    <Box sx={{ height: 'calc(100vh - 5px)' }}>
      <Scrollbar>
        <Box sx={{ p: 1, padding: 2, margin: 1, marginTop: 2 }}>
          <LogoIcon />
          <Box>
            <List>
              {Menuitems.map((item: MenuItem, index: number) => {
                if (item.subheader) {
                  return (
                    <li key={item.subheader}>
                      <Typography
                        variant="subtitle2"
                        fontWeight="500"
                        sx={{ my: 2, mt: 4, opacity: '0.4' }}
                      >
                        {item.subheader}
                      </Typography>
                    </li>
                  );
                } else if (item.children) {
                  return (
                    <Fragment key={item.title}>
                      <ListItem
                        button
                        component="li"
                        onClick={() => handleClick(index)}
                        selected={pathWithoutLastPart === item.href}
                        sx={{
                          mb: 1,
                          '&:hover': {
                            backgroundColor: 'lightgrey',
                          },
                          ...(pathWithoutLastPart === item.href && {
                            color: 'white',
                            backgroundColor: (theme: Theme) => `${theme.palette.action.hover}!important`,
                          }),
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            ...(pathWithoutLastPart === item.href && {
                              color: 'white',
                            }),
                          }}
                        >
                          <FeatherIcon icon={item.icon || 'circle'} size={20} />
                        </ListItemIcon>
                        <ListItemText>{item.title}</ListItemText>
                        {index === open || pathWithoutLastPart === item.href ? (
                          <FeatherIcon icon="chevron-down" size={16} />
                        ) : (
                          <FeatherIcon icon="chevron-right" size={16} />
                        )}
                      </ListItem>
                      <Collapse in={index === open} timeout="auto" unmountOnExit>
                        <List component="li" disablePadding>
                          {item.children.map((child: MenuItem) => (
                            <ListItem
                              key={child.title}
                              button
                              component={NavLink}
                              to={child.href || ''}
                              onClick={onSidebarClose}
                              selected={pathDirect === child.href}
                              sx={{
                                mb: 1,
                                '&:hover': {
                                  backgroundColor: 'lightgrey',
                                },
                                ...(pathDirect === child.href && {
                                  color: 'primary.main',
                                  backgroundColor: 'transparent!important',
                                }),
                              }}
                            >
                              <ListItemIcon
                                sx={{
                                  svg: { width: '14px', marginLeft: '3px' },
                                  ...(pathDirect === child.href && {
                                    color: 'primary.main',
                                  }),
                                }}
                              >
                                <FeatherIcon icon={child.icon || 'circle'} size={20} />
                              </ListItemIcon>
                              <ListItemText>{child.title}</ListItemText>
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                    </Fragment>
                  );
                } else {
                  return (
                    <List component="li" disablePadding key={item.title}>
                      <ListItem
                        onClick={() => handleClick(index)}
                        button
                        component={NavLink}
                        to={item.href || ''}
                        selected={pathDirect === item.href}
                        sx={{
                          mb: 1,
                          '&:hover': {
                            backgroundColor: 'lightgrey',
                          },
                          ...(pathDirect === item.href && {
                            color: 'white',
                            backgroundColor: (theme: Theme) => `${theme.palette.primary.main}!important`,
                          }),
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            ...(pathDirect === item.href && { color: 'white' }),
                          }}
                        >
                          <FeatherIcon icon={item.icon || 'circle'} size={20} />
                        </ListItemIcon>
                        <ListItemText onClick={onSidebarClose}>{item.title}</ListItemText>
                      </ListItem>
                    </List>
                  );
                }
              })}
            </List>
          </Box>
        </Box>
      </Scrollbar>
    </Box>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        variant="persistent"
        PaperProps={{
          sx: {
            width: SidebarWidth,
            border: '0 !important',
            boxShadow: '0px 7px 30px 0px rgb(113 122 131 / 11%)',
          },
        }}
      >
        {SidebarContent}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      PaperProps={{
        sx: {
          width: SidebarWidth,
          border: '0 !important',
        },
      }}
      variant="temporary"
    >
      {SidebarContent}
    </Drawer>
  );
};

export default Sidebar;