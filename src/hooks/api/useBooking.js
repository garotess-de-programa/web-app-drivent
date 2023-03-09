import useAsync from '../useAsync';
import * as bookingApi from '../../services/bookingApi';

export default function useBooking() {
  const { data: bookings, loading: Loading, error: bookingsError } = useAsync(bookingApi.getBooking);

  if (bookingsError) {
    let message = 'Tivemos algum erro inexperado. Por favor, tente mais tarde';
    if (bookingsError.response.status === 404) message = 'Reserva não encontrada!';

    bookingsError.message = message;
  }

  return {
    bookings,
    Loading,
    bookingsError,
  };
}
