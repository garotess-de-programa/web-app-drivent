import { toast } from 'react-toastify';
import useCreateTicket from '../../hooks/api/useCreateTicket';
import { Button } from '../../components';

export default function BookTicketButton(isRemote, includesHotel) {
  let ticketTypeId;

  if (isRemote && !includesHotel) {
    ticketTypeId = 3;
    //remote
  }
  if (isRemote && includesHotel) {
    ticketTypeId = 4;
    // Presential with Hotel
  }

  if (!isRemote && !includesHotel) {
    ticketTypeId = 5;
    //Presential without hotel
  }

  async function submit(event) {
    event.preventDefault();
    try {
      alert(`Ingresso do tipo ${ticketTypeId}`);
      useCreateTicket(ticketTypeId);
    } catch (error) {
      toast('Não foi possível reservar o ingresso!');
    }
  }

  return <Button type="submit">RESERVAR INGRESSO</Button>;
}
