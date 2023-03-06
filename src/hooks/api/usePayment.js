import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketsApi';
import * as paymentApi from '../../services/paymentApi';

/*
export default function useTicket() {
  const token = useToken();

  const { data: ticket } = useAsync(() => ticketApi.getChosenTicket(token));
  return ticket;
}
*/

export default function usePayment() {
  const token = useToken();
  const {
    loading: paymentLoading,
    error: paymentError,
    act: createPayment,
  } = useAsync((body) => paymentApi.createPayment(body, token));

  return {
    paymentLoading,
    paymentError,
    createPayment,
  };
}
