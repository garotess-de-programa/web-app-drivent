import * as S from './style';

export default function DateButton({ date,  handleDate, selected }) {
  const [, month, day] = date.day.split('-');
  const weekDays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

  const dateStr = new Date(date.day);
  const weekDayIndex = dateStr.getDay();
  const weekDayName = weekDays[weekDayIndex];

  return (
    <S.Button clicked={selected === date.day} onClick={() => handleDate(date.day)}>
      {weekDayName}, {day}/{month}{' '}
    </S.Button>
  );
}
