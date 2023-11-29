import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function Head({ children }: Props) {
  return <thead>{children}</thead>;
}
