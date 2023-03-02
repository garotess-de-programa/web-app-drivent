import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketsApi';

export default function useTicket() {
  const token = useToken();

  const { data: ticket } = useAsync(() => ticketApi.getChosenTicket(token));
  return ticket;
}
