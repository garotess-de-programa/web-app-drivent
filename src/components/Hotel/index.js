import { useState } from 'react';
import * as S from './style';

export default function HotelPage({ hotel }) {
  const [selected, setSelect] = useState(0);

  const handleSelected = (id) => {
    selected === id ? setSelect(0) : setSelect(id);
  };

  return (
    <S.HotelWrapper key={hotel.id} clicked={selected === hotel.id} onClick={() => handleSelected(hotel.id)}>
      <img src={hotel.image} alt={hotel.name} />
      <S.HotelName>{hotel.name}</S.HotelName>
      <S.Subtitle>Tipos de acomodação:</S.Subtitle>
      <S.Detail>{RoomTypes[hotel.capacity]}</S.Detail>
      <S.Subtitle>Vagas disponíveis:</S.Subtitle>
      <S.Detail>{hotel.availableRooms}</S.Detail>
    </S.HotelWrapper>);
}

const RoomTypes = {
  '1': 'Single',
  '2': 'Single e Double',
  '3': 'Single, Double e Triple',
};
