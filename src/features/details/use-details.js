import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDetails, clearDetails, loadCountryByName } from './details-slice'; 

export const useDetails = (name) => {
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCountryByName(name));
    return () => {
      dispatch(clearDetails());
    }
  }, [name, dispatch])

  return details;
}
