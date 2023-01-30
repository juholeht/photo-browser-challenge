import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

const MenuListItem = ({ text, icon, to }) => {
  return (
    <ListItem key={text} disablePadding>
      <ListItemButton component={Link} to={to}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

MenuListItem.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired
};

export default MenuListItem;
