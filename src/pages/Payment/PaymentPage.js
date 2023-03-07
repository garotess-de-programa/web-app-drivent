import { useState } from 'react';
import * as S from '../../components';

const useSummary = (state) => {
  let title;
  let total;
  if (state === 'Remote Ticket') {
    title = 'Online';
    total = 400;
  } else {
    if (state === 'With Hotel') {
      title = 'Presencial + Hotel';
      total = 1200;
    } else {
      title = 'Presencial s/ Hotel';
      total = 800;
    }
  }
  return {
    title,
    total,
  };
};

export default function PaymentPage({ useTicket }) {
  const [payed, setPayed] = useState(false);
  const { title, total } = useSummary(useTicket.selected);

  return (
    <>
      <S.StyledTypography variant="h4">Ingresso e pagamento</S.StyledTypography>
      <S.SubtitleTypography>Ingresso escolhido</S.SubtitleTypography>
      <div>
        <S.SummaryBox>
          <h1>{title}</h1>
          <br />
          <h2>R$ {total}</h2>
        </S.SummaryBox>
      </div>

      {payed ? (
        <S.PaymentConfirmationWrapper>
          <S.SubtitleTypography>Ingresso escolhido</S.SubtitleTypography>
          <S.ContainerPaymentConfirmation>
            <S.FaCheckCircleStyled />
            <div className="text">
              <h1>Pagamento confirmado!</h1>
              <br />
              <h2>Prossiga para escolha de hospedagem e atividades</h2>
            </div>
          </S.ContainerPaymentConfirmation>
        </S.PaymentConfirmationWrapper>
      ) : (
        <S.CreditCardWrapper>
          <S.CreditCard setPayed={setPayed} ticketId={useTicket.selected.id} />
        </S.CreditCardWrapper>
      )}
    </>
  );
}
