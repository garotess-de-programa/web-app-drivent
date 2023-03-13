import api from './api';

export async function getBooking() {
  const response = await api.get('/booking');

  return response.data;
}

export async function createBooking(body) {
  console.log({ body });
  const response = await api.post('/booking', body);

  return response.data;
}

export async function changeBooking({ bookingId, body }) {
  console.log({ bookingId });
  const response = await api.put(`/booking/${bookingId}`, body);

  return response.data;
}
