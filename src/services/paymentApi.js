import api from './api';

export async function getChosenTicket(token) {
  console.log('token no paymentApi', token);
  const response = await api.get('/tickets', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
