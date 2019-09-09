import axios from 'axios';
import { urls } from 'CONSTANTS';

export const memeAPI = () => {
    if (urls.memes) {
        return axios.get(urls.memes);
    }
    
    return null;
}