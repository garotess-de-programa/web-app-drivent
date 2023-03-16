import useAsync from '../useAsync';
import * as activitiesApi from '../../services/activitiesApi';

export default function useScheduleDays() {
  const {
    data: scheduleDays,
    loading: scheduleDaysLoading,
    error: scheduleDaysError,
  } = useAsync(activitiesApi.getScheduleDays);
  
  if (scheduleDaysError) {
    let message = 'Tivemos algum erro inexperado. Por favor, tente mais tarde';
    if (scheduleDaysError.response.status === 404)
      message = 'Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.';
  
    if (scheduleDaysError.response.status === 402)
      message = 'Você precisa ter confirmado pagamento antes de fazer a escolha de atividades';
  
    scheduleDaysError.message = message;
  }
  
  return {
    scheduleDays,
    scheduleDaysLoading,
    scheduleDaysError,
  };
}
  
