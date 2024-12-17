import { useQuery } from 'react-query';
import axiosReq from 'services/api-service';
import handleError from 'api/handle-error';
import { useHitAction } from 'hooks/use-hit-action';
import { actions } from 'store/actions';

export default function useGetBooks() {
  const hitAction = useHitAction();

  const fetchData = async () => {
    try {
      const { res }: any = await axiosReq.get('Ghavanin');
      return res?.ghavanin;
    } catch (e) {
      hitAction(handleError(e));
      return e;
    }
  };

  return useQuery(actions.BOOKS, fetchData, {
    staleTime: 31_556_952_000, // valid for a year
  });
}
