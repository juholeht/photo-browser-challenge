import React from 'react';
import { Link } from "react-router-dom";
import { appendRootPath } from '../helpers';
import useInfiniteScroll from './useInfiniteScroll';

import './PhotosListView.css';
import { fetchListOfPhotos } from '../API';

const LIMIT_COUNT = 100;

const PhotosListView = ({ fetchData = (page) => (fetchListOfPhotos(page, LIMIT_COUNT)) }) => {
    const [images, isFetching, ref] = useInfiniteScroll(fetchData);
    return (
        <div className='container'>
            {images.map((item) => (
                <Link to={appendRootPath(`/photo/${item.id}`)}>
                    <img
                    src={`${item.thumbnailUrl}`}
                    alt={item.title}
                    loading="lazy"
                    />
                </Link>
            ))}
            <div ref={ref} style={{height: '100px'}}>
                {isFetching && <div>Loading...</div>}
            </div>
        </div>
    );
};

export default PhotosListView;