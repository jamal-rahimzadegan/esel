import { useQuery } from 'react-query';
import axiosReq from 'services/api-service';
import { actions } from 'store/actions';

export default function useGetCount() {
  const fetchData = async () => {
    try {
      const { res } = await axiosReq.get('Counter');
      return res.result;
    } catch (e) {
      console.error(`--- err in counter ----> `, e);
      return {};
    }
  };

  return useQuery(actions.COUNTER, fetchData);
}
