import * as S from '../../../components/Typography';
//import useActivities from '../../../hooks/api/useActivities';
import { Page } from '../../../components/Page/Page';
import DateButton from '../../../components/Activities/DateButton';
import { DateButtonsWrapper } from '../../../components/Activities/style';
import ActivitiesSchedule from '../../../components/Activities/ActivitiesSchedule';
//const { activitiesLoading, activitiesError } = useActivities();
//const loadingOrError = activitiesError || activitiesLoading;

export default function ActivitiesPage() {
  /*  if (loadingOrError) {
    return (
      <Page error={true} title="Escolha de atividades">
        {activitiesLoading && 'Carregando...'}
        {activitiesError && activitiesError.message}
      </Page>
    );
  }*/

  // DateButton: recebemos tabela Schedule, fazemos um map/filter (não sei o que ainda kk) para filtrar as datas que tem eventos e colocar em um array de datas (??)
  //
  return (
    <Page error={false} title="Escolha de atividades">
      <S.SubtitleTypography>Primeiro, filtre pelo dia do evento:</S.SubtitleTypography>
      <DateButtonsWrapper>
        <DateButton clicked={true}/>
        <DateButton clicked={true}/>
        <DateButton clicked={true}/>
      </DateButtonsWrapper>
      <ActivitiesSchedule date={0}/>
    </Page>
  );
}
