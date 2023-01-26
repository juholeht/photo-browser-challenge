import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SidebarMenu from './SidebarMenu';
import PhotosListView from './PhotosListView';
import AlbumsView from './AlbumsView';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <SidebarMenu />
        <Routes>
          <Route
            exact
            path="/"
            element={(
              <PhotosListView />
            )}
          />
          <Route
            exact
            path="/albums"
            element={(<AlbumsView />)}
          />
          <Route path="*" element={(<PageNotFound />)} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
