import useAsync from '../useAsync';
import * as activitiesApi from '../../services/activitiesApi';

export default function useReserveActivity() {
  const {
    data: reserveActivity,
    loading: reserveActivityLoading,
    error: reserveActivityError,
    act: reserveActivityAct,
  } = useAsync(activitiesApi.reserveActivity, false);

  //TODO erros

  return {
    reserveActivity,
    reserveActivityError,
    reserveActivityLoading,
    reserveActivityAct,
  };
}
