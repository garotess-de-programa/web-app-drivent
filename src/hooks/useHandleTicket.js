import { useState } from 'react';

export default function useHandleTicket() {
  const [ticketGenre, setTicketGenre] = useState(null);
  const [ticketLodging, setTicketLodging] = useState(null);
  let selected;

  const toggleType = (typeToggle, newType) => {
    if (typeToggle === 'Genre') {
      ticketGenre === newType ? setTicketGenre(null) : setTicketGenre(newType);
    } else {
      ticketLodging === newType ? setTicketLodging(null) : setTicketLodging(newType);
    }
  };

  if (ticketGenre === 'Remote') {
    selected = 'Remote Ticket';
  } else {
    if (ticketLodging) {
      selected = ticketLodging;
    } else {
      selected = undefined;
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
