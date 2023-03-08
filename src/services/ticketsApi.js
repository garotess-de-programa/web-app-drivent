import api from './api';

export async function checkEnrollment() {
  const response = await api.get('/enrollments');

  return response.data;
}
export async function getTicketById() {
  const response = await api.get('/tickets');
  return response.data;
}

export async function getTicketTypes() {
  const response = await api.get('/tickets/types');

  return response.data;
}

export async function createTicket(body) {
  const response = await api.post('/tickets', body);
  return response.data;
}
