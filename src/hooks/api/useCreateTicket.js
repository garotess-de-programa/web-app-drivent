import useAsync from '../useAsync';
import useToken from '../useToken';
import * as ticketsApi from '../../services/ticketsApi';

export default function useCreateTicket(ticketTypeId) {
  const token = useToken();

  const { data: ticket } = useAsync(() => ticketsApi.createTicket(ticketTypeId));

  return ticket;
}
