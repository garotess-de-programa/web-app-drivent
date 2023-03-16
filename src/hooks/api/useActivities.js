import useAsync from '../useAsync';
import * as activitiesApi from '../../services/activitiesApi';

export default function useActivities() {
  const {
    data: activities,
    loading: activitiesLoading,
    error: activitiesError,
  } = useAsync(activitiesApi.getActivities);

  if (activitiesError) {
    let message = 'Tivemos algum erro inexperado. Por favor, tente mais tarde';
    if (activitiesError.response.status === 404)
      message = 'Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.';

    if (activitiesError.response.status === 402)
      message = 'Você precisa ter confirmado pagamento antes de fazer a escolha de atividades';

    activitiesError.message = message;
  }

  return {
    activities,
    activitiesLoading,
    activitiesError,
  };
}
