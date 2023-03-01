import useAsync from '../useAsync';
import * as hotelsApi from '../../services/hotelApi';

export default function useHotel() {
  const { data: hotels, loading: hotelsLoading, error: hotelsError } = useAsync(hotelsApi.getHotels);

  return {
    hotels,
    hotelsLoading,
    hotelsError,
  };
}
