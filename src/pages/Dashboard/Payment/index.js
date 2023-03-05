import TicketTypeSelection from '../../../components/TicketTypeSelection';
import * as S from '../../../components/Typography';
import PageUnavailable from '../../../components/Page/Unavailable';
import useCheckEnrollment from '../../../hooks/api/useTicket';
import PaymentSession from '../../../components/Payment/PaymentSession';

export default function Payment() {
  const { userEnrollment } = useCheckEnrollment();
  
  if(!userEnrollment) 
    return(
      <>
        <S.StyledTypography variant="h4">Ingresso e pagamento</S.StyledTypography>
        <PageUnavailable>
          <S.StyledTypography variant="h6">
            Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso
          </S.StyledTypography>
        </PageUnavailable>
      </>
    );   

  //return <TicketTypeSelection />;
  return <PaymentSession />;
}
