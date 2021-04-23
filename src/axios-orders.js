import axios from 'axios'

const instance = axios.create({
  baseURL:
    "https://react-my-burger-c9adf-default-rtdb.europe-west1.firebasedatabase.app/",
});

export default instance