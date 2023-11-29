import { ReactNode } from "react";
import cls from "../styles.module.scss";

interface Props {
  children?: ReactNode;
}

export default function Table({ children }: Props) {
  return <table className={cls.table}>{children}</table>;
}
