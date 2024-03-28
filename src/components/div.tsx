import { FunctionComponent, ReactNode } from "react";

type DivProps = {
  className: string;
  children?: ReactNode;
};

const Div: FunctionComponent<DivProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export { Div };