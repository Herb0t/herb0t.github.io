import { FunctionComponent } from "react";

type SkeletonProps = {
  className: string;
};
const Skeleton: FunctionComponent<SkeletonProps> = (css) => {
  return (
    <div className={`skeleton animate-pulse ${css.className}`} />
  );
};

export { Skeleton };