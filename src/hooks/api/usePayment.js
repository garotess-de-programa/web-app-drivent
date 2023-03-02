import useAsync from '../useAsync';
import useToken from '../useToken';

import * as paymentApi from '../../services/paymentApi';

export default function useTicket() {
  const token = useToken();

  const { data: ticket } = useAsync(() => paymentApi.getChosenTicket(token));
  return ticket;
}
