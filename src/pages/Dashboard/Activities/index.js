import * as S from '../../../components/Typography';
import useActivities from '../../../hooks/api/useActivities';
import useScheduleDays from '../../../hooks/api/useScheduleDays';
import { Page } from '../../../components/Page/Page';
import DateButton from '../../../components/Activities/DateButton';
import { DateButtonsWrapper } from '../../../components/Activities/style';
import ActivitiesSchedule from '../../../components/Activities/ActivitiesSchedule';
//const { activitiesLoading, activitiesError } = useActivities();
//const loadingOrError = activitiesError || activitiesLoading;

export default function ActivitiesPage() {
  const { scheduleDays, scheduleDaysLoading, scheduleDaysError } = useScheduleDays();
  const loadingOrError = scheduleDaysError || scheduleDaysLoading;
  const weekDays = ['Sexta', 'Sábado', 'Domingo'];
  
  if (loadingOrError) {
    return (
      <Page error={true} title="Escolha de atividades">
        {scheduleDaysLoading && 'Carregando...'}
        {scheduleDaysError && scheduleDaysError.message}
      </Page>
    );
  }

  // DateButton: recebemos tabela Schedule, fazemos um map/filter (não sei o que ainda kk) para filtrar as datas que tem eventos e colocar em um array de datas (??)
  //
  return (
    <Page error={false} title="Escolha de atividades">
      <S.SubtitleTypography>Primeiro, filtre pelo dia do evento:</S.SubtitleTypography>
      <DateButtonsWrapper>
        {scheduleDays?.map((date, index) => (
          <DateButton key={index} date= {date} weekDay={weekDays[index]} clicked={true}/>
        ))}
      </DateButtonsWrapper>
      <ActivitiesSchedule date={0}/>
    </Page>
  );
}
