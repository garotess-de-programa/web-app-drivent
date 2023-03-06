import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketsApi';

/*
export  function useCheckEnrollment() {
  const {
    data: userEnrollment,
    loading: userEnrollmentLoading,
    error: userEnrollmentError,
    act: getEnrollment,
  } = useAsync(() => ticketsApi.checkEnrollment());

  return {
    userEnrollment,
    userEnrollmentLoading,
    userEnrollmentError,
    getEnrollment,
  };
}

*/

export default function useTicket() {
  const token = useToken();

  const { data: ticket } = useAsync(() => ticketApi.getChosenTicket(token));
  return ticket;
}

