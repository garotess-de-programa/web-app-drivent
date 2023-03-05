import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { SubtitleTypography } from '../Typography';
import useTicket from '../../hooks/api/usePayment';
import Card from './Card';
import PaymentConfirmed from './PaymentConfirmed';
import ConfirmPaymentButton from './ConfirmButton';

export default function PaymentSession() {
  const ticket = useTicket();
  const [hotel, setHotel] = useState('Com Hotel');
  const [remote, setRemote] = useState('Presencial');
  const [price, setPrice] = useState('0');

  useEffect(() => {
    if (ticket) {
      if (ticket.TicketType.includeHotel === false) {
        setRemote('Online');
      }
      if (ticket.TicketType.isRemote === true) {
        setHotel('Sem Hotel');
      }
      setPrice(ticket.TicketType.price);
    }
  }, [ticket]);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <SubtitleTypography>Ingresso escolhido</SubtitleTypography>
      <TicketResume>
        <h6>
          {remote} + {hotel}
        </h6>
        <h6>R${price}</h6>
      </TicketResume>
      <SubtitleTypography>Pagamento</SubtitleTypography>
      {/*<Card/>*/}
      {/*   <PaymentConfirmed/>*/}
      <ConfirmPaymentButton/>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const TicketResume = styled.div`
  background-color: rgba(255, 238, 210, 1);
  width: 290px;
  height: 108px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h6 {
    color: rgba(69, 69, 69, 1);
    font-size: 16px;
    font-weight: 400px;
    margin: 4px;

    :last-child {
      color: rgba(137, 137, 137, 1);
      font-size: 14px;
    }
  }
`;
