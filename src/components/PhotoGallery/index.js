import React, { useState, useEffect, useCallback } from 'react';
import { getPhotosFromAlbumId } from '../../api/album.api';
import PhotoGrid from '../PhotoGrid';
import { StyledPhotoGallery } from './styles';

const PhotoGallery = () => {
  const [photoCollection, setPhotoCollection] = useState([]);

  const fetchPhotos = useCallback(async () => {
    try {
      const { data } = await getPhotosFromAlbumId(1);
      setPhotoCollection(data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  return (
    <StyledPhotoGallery>
      {photoCollection.map((data) => (
        <PhotoGrid imageData={data} key={data.id} />
      ))}
    </StyledPhotoGallery>
  );
};

export default PhotoGallery;
