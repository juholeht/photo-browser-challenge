import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { fetchPhotoInfo, fetchAlbumInfo, fetchUserInfo } from '../API';
import { isEmptyObject } from '../helpers';
import './PhotoView.css';


const fetchUserInfoByAlbumId = async (albumId) => {
    const albumInfo = await fetchAlbumInfo(albumId);
    return fetchUserInfo(albumInfo.userId);
}

const PhotoView = () => {
    const [photoInfo, setPhotoInfo] = useState({});
    const [userInfo, setUserInfo] = useState({});
    const { photoId } = useParams();

    useEffect(() => {
        fetchPhotoInfo(photoId)
        .then(data => {
            console.log(data);
            setPhotoInfo(data);
          })
          .catch(error => {
            console.error("Error:", error);
          });
      },[photoId]);
    
    useEffect(() => {
        if (!isEmptyObject(photoInfo)) {
          fetchUserInfoByAlbumId(photoInfo.albumId)
          .then(data => {
              console.log(data);
              setUserInfo(data);
            })
            .catch(error => {
              console.error("Error:", error);
            });
        }
    }, [photoInfo]);

    return (
        <>
        {
            isEmptyObject(photoInfo) ? <div>Loading...</div> : 
            <div className="photo-container">
                <img src={photoInfo.url} alt="full-size" />
                {!isEmptyObject || 
                <div>
                <p>Title: {photoInfo.title}</p>  
                <p>Author: {userInfo.name}</p>
                <p>Email: {userInfo.email}</p>
                <p>Website: {userInfo.website}</p>
                </div>}
            </div>
        }
        </>
)};

export default PhotoView;