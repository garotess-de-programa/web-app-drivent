import { useState, useEffect } from 'react';
import styled from 'styled-components';
import DateFnsUtils from '@date-io/date-fns';
import Typography from '@material-ui/core/Typography';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import CustomParseFormat from 'dayjs/plugin/customParseFormat';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MenuItem from '@material-ui/core/MenuItem';

import useCep from '../../hooks/api/useCep';
import useEnrollment from '../../hooks/api/useEnrollment';
import useSaveEnrollment from '../../hooks/api/useSaveEnrollment';
import { useForm } from '../../hooks/useForm';

import Button from '../Form/Button';
import Select from '../../components/Form/Select';
import { FormWrapper } from '../PersonalInformationForm/FormWrapper';
import { InputWrapper } from '../PersonalInformationForm/InputWrapper';
import { ErrorMsg } from '../PersonalInformationForm/ErrorMsg';
import { ufList } from '../PersonalInformationForm/ufList';

dayjs.extend(CustomParseFormat);

export default function CardSession() {


    

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <Container>
        <h6>Ingresso escolhido</h6>
        <TicketResume>
          <h6>Presencial + Com Hotel</h6>
          <h6>R$600</h6>
        </TicketResume>
        <h6>Pagamento</h6>

        <Button type="submit">FINALIZAR PAGAMENTO</Button>
      </Container>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const Container = styled.div`
  h6 {
    color: rgba(142, 142, 142, 1);
    font-size: 20px;
    font-weight: 400px;
  }
`;

const TicketResume = styled.div`
  background-color: rgba(255, 238, 210, 1);
  width: 290px;
  height: 108px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h6 {
    color: rgba(69, 69, 69, 1);
    font-size: 16px;
    font-weight: 400px;
  }
`;
