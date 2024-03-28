import { FunctionComponent } from "react";

type ImgProps = {
  className: string;
  file: string;
  extention: string;
};

const Img: FunctionComponent<ImgProps> = ({ className, file, extention }) => {
  // check if development or production
  const isDev = process.env.NODE_ENV === "development";
  // if development, return the image from the local folder
  const imgSrc = isDev ? `./src/assets/${file}.${extention}` : `./assets/${file}.${extention}`;

  return (
    <div className={className} style={{backgroundImage: `url(${imgSrc})`}}>
      <img src={imgSrc} alt="placeholder" />
    </div>
  );
};

export { Img };
