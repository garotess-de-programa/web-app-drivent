import * as S from './style';

export default function HotelPage({ hotel, selected, handleRooms  }) {
  return (  
    <S.HotelWrapper key={hotel.id} clicked={selected === hotel.id} onClick={() => handleRooms(hotel.id)}>
      <img src={hotel.image} alt={hotel.name} />
      <>
        <S.HotelName>{hotel.name}</S.HotelName>
        <>
          <S.Subtitle>Tipos de acomodação:</S.Subtitle>
          <S.Detail>{RoomTypes[hotel.capacity]}</S.Detail>
        </>
        <>
          <S.Subtitle>Vagas disponíveis:</S.Subtitle>
          <S.Detail>{hotel.availableRooms}</S.Detail>
        </>     
      </>
    </S.HotelWrapper>
  );
}

const RoomTypes = {
  '1': 'Single',
  '2': 'Single e Double',
  '3': 'Single, Double e Triple',
};
