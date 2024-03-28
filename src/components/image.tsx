import { FunctionComponent } from "react";

type ImgProps = {
  className: string;
  file: string;
  extention: string;
};

const Img: FunctionComponent<ImgProps> = ({ className, file, extention }) => {
  return (
    <div className={className} style={{backgroundImage: `url(/src/assets/${file}.${extention})`}}>
      <img src={`/src/assets/${file}.${extention}`} alt="placeholder" />
    </div>
  );
};

export { Img };
