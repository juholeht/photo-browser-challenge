import React from 'react';
import { useParams } from 'react-router-dom';
import PhotosListView from './PhotosListView';

import { fetchAlbumPhotos } from '../API';

const LIMIT_COUNT = 100;

const AlbumPhotosListView = () => {
  const { albumId } = useParams();
  return <PhotosListView fetchData={(page) => fetchAlbumPhotos(albumId, page, LIMIT_COUNT)} />;
};

export default AlbumPhotosListView;
