/**
 * Created by kanamars on 27/07/19.
 */
import axios from 'axios';

const instance = axios.create({
   baseURL : "https://burger-builder-e5f95.firebaseio.com/"
});

export default instance;