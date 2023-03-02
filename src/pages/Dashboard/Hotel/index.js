import * as S from '../../../components/Typography';
import useHotel from '../../../hooks/api/useHotel';
import PageUnavailable from '../../../components/Page/Unavailable';

export default function Hotel() {
  const { hotels } = useHotel();
  // useHook que verifica se tem inscrição
  // criar um useHook geral e um para verificar inscrição e pagamento
  // return <Component Alert>

  if (!hotels)
    return (
      <>
        <S.StyledTypography variant="h4">Escolha de hotel e quarto</S.StyledTypography>
        <PageUnavailable>
          <S.StyledTypography variant="h6">
            Sua modalidade de ingresso não inclui hospedagem. Prossiga para a escolha de atividades!
          </S.StyledTypography>
        </PageUnavailable>
      </>
    );

  // fluxo normal
  return (
    <>
      <S.StyledTypography variant="h4">Escolha de hotel e quarto</S.StyledTypography>
      <S.SubtitleTypography variant="h5">Primeiro, escolha seu hotel</S.SubtitleTypography>
      <div>
        {hotels?.map((hotel) => (
          <div>{hotel}</div>
        ))}
      </div>
      <div></div>
    </>
  );
}
