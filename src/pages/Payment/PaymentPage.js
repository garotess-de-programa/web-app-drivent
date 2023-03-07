import { useState } from 'react';
import * as S from '../../components';
import { CreditCard } from '../../components';

export default function PaymentPage({ useTicket: { selected } }) {
  const [payed, setPayed] = useState(false);
  const title = translateTicketType[selected.name];
  const { price } = selected;

  return (
    <>
      <S.StyledTypography variant="h4">Ingresso e pagamento</S.StyledTypography>
      <S.SubtitleTypography>Ingresso escolhido</S.SubtitleTypography>
      <div>
        <S.SummaryBox>
          <h1>{title}</h1>
          <br />
          <h2>R$ {price}</h2>
        </S.SummaryBox>
      </div>

      {payed ? <PaymentCompleted /> : <PaymentInProgress id={selected.id} set={setPayed} />}
    </>
  );
}

const translateTicketType = {
  'Remote Ticket': 'Online',
  'Presencial With Hotel Ticket': 'Presencial + Hotel',
  'Presencial Without Hotel Ticket': 'Presencial s/ Hotel',
};

function PaymentCompleted() {
  return (
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
  );
}

function PaymentInProgress({ id, set }) {
  return (
    <S.CreditCardWrapper>
      <CreditCard setPayed={set} ticketId={id} />
    </S.CreditCardWrapper>
  );
}
