import useAsync from '../useAsync';
import * as bookingApi from '../../services/bookingApi';

export default function useBookingUser() {
  const { data: bookingUser, loading: bookingUserLoading, error: bookingUserError, act: bookingUserAct } = useAsync(bookingApi.getBooking);

  if (bookingUserError) {
    let message = 'Tivemos algum erro inexperado. Por favor, tente mais tarde';
    if (bookingUserError.response.status === 404) message = 'Reserva não encontrada!';

    bookingUserError.message = message;
  }

  return {
    bookingUser,
    bookingUserLoading,
    bookingUserError,
    bookingUserAct,
  };
}
