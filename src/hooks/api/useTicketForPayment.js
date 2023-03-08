import useAsync from '../useAsync';
import * as ticketApi from '../../services/ticketsApi';

export default function useTicketForPayment() {
  const { data: ticket, loading: ticketLoading } = useAsync(() => ticketApi.getTicketById());
  return { ticket, ticketLoading };
}
