import { useState } from "react";

const useTable = () => {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(1);

  const paginationValueProps = {
    offset,
    limit,
  };

  const paginationUpdaterProps = {
    setOffset,
    setLimit,
  };

  const tableProps = {
    //
  };

  return { paginationValueProps, paginationUpdaterProps, tableProps };
};

export default useTable;
