import React from 'react';
import MenuListItem from './MenuListItem';
import { appendRootPath } from './helpers';
import PhotoIcon from '@mui/icons-material/Photo';
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';

const SidebarMenu = () => {
  return (
    <>
      <div className={"menu-list-container"}>
      <Toolbar />
        <Divider />
        <List>
          <MenuListItem icon={<PhotoIcon/>} text="Photos" to={appendRootPath("")}></MenuListItem>
          <MenuListItem icon={<PhotoAlbumIcon/>} text="Albums" to={appendRootPath("/albums")}></MenuListItem>
        </List>
      </div>
    </>
  );
};

export default SidebarMenu;
