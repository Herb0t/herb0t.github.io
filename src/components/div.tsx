import { FunctionComponent, ReactNode } from "react";

type DivProps = {
  className: string;
  onClick?: () => void;
  children?: ReactNode;
};

const Div: FunctionComponent<DivProps> = ({ className, onClick, children }) => {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export { Div };