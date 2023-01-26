import { Link } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

const MenuListItem = (props) => {
  return (
    <ListItem key={props.text} disablePadding>
        <ListItemButton component={Link} to={props.to}>
            <ListItemIcon>
                {props.icon}
            </ListItemIcon>
            <ListItemText primary={props.text} />
        </ListItemButton>
    </ListItem>
  );
}

export default MenuListItem;