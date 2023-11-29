import { useMemo } from "react";
import { Order } from "../components/Pages/Orders/OrdersTable";

interface Props {
  data: Array<Order>;
  offset: number;
  limit: number;
}

const useData = ({ data, offset, limit }: Props) => {
  const computed = useMemo(() => {
    return data.slice(limit * offset, (offset + 1) * limit);
  }, [offset, limit]);

  return computed;
};

export default useData;
