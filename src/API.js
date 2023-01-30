import {
  isParameterInvalid,
  createInvalidParamErrorMessage,
  createHttpErrorMessage
} from './helpers.js';
import { PUBLIC_API_URL } from './constants';

export const fetchListOfPhotos = (page, limit) => {
  if (isParameterInvalid(page) || isParameterInvalid(limit)) {
    throw new Error(createInvalidParamErrorMessage(page, limit));
  }
  return fetch(`${PUBLIC_API_URL}/photos?_page=${page}&_limit=${limit}`).then((response) => {
    if (!response.ok) {
      throw new Error(createHttpErrorMessage(response.status));
    } else {
      return response.json();
    }
  });
};

export const fetchListOfAlbums = (page, limit) => {
  if (isParameterInvalid(page) || isParameterInvalid(limit)) {
    throw new Error(createInvalidParamErrorMessage(page, limit));
  }
  return fetch(`${PUBLIC_API_URL}/albums?_page=${page}&_limit=${limit}`).then((response) => {
    if (!response.ok) {
      throw new Error(createHttpErrorMessage(response.status));
    } else {
      return response.json();
    }
  });
};

export const fetchPhotoInfo = (photoId) => {
  if (isParameterInvalid(photoId)) {
    throw new Error(createInvalidParamErrorMessage(photoId));
  }
  return fetch(`${PUBLIC_API_URL}/photos/${photoId}`).then((response) => {
    if (!response.ok) {
      throw new Error(createHttpErrorMessage(response.status));
    } else {
      return response.json();
    }
  });
};

export const fetchAlbumInfo = (albumId) => {
  if (isParameterInvalid(albumId)) {
    throw new Error(createInvalidParamErrorMessage(albumId));
  }
  return fetch(`${PUBLIC_API_URL}/albums/${albumId}`).then((response) => {
    if (!response.ok) {
      throw new Error(createHttpErrorMessage(response.status));
    } else {
      return response.json();
    }
  });
};

export const fetchAlbumPhotos = (albumId, page, limit) => {
  if (isParameterInvalid(albumId)) {
    throw new Error(createInvalidParamErrorMessage(albumId));
  }
  if (isParameterInvalid(page) || isParameterInvalid(limit)) {
    throw new Error(createInvalidParamErrorMessage(page, limit));
  }
  return fetch(`${PUBLIC_API_URL}/albums/${albumId}/photos?_page=${page}&_limit=${limit}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(createHttpErrorMessage(response.status));
      } else {
        return response.json();
      }
    }
  );
};

export const fetchUserInfo = (userId) => {
  if (isParameterInvalid(userId)) {
    throw new Error(createInvalidParamErrorMessage(userId));
  }
  return fetch(`${PUBLIC_API_URL}/users/${userId}`).then((response) => {
    if (!response.ok) {
      throw new Error(createHttpErrorMessage(response.status));
    } else {
      return response.json();
    }
  });
};
