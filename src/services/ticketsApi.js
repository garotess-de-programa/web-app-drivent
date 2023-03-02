import api from './api';

export async function checkEnrollment() {
  const response = await api.get('/enrollments');

  return response.data;
};
