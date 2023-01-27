import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import { appendRootPath } from './helpers';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import albumImage from "./img/album.png";
import './AlbumsView.css';
import { fetchListOfAlbums } from './API';

const LIMIT_COUNT = 20;

const AlbumsView = () => {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [isFetching, setIsFetching] = useState(false);
    const [isEnd, setIsEnd] = useState(false);

    const [ref, inView] = useInView({
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView && !isFetching && !isEnd) {
            setIsFetching(true);
            fetchListOfAlbums(page, LIMIT_COUNT)
            .then(data => {
                console.log(data);
                if (data.length > 0) {
                    setImages(prevImages => [...prevImages, ...data]);
                    setPage(prevPage => prevPage + 1);
                } else {
                    setIsEnd(true);
                }
                setIsFetching(false);
            })
            .catch(error => {
                console.error("Error:", error);
                setIsFetching(false);
            });
        }
    }, [inView, isFetching, isEnd, page]);

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
