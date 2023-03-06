import api from './api';

export async function checkEnrollment() {
  const response = await api.get('/enrollments');

  return response.data;
}

export async function getChosenTicket(token) {
  const response = await api.get('/tickets');

  return response.data;
}

export async function getTicketById(token) {
  const response = await api.get('/tickets', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getTicketTypes(token) {
  const response = await api.get('/tickets/types', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function createTicket(ticketTypeId) {
  const response = await api.post('/tickets', { ticketTypeId });

  return response.data;
}
