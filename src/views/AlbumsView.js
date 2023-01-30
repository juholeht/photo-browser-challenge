import React from 'react';
import { Link } from "react-router-dom";
import { appendRootPath } from '../helpers';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import useInfiniteScroll from './useInfiniteScroll';

import albumImage from "../img/album.png";
import './AlbumsView.css';
import { fetchListOfAlbums } from '../API';

const LIMIT_COUNT = 20;

const AlbumsView = () => {
    const fetchDataCallback = (page) => (fetchListOfAlbums(page, LIMIT_COUNT));
    const [images, isFetching, ref] = useInfiniteScroll(fetchDataCallback);
    return (
        <div className='container'>
          {images.map((item) => (
            <ImageListItem key={item.img}>
              <Link to={appendRootPath(`/albums/${item.id}/photos`)}>
                <img
                  src={`${albumImage}?w=248&fit=crop&auto=format`}
                  srcSet={`${albumImage}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                />
              </Link>
            </ImageListItem>
          ))}
          <div ref={ref} style={{height: '100px'}}>
            {isFetching && <div>Loading...</div>}
          </div>
        </div>
      );
};

export default AlbumsView;
