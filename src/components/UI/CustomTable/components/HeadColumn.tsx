import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function HeadColumn({ children }: Props) {
  return <th>{children}</th>;
}
