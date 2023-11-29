import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function BodyColumn({ children }: Props) {
  return <td>{children}</td>;
}
