import useAsync from '../useAsync';
import * as bookingApi from '../../services/bookingApi';

export default function useCreateBooking() {
  const { data: createBooking, loading: createBookingLoading, error: createBookingError, act: createBookingAct } = useAsync(bookingApi.getBooking);

  return {
    createBooking,
    createBookingLoading,
    createBookingError,
    createBookingAct,
  };
}
