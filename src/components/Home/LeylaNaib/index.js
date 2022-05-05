import axios from "axios";
import { useEffect, useState } from "react";
import "./LeylaNaib.scss";

const LeylaNaib = () => {
  //responsive render
  let matchMedia = window.matchMedia("(max-width: 991px)").matches;

  const [leilaName, setLeilaName] = useState([]);
  const [nameLeila, setNameLeila] = useState('');
  const [surnameLeila, setSurnameLeila] = useState('');

  useEffect(() => {
    const leilaData = leilaName[0]?.author.split(' ');
    if (leilaData) {
      setNameLeila(leilaData[0]);
      setSurnameLeila(leilaData[1])
    }
  })

  useEffect(() => {
    axios.get("http://localhost:3001/api/main")
      .then(res => setLeilaName(res.data.result))
  }, [])
  
  return (
    <section className="leyla-naib">
      <div className="leyla-naib__name">
        {matchMedia ? (
          <>
            <div className="leyla-naib__mobile">
              <span className="leyla-naib__leyla">{nameLeila}</span>
              <span className="leyla-naib__naib">{surnameLeila}</span>
            </div>
            <span className="leyla-naib__surname">{leilaName[0]?.titleExtension}</span>
          </>
        ) : (
          <>
            <h1>{leilaName[0]?.author}</h1>
            <p>{leilaName[0]?.titleExtension}</p>
          </>
        )}
      </div>
    </section>
  );
};

export default LeylaNaib;
