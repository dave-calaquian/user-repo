import axios from 'axios';
import { baseUrl } from './config.json';

export const registerNewUserApi = async (payload) =>
  await axios({
    method: 'POST',
    url: `${baseUrl}/users`,
    data: payload,
  });
