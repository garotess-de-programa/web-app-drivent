import * as S from './style';

export function BookingPage({ bookings, setReservedRoom }) {
  const { Room } = bookings;

  return (
    <>
      <S.HotelWrapper clicked={true}>
        <img src={Room?.Hotel?.image} alt={Room?.Hotel?.name} />
        <>
          <S.HotelName>{Room?.Hotel?.name}</S.HotelName>
          <>
            <S.Subtitle>Quarto reservado</S.Subtitle>
            <S.Detail>
              {Room?.id} ({RoomTypes[Room?.capacity]})
            </S.Detail>
          </>
          <>
            <S.Subtitle>Pessoas no seu quarto</S.Subtitle>
            <S.Detail>{RoomCapacity[Room?.Booking?.length]}</S.Detail>
          </>
        </>
      </S.HotelWrapper>
      <S.Button onClick={() => setReservedRoom(false)} show={true}>
        TROCAR DE QUARTO
      </S.Button>
    </>
  );
}

const RoomTypes = {
  1: 'Single',
  2: 'Double',
  3: 'Triple',
};

const RoomCapacity = {
  1: 'Somente você',
  2: 'Você e mais 1 pessoas',
  3: 'Você e mais 2 pessoas',
};
