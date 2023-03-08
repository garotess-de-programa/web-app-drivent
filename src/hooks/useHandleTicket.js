import { useState } from 'react';

const findType = {
  isRemote: (type) => {
    return type.name === 'Remote Ticket';
  },
  isWithHotel: (type) => {
    return type.name === 'Presencial With Hotel Ticket';
  },
  isWithoutHotel: (type) => {
    return type.name === 'Presencial Without Hotel Ticket';
  },
};
export default function useHandleTicket(ticketTypes) {
  const [ticketGenre, setTicketGenre] = useState(null);
  const [ticketLodging, setTicketLodging] = useState(null);
  let selected;

  const toggleType = (typeToggle, newType) => {
    if (typeToggle === 'Genre') {
      ticketGenre === newType ? setTicketGenre(null, setTicketLodging(null)) : setTicketGenre(newType);
    } else {
      ticketLodging === newType ? setTicketLodging(null) : setTicketLodging(newType);
    }
  };

  if (ticketGenre === 'Remote') {
    selected = ticketTypes?.find(findType.isRemote);
  } else {
    if (ticketLodging?.includes('With')) {
      selected = ticketTypes?.find(findType.isWithHotel);
    }
    if (ticketLodging?.includes('Without')) {
      selected = ticketTypes?.find(findType.isWithoutHotel);
    }
  }

  return {
    state: {
      genre: ticketGenre,
      lodging: ticketLodging,
    },
    toggleType,
    selected,
  };
}
