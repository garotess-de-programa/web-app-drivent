import api from './api';

/*export async function checkEnrollment() {
  const response = await api.get('/enrollments');

  return response.data;
};
*/

export async function getChosenTicket(token) {
  const response = await api.get('/tickets');

  return response.data;
}
