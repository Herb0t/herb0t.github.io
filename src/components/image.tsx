import { FunctionComponent } from "react";

type ImgProps = {
  className: string;
  file: string;
  extention: string;
};

const Img: FunctionComponent<ImgProps> = ({ className, file, extention }) => {
  // if development, return the image from the local folder
  const imgSrc = `./images/${file}.${extention}`;

  return (
    <div className={className} style={{backgroundImage: `url(${imgSrc})`}}>
      <img src={imgSrc} alt="placeholder" />
    </div>
  );
};

export { Img };
