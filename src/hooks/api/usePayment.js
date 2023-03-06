import useAsync from '../useAsync';
import useToken from '../useToken';
import * as paymentApi from '../../services/paymentApi';

/*
export default function useTicket() {
  const token = useToken();
  const {
    loading: paymentLoading,
    error: paymentError,
    act: createPayment,
  } = useAsync((body) => paymentApi.createPayment(body, token), false);

  return {
    paymentLoading,
    paymentError,
    createPayment,
  };
}
*/

export default function usePayment() {
  const {
    loading: paymentLoading,
    error: paymentError,
    act: createPayment,
  } = useAsync((body) => paymentApi.createPayment(body), false);

  return {
    paymentLoading,
    paymentError,
    createPayment,
  };
}
