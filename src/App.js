import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SidebarMenu from './SidebarMenu';
import PhotosListView from './PhotosListView';
import AlbumsView from './AlbumsView';
import PageNotFound from './PageNotFound';
import PhotoView from './PhotoView';
import { appendRootPath } from './helpers';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 180;

const App = () => {
  return (
    <div className="App">
      <Router>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
          >
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                Photo browser
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <SidebarMenu />
          </Drawer>
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
          >
            <Toolbar />
            <Routes>
              <Route
                exact
                path={appendRootPath("")}
                element={(
                  <PhotosListView />
                )}
              />
              <Route
                exact
                path={appendRootPath("/albums")}
                element={(<AlbumsView />)}
              />
              <Route
                path={appendRootPath("/photo/:photoId")}
                element={(<PhotoView />)}
              />
              <Route path="*" element={(<PageNotFound />)} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </div>
  );
}

export default App;
