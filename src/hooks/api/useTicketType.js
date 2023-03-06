import useAsync from '../useAsync';
import * as ticketsApi from '../../services/ticketsApi';

export default function useTicketTypes() {
  const {
    data: ticketTypes,
    loading: ticketTypesLoading,
    error: ticketTypeError,
  } = useAsync(() => ticketsApi.getTicketTypes());

  return {
    ticketTypes,
    ticketTypesLoading,
    ticketTypeError,
  };
}
