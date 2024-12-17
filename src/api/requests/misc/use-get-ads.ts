import { useQuery } from 'react-query';
import axiosReq from 'services/api-service';
import { actions } from 'store/actions';
import { kookie } from 'services/index';

export default function useGetAds() {
  if (!kookie.get('token')) return;

  const fetchData = async () => {
    try {
      const { res } = await axiosReq.get('Advertise');
      localStorage.setItem('ads', JSON.stringify(res?.result));
    } catch (e) {
      return e;
    }
  };

  return useQuery(actions.GET_ADVERTISE, fetchData, {
    staleTime: 31_556_952_000, // valid for a year
  });
}
