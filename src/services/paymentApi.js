import api from './api';

export async function getPaymentByTicketId(userId, ticketId, token) {
  const response = await api.get(`/payments?userId=${userId}&ticketId=${ticketId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function createPayment(body) {
  const response = await api.post('/payments/process', body);

  return response.data;
}
