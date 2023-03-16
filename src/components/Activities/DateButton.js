import * as S from './style';

export default function DateButton({ date, weekDay, handleDate }) {
  const dateNumbers = date.day.split('-');
 
  return <S.Button  onClick={() => handleDate(date.day)} >{weekDay}, {dateNumbers[2]}/{dateNumbers[1]} </S.Button>;
}

