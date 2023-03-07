import * as S from '../../components';

const TypeLodging = {
  false: 'Without Hotel',
  true: 'With Hotel',
};

export default function TicketPage({ tickets, useTicket, setConfirmation }) {
  const { state, toggleType, selected } = useTicket;
  console.log({ selected });
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
                <h2>R$ {ticketType.price}</h2>
              </S.ContainerTicket>
            ))}
          </S.TicketTypeWrapper>
        </S.HostWrapper>
      )}

      {selected && (
        <S.ConfirmationWrapper>
          <h1>Fechado! O total ficou em R$ XXX. Agora é só confirmar:</h1>
          <S.BookButton onClick={() => setConfirmation((state) => !state)}>Reservar ingresso</S.BookButton>
        </S.ConfirmationWrapper>
      )}
    </>
  );
}

// const bla = () => (
//   <S.BookButton
//     onClick={() => {
//       HandleBookTicket(
//         token1,
//         ticketPresential,
//         ticketOnline,
//         ticketWithoutHotel,
//         ticketWithHotel,
//         enrollment,
//         setConfirmation,
//         setTicketId
//       );
//     }}
//   ></S.BookButton>
// );
