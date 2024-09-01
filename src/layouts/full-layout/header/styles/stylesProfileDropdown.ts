import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  profileContainer: {
    paddingBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  avatar: {
    width: '90px',
    height: '90px',
  },
  userInfo: {
    marginLeft: theme.spacing(2),
  },
  userName: {
    lineHeight: '1.235',
  },
}));