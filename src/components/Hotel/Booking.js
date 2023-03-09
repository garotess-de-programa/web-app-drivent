import * as S from './style';

export function BookingPage({ bookings }) {
  const { Room } = bookings;

  function changeRoom() {}
  return (
    <>
      <S.HotelWrapper clicked={true}>
        <img src={Room.Hotel.image} alt={Room.Hotel.name} />
        <>
          <S.HotelName>{Room.Hotel.name}</S.HotelName>
          <>
            <S.Subtitle>Quarto reservado</S.Subtitle>
            <S.Detail>
              {Room.name} ({RoomTypes[Room.capacity]})
            </S.Detail>
          </>
          <>
            <S.Subtitle>Pessoas no seu quarto</S.Subtitle>
            <S.Detail>Somente você</S.Detail>
          </>
        </>
      </S.HotelWrapper>
      <S.Button onClick={changeRoom}>TROCAR DE QUARTO</S.Button>
    </>
  );
}

const RoomTypes = {
  1: 'Single',
  2: 'Double',
  3: 'Triple',
};

/*
("Somente você", "Você e mais x pessoas")
*/
