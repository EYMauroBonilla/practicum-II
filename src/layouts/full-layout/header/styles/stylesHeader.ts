import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  menuButton: {
    display: 'flex',
    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
    '&:hover': {
      backgroundColor: '#b22222',
    },
  },
  mobileMenuButton: {
    display: 'none',
    [theme.breakpoints.down('lg')]: {
      display: 'flex',
    },
    '&:hover': {
      backgroundColor: '#b22222',
    },
  },
  drawerPaper: {
    padding: '15px 30px',
  },
  closeButton: {
    color: theme.palette.grey[500],
    '&:hover': {
      backgroundColor: '#b22222',
    },
  },
  title: {
    marginLeft: theme.spacing(2),
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: '0.7rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.25rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.5rem',
    },
  },
  profileButton: {
    '&:hover': {
      backgroundColor: '#b22222',
    },
  },
  userInfo: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  greeting: {
    marginLeft: theme.spacing(1),
    color: '#ffffff',
    fontSize: '0.875rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.25rem',
    },
  },
  username: {
    marginLeft: theme.spacing(1),
    color: '#ffffff',
    fontSize: '0.875rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.25rem',
    },
  },
  profileMenu: {
    '& .MuiPaper-root': {
      width: '385px',
      right: 0,
      top: '70px !important',
    },
    '& .MuiList-root': {
      padding: '30px',
    },
  },
  logoutButton: {
    marginTop: theme.spacing(2),
    display: 'block',
    width: '100%',
    '&:hover': {
      backgroundColor: '#b22222',
    },
  },
}));