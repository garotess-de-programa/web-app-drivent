import api from './api';

export async function getBooking() {
  const response = await api.get('/booking');

  return response.data;
}
