import { toast } from 'react-toastify';
import { createTicket, getTicketTypes } from '../../services/ticketsApi';
import GetTicketTypeId from './GetTicketTypeId';

export default async function HandleBookTicket(
  token,
  ticketPresential,
  ticketOnline,
  ticketWithoutHotel,
  ticketWithHotel,
  enrollment,
  setConfirmation,
  setTicketId
) {
  //const userId = enrollment.userId;
  const ticketTypes = await getTicketTypes(token);
  const ticketTypeId = GetTicketTypeId(
    ticketPresential,
    ticketOnline,
    ticketWithoutHotel,
    ticketWithHotel,
    ticketTypes
  );
  const body = {
    ticketTypeId,
  };

  try {
    createTicket(body);
    setTicketId(ticketTypeId);
    setConfirmation(true);
  } catch (error) {
    toast('Erro!');
  }
}
