import useAsync from '../useAsync';
import * as hotelsApi from '../../services/hotelApi';

export default function useHotel() {
  const { data: hotels, loading: hotelsLoading, error: hotelsError } = useAsync(hotelsApi.getHotels);

  if (hotelsError) {
    let message = 'Tivemos algum erro inexperado. Por favor, tente mais tarde';
    if (hotelsError.response.status === 404)
      message = 'Sua modalidade de ingresso não inclui hospedagem. Prossiga para a escolha de atividades!';

    if (hotelsError.response.status === 402)
      message = 'Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem.';

    hotelsError.message = message;
  }

  return {
    hotels,
    hotelsLoading,
    hotelsError,
  };
}
