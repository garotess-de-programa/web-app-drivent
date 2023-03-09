import * as S from './style';

export function BookingPage() {
  return (
    <S.HotelWrapper>
      <img />
      <>
        <S.HotelName>Nome do hotel</S.HotelName>
        <>
          <S.Subtitle>Quarto reservado</S.Subtitle>
          <S.Detail>2</S.Detail>
        </>
        <>
          <S.Subtitle>Pessoas no seu quarto</S.Subtitle>
          <S.Detail>eu e mais 1</S.Detail>
        </>
      </>
    </S.HotelWrapper>
  );
}

/*
 return (
    <S.HotelWrapper key={hotel.id}>
      <img src={hotel.image} alt={hotel.name} />
      <>
        <S.HotelName>{hotel.name}</S.HotelName>
        <>
          <S.Subtitle>Quarto reservado</S.Subtitle>
          <S.Detail>{RoomTypes[hotel.capacity]}</S.Detail>
        </>
        <>
          <S.Subtitle>Pessoas no seu quarto</S.Subtitle>
          <S.Detail>{hotel.availableRooms}</S.Detail>
        </>
      </>
    </S.HotelWrapper>
  );
}

*/
