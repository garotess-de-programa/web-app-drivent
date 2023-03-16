import * as S from './style';

export default function DateButton(date, clicked) {
  const dateNumbers = date.date.day.split('-');
  
  return <S.Button clicked={clicked} >{date.weekDay}, {dateNumbers[2]}/{dateNumbers[1]}</S.Button>;
}

