import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function BodyRow({ children }: Props) {
  return <tr>{children}</tr>;
}
