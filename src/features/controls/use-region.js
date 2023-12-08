import { useDispatch, useSelector } from 'react-redux';

import { selectRegion } from './controls-slice';
import { setRegion } from './controls-slice';

export const useRegion = () => {
  const dispatch = useDispatch();
  const region = useSelector(selectRegion);

  const handleSelect = (reg) => {
    dispatch(setRegion(reg?.value || ''));
  }

  return [region, handleSelect];
}
