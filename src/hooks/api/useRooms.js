import { useMutation } from 'react-query';
import { getHotelRooms } from '../../services/hotelApi';

export function useRooms(setSelect, setRooms) {
  const mutation = useMutation({
    mutationFn: (id) => {
      let pass = false;
      setSelect((idSelected) => {
        if (idSelected === id) {
          pass = true;
          return 0;
        } else {
          return id;
        }
      });
      if (pass) return;
      return getHotelRooms(id);
    },
    onSuccess: (data) => {
      if (data) setRooms(data.Rooms);
    },
  });
  return {
    mutation,
  };
}
