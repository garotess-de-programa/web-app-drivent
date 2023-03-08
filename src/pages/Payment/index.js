import { useState } from 'react';

import useEnrollment from '../../hooks/api/useEnrollment';
import useTicketTypes from '../../hooks/api/useTicketType';
import useTicketForPayment from '../../hooks/api/useTicketForPayment';
import useHandleTicket from '../../hooks/useHandleTicket';

import { Page } from '../Dashboard/Hotel';
import TicketPage from './TicketPage';
import PaymentPage from './PaymentPage';

export default function Payment() {
  const { ticketTypes, ticketTypesLoading, ticketTypesError } = useTicketTypes();
  const { ticket, ticketLoading } = useTicketForPayment();
  const useTicket = useHandleTicket(ticketTypes);
  const { enrollment } = useEnrollment();

  const [confirmation, setConfirmation] = useState(false);
  const ticketAlreadyReserved = ticket?.enrollmentId === enrollment.id;
  const loadingOrError = ticketTypesLoading || ticketTypesError || !enrollment || ticketLoading;

  if (loadingOrError) {
    return (
      <Page error={'true'} title="Ingresso e pagamento">
        {(ticketTypesLoading || ticketLoading) && 'Carregando...'}
        {ticketTypesError && 'Algum erro aconteceu'}
        {!enrollment && 'Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso'}
      </Page>
    );
  }

  const ticketsTypes = {
    remote: ticketTypes.filter((t) => t.name === 'Remote Ticket'),
    presencial: ticketTypes.filter((t) => t.name !== 'Remote Ticket'),
  };

  return confirmation || ticketAlreadyReserved ? (
    <PaymentPage ticket={ticket || useTicket.selected} />
  ) : (
    <TicketPage tickets={ticketsTypes} useTicket={useTicket} setConfirmation={setConfirmation} />
  );
}
