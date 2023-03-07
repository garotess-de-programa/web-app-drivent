import { useState } from 'react';
import useEnrollment from '../../hooks/api/useEnrollment';
import useTicketTypes from '../../hooks/api/useTicketType';
import { Page } from '../Dashboard/Hotel';
import TicketPage from './TicketPage';
import PaymentPage from './PaymentPage';
import useHandleTicket from '../../hooks/useHandleTicket';

export default function Payment() {
  const { ticketTypes, ticketTypesLoading, ticketTypesError } = useTicketTypes();
  const { enrollment } = useEnrollment();
  const useTicket = useHandleTicket(ticketTypes);

  const [confirmation, setConfirmation] = useState(false);

  if (ticketTypesLoading || ticketTypesError || !enrollment) {
    return (
      <Page error={'true'} title="Ingresso e pagamento">
        {ticketTypesLoading && 'Carregando...'}
        {ticketTypesError && 'Algum erro aconteceu'}
        {!enrollment && 'Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso'}
      </Page>
    );
  }

  const ticketsTypes = {
    remote: ticketTypes.filter((t) => t.name === 'Remote Ticket'),
    presencial: ticketTypes.filter((t) => t.name !== 'Remote Ticket'),
  };

  return confirmation ? (
    <PaymentPage useTicket={useTicket} />
  ) : (
    <TicketPage tickets={ticketsTypes} useTicket={useTicket} setConfirmation={setConfirmation} />
  );
}
