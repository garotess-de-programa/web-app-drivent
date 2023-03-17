import api from './api';

export async function getActivities(date) {
  const response = await api.get(`/activities?date=${date}`);

  return response.data;
}

export async function getScheduleDays() {
  const response = await api.get('/schedules/days');

  return response.data;
}

