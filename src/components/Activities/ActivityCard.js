import { ActivityCardWrapper, IoEnterOutlineStyled, Time, Capacity, Title, ActivityInfoWrapper, CapacityWrapper  } from './style';

export default function ActivityCard() {
  return(
    <ActivityCardWrapper>

      <ActivityInfoWrapper>
        <Title>Minecraft: montando o PC ideal</Title>
        <Time>9:00 - 10:00</Time>
      </ActivityInfoWrapper>
      <CapacityWrapper>
        <IoEnterOutlineStyled/>
        <Capacity>30 vagas</Capacity>
      </CapacityWrapper>

    </ActivityCardWrapper>
  );
}
