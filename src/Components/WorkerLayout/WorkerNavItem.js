import { useLocation, matchPath, useNavigate } from 'react-router-dom';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled
} from '@mui/material';

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  py: 0,
  paddingLeft: theme.spacing(2.5),
  paddingRight: theme.spacing(2.5)
}));

const WorkerNavItem = ({ href, icon, title, ...rest }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const active = href
    ? !!matchPath(
        {
          path: href,
          end: false
        },
        location.pathname
      )
    : false;

  return (
    <StyledListItemButton
      selected={active}
      onClick={() => navigate(href)}
      {...rest}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={title} />
    </StyledListItemButton>
  );
};

export default WorkerNavItem;
