import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api'
});


export const getCars = async (brand) => {
    const url = brand && brand !== 'Все марки' 
        ? `/cars?brand=${brand}` 
        : '/cars';
    const response = await API.get(url);
    return response.data;
};

export const createBooking = async (bookingData) => {
    const response = await API.post('/bookings', bookingData);
    return response.data;
};

export const addCar = async (carData) => {
    const response = await API.post('/admin/cars', carData);
    return response.data;
};