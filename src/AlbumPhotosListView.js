import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import { appendRootPath } from './helpers';

import './PhotosListView.css';
import { fetchAlbumPhotos } from './API';

const LIMIT_COUNT = 100;

const PhotosListView = () => {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [isFetching, setIsFetching] = useState(false);
    const [isEnd, setIsEnd] = useState(false);
    const { albumId } = useParams();

    const [ref, inView] = useInView({
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView && !isFetching && !isEnd) {
            setIsFetching(true);
            fetchAlbumPhotos(albumId, page, LIMIT_COUNT)
            .then(data => {
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
    }, [inView, isFetching, isEnd, page, albumId]);

    return (
        <div className='container'>
            {images.map((item) => (
                <Link to={appendRootPath(`/photo/${item.id}`)}>
                    <img
                    src={`${item.thumbnailUrl}`}
                    alt={item.title}
                    id={item.id}
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
