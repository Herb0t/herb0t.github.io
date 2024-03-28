import { FunctionComponent } from "react";

type ImgProps = {
  className: string;
  file: string;
  extention: string;
};

const Img: FunctionComponent<ImgProps> = ({ className, file, extention }) => {
  // get the value of development from the environment variable
  const isDev = process.env.NODE_ENV === "DEVELOPMENT";

  // if development, return the image from the local folder
  const imgSrc = isDev ? `./src/assets/${file}.${extention}` : `./assets/${file}.${extention}`;

  return (
    <div className={className} style={{backgroundImage: `url(${imgSrc})`}}>
      <img src={imgSrc} alt="placeholder" />
    </div>
  );
};

export { Img };
