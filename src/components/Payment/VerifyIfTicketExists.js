import useTicket from '../../hooks/api/useTicket';
import { getTicketById } from '../../services/ticketsApi';

export default async function VerifyIfTicketExists(
  token,
  setTicketOnline,
  setTicketPresential,
  setTicketWithoutHotel,
  setTicketWithHotel,
  setTicketId,
  setConfirmation
) {
  const { getTickets } = useTicket();
  const ticket = await getTicketById(token);

  if (ticket.TicketType.isRemote) {
    setTicketOnline(true);
  } else if (!ticket.TicketType.isRemote && !ticket.TicketType.includesHotel) {
    setTicketPresential(true);
    setTicketWithoutHotel(true);
  } else if (!ticket.TicketType.isRemote && ticket.TicketType.includesHotel) {
    setTicketPresential(true);
    setTicketWithHotel(true);
  }

  setTicketId(ticket.id);
  setConfirmation(true);
}
