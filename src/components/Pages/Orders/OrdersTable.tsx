import { CustomTable } from "../../UI/CustomTable";
import { columns, data } from "./data";
import useTable from "../../../hooks/useTable";
import useData from "../../../hooks/useData";
import cls from "./styles.module.scss";

export type Order = {
  id: number;
  barcode: string;
  category: string;
  name: string;
  price: number;
};

export default function OrdersTable() {
  const { paginationValueProps, paginationUpdaterProps } = useTable();
  const coca_colastic = useData({ ...paginationValueProps, data });

  return (
    <div className={cls.wrapper}>
      <h1>Table using React patterns</h1>
      <CustomTable.Table>
        <CustomTable.Head>
          <CustomTable.HeadRow>
            <CustomTable.HeadColumn>№</CustomTable.HeadColumn>
            {columns.map((col) => (
              <CustomTable.HeadColumn key={col.id}>{col.key}</CustomTable.HeadColumn>
            ))}
          </CustomTable.HeadRow>
        </CustomTable.Head>
        <CustomTable.Body>
          {coca_colastic.map((row) => (
            <CustomTable.BodyRow key={row.id}>
              <CustomTable.BodyColumn>{row.id}</CustomTable.BodyColumn>
              {columns.map((col) => (
                <CustomTable.BodyColumn key={row.id + "#" + col.id}>
                  {row[col.key as keyof Order]}
                </CustomTable.BodyColumn>
              ))}
            </CustomTable.BodyRow>
          ))}
        </CustomTable.Body>
      </CustomTable.Table>
      <CustomTable.Pagination dataLength={data.length} {...paginationValueProps} {...paginationUpdaterProps} />
    </div>
  );
}
