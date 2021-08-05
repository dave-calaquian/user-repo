import axios from 'axios';
import { baseUrl } from './config.json';

export const getPhotosFromAlbumId = async (albumId) =>
  await axios({
    method: 'GET',
    url: `${baseUrl}/albums/${albumId}/photos`,
  });
