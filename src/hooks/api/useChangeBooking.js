import useAsync from '../useAsync';
import * as bookingApi from '../../services/bookingApi';

export default function useChangeBooking() {
  const {
    data: changeBooking,
    loading: changeBookingLoading,
    error: changeBookingError,
    act: changeBookingAct,
  } = useAsync(bookingApi.changeBooking, false);

  return {
    changeBooking,
    changeBookingLoading,
    changeBookingError,
    changeBookingAct,
  };
}
