// import ListTransactions from './components/listTransactions'
import { Skeleton } from './components/skeleton'
import { Div } from './components/div'
import { useEffect, useState } from 'react';
import { Img } from './components/image';

const App: React.FC = () => {
  // set loading to loaded after 2 seconds
  const [loading, setLoading] = useState("not-loaded");
  const [language, setLanguage] = useState("english");
  // const backgroundImage = [
  //   { className: "sky", file: "sky", extention: "png"},
  //   { className: "dslr", file: "dslr", extention: "png"},
  //   { className: "cn", file: "cn", extention: "png" },
  //   { className: "church", file: "church",  extention: "png"},
  //   { className: "cano", file: "cano", extention: "png" },
  //   { className: "san", file: "san", extention: "png" },
  //   { className: "bot", file: "bot", extention: "png" },
  //   { className: "top", file: "top", extention: "png" },
  //   {
  //     className: "noir", file: "noir",  extention: "png"
  //   },
  //   {
  //     className: "noir-hand", file: "noir-hand", extention: "png"
  //   },
  //   {
  //     className: "6", file: "6", extention: "png"
  //   },
  //   {
  //     className: "20", file: "20", extention: "png"
  //   },
  //   {
  //     className: "99", file: "99", extention: "png"
  //   },
  //   {
  //     className: "beaMAX", file: "beaMAX", extention: "gif"
  //   },
  //   {
  //     className: "goku", file: "goku", extention: "png"
  //   },
  //   {
  //     className: "lion", file: "lion", extention: "png"
  //   },
  //   {
  //     className: "momo", file: "momo", extention: "png"
  //   },
  //   {
  //     className: "roxxx", file: "roxxx", extention: "png"
  //   },
  //   {
  //     className: "sonic", file: "sonic", extention: "gif"
  //   },
  //   {
  //     className: "tmnt", file: "tmnt", extention: "png"
  //   },
  //   {
  //     className: "vega", file: "vega", extention: "gif"
  //   },
  //   {
  //     className: "whale", file: "whale", extention: "png"
  //   },
  // ];

  useEffect(() => {
    const timer = setTimeout(() => {
      // set loading to loaded
      setLoading("loaded");
    }, 3500);
    return () => clearTimeout(timer); // This will clear the timer when the component unmounts.
  }, []); // Removed 'loading' from the dependency array to prevent infinite loop

  const handleLanguage = (e: any) => {
    if (e.target.textContent === "EN") {
      setLanguage("english");
    } else if (e.target.textContent === "ES") {
      setLanguage("spanish");
    }
  }

  return (
    <>
      <header>
      </header>
      <main className={language}>
        <Div className="lang" >
          <div className='eng' onClick={handleLanguage}>EN</div>
          <div className='span' onClick={handleLanguage}>ES</div>
        </Div>
        <Div className={`background ${loading}`} >
          <Div className="background-item title">
            <h1><span>Her</span><span>b0t</span></h1>
            <p className='english'>Creator of web things!</p>
            <p className='spanish'>Creador de cosas de internet!</p>
          </Div>
          <Div className="about-us-background">
            <h3><span className='english'>About</span><span className="spanish">sobre mí</span></h3>
            <Img className="about-us-image" file="arrows" extention="svg" />
          </Div>
          {/* {backgroundImage.map((image, index) => {
            return (
              <Img key={index} className={`background-item ${image.className}`} file={image.file} extention={image.extention} />
            )
          })} */}
        </Div>
        <Div className={`grid ${loading}`} >
          <Div className={`card grid-item grid-item-0`}>
            <h1>Herb0t</h1>
          </Div>
          <Div className={`card grid-item grid-item-1`}>
          </Div>
          <Div className={`card grid-item grid-item-2`}>
            <Skeleton className="h-3 w-75-p" />
            <Skeleton className="h-2 w-70-p" />
            <Skeleton className="h-2 w-60-p" />
            <Skeleton className="h-2 w-10-p" />
          </Div>
          <Div className={`card grid-item grid-item-3`}>
          </Div>
          <Div className={`card grid-item grid-item-4`}>
          </Div>
          <Div className={`card grid-item grid-item-5`}>
            <p className="english">Welcome to a world where simplicity meets style! I specialize in creating minimalistic websites perfect for those taking their first steps into the online realm. Ideal for clients who want a clean and easy-to-navigate online presence. Ensuring your journey to a sleek website is hassle-free from start to finish. Explore the power of minimalistic design and let's craft a website that speaks volumes in its simplicity. For all inquiries, reach out to me at <a href='mailto:herbert.a.lemus@gmail.com'>Herb0t</a>.</p>
            <p className="spanish">¡Bienvenido a un mundo donde la simplicidad se encuentra con el estilo! Me especializo en crear sitios web minimalistas perfectos para aquellos que dan sus primeros pasos en el mundo en línea. Ideal para clientes que desean una presencia en línea limpia y fácil de navegar. Asegurando que su viaje a un sitio web elegante sea sin problemas desde el principio hasta el final. Explore el poder del diseño minimalista y creemos un sitio web que hable mucho en su simplicidad. Para todas las consultas, comuníquese conmigo a <a href='mailto:herbert.a.lemus@gmail.com'>Herb0t</a>.</p>
          </Div>
        </Div>
      </main>
    </>
  )
}

export default App
