import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function Body({ children }: Props) {
  return <tbody>{children}</tbody>;
}
