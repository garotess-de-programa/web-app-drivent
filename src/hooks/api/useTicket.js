import useAsync from '../useAsync';
import * as ticketsApi from '../../services/ticketsApi';

export default function useCheckEnrollment() {
  const {
    data: userEnrollment,
    loading: userEnrollmentLoading,
    error: userEnrollmentError,
    act: getEnrollment,
  } = useAsync(() => ticketsApi.checkEnrollment());

  return {
    userEnrollment,
    userEnrollmentLoading,
    userEnrollmentError,
    getEnrollment,
  };  
}

