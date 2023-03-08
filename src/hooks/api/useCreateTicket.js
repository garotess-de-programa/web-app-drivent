import useAsync from '../useAsync';
import * as ticketsApi from '../../services/ticketsApi';

export default function useCreateTicket() {
  const {
    data: createdTicket,
    loading: createTicketLoading,
    error: createTicketError,
    act: createTicketAct,
  } = useAsync(ticketsApi.createTicket, false);

  return {
    createdTicket,
    createTicketLoading,
    createTicketError,
    createTicketAct,
  };
}
