import { useEffect } from 'react';
import useCreateTicket from '../../hooks/api/useCreateTicket';

import * as S from '../../components';

export default function TicketPage({ tickets, useTicket, setConfirmation }) {
  const { state, toggleType, selected } = useTicket;
  const { createdTicket, createTicketLoading, createTicketAct } = useCreateTicket();

  const handleSubmit = async () => {
    await createTicketAct({ ticketTypeId: selected.id });
  };

  useEffect(() => {
    if (createdTicket && createdTicket.ticketTypeId === selected.id) {
      selected.reservedTicket = createdTicket;
      setConfirmation((state) => !state);
    }
  }, [createdTicket]);

  return (
    <>
      <S.StyledTypography variant="h4">Ingresso e pagamento</S.StyledTypography>
      <S.SubtitleTypography>Primeiro, escolha sua modalidade de ingresso:</S.SubtitleTypography>
      <S.TicketTypeWrapper>
        {tickets?.remote?.map((ticketType) => (
          <S.ContainerTicket
            key={ticketType.id}
            selected={state.genre === 'Online'}
            onClick={() => toggleType('Genre', 'Remote')}
          >
            <h1>{ticketType.name}</h1>
            <h2>R$ {ticketType.price}</h2>
          </S.ContainerTicket>
        ))}
        <S.ContainerTicket selected={state.genre === 'Presencial'} onClick={() => toggleType('Genre', 'Presencial')}>
          <h1>Presencial Ticket</h1>
          <h2>R$ 400</h2>
        </S.ContainerTicket>
      </S.TicketTypeWrapper>

      {state.genre === 'Presencial' && (
        <S.HostWrapper>
          <S.SubtitleTypography>Ótimo! Agora escolha sua modalidade de hospedagem:</S.SubtitleTypography>
          <S.TicketTypeWrapper>
            {tickets?.presencial?.map((ticketType) => (
              <S.ContainerTicket
                selected={state.lodging === TypeLodging[ticketType.includesHotel]}
                key={ticketType.id}
                onClick={() => toggleType('Lodging', TypeLodging[ticketType.includesHotel])}
              >
                <h1>{ticketType.name}</h1>
                <h2>R$ {ticketType.price - tickets?.remote?.[0].price}</h2>
              </S.ContainerTicket>
            ))}
          </S.TicketTypeWrapper>
        </S.HostWrapper>
      )}

      {selected && (
        <S.ConfirmationWrapper>
          <h1>Fechado! O total ficou em R$ {selected.price}. Agora é só confirmar:</h1>
          <S.BookButton disabled={createTicketLoading} onClick={handleSubmit}>
            Reservar ingresso
          </S.BookButton>
        </S.ConfirmationWrapper>
      )}
    </>
  );
}
const TypeLodging = {
  false: 'Without Hotel',
  true: 'With Hotel',
};
