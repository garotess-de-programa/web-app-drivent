import api from './api';

export async function getHotels() {
  const response = await api.get('/hotels');

  return response.data;
}

export async function getHotelRooms(id) {
  const response = await api.get(`/hotels/${id}`);

  return response.data;
}
