import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketsApi';

export default function useTicket() {
  const token = useToken();

  const { data: tickets, act: getTickets } = useAsync(() => ticketApi.getChosenTicket(token), false);
  return {
    tickets,
    getTickets
  };
}
