import useAsync from '../useAsync';
import * as activitiesApi from '../../services/activitiesApi';

export default function useReserveActivity() {
  const {
    data: reserveActivity,
    loading: reserveActivityLoading,
    error: reserveActivityError,
    act: reserveActivityAct,
  } = useAsync(activitiesApi.reserveActivity, false);

  if(reserveActivityError) {
    let message = 'Tivemos algum erro inexperado. Por favor, tente mais tarde';
    if (reserveActivityError.response.status === 400) {
      message = 'Infelizmente esta atividade está com as vagas esgotadas ou você já está inscrito nesta atividade.';
    }
    reserveActivityError.message = message;
  }

  return {
    reserveActivity,
    reserveActivityError,
    reserveActivityLoading,
    reserveActivityAct,
  };
}

