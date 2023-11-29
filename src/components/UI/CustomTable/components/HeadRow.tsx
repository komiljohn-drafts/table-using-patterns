import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function HeadRow({ children }: Props) {
  return <tr>{children}</tr>;
}
