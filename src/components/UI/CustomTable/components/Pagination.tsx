import ReactPaginate from "react-paginate";
import ReactSelect, { SingleValue } from "react-select";
import cls from "../styles.module.scss";

interface Props {
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  dataLength: number;
}

export default function Pagination({ setLimit, setOffset, limit, dataLength }: Props) {
  const limits = [
    { label: 1, value: 1 },
    { label: 3, value: 3 },
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 25, value: 25 },
    { label: 50, value: 50 },
  ];

  const onLimitChange = (option: SingleValue<{ value: number; label: number }>) => {
    if (option) {
      setLimit(option.value);
      setOffset(0);
    }
  };

  const onOffsetChange = ({ selected }: { selected: number }) => {
    setOffset(selected);
  };

  return (
    <section className={cls.pagination}>
      <ReactSelect value={{ value: limit, label: limit }} onChange={onLimitChange} options={limits} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={onOffsetChange}
        pageRangeDisplayed={1}
        breakLabel="..."
        activeClassName={cls.activePage}
        pageCount={Math.ceil(dataLength / limit)}
        previousLabel="< previous"
        containerClassName={cls.container}
        pageClassName={cls.pageItem}
        renderOnZeroPageCount={null}
      />
    </section>
  );
}

// pageLinkClassName = "page-link";
// previousClassName = "page-item";
// previousLinkClassName = "page-link";
// nextClassName = "page-item";
// nextLinkClassName = "page-link";
// breakLabel = "...";
// breakClassName = "page-item";
// breakLinkClassName = "page-link";
// containerClassName = "pagination";
// activeClassName = "active";
