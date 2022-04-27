import "./LeylaNaib.scss";

const LeylaNaib = () => {
  //responsive render
  let matchMedia = window.matchMedia("(max-width: 991px)").matches;

  return (
    <section className="leyla-naib">
      <div className="leyla-naib__name">
        {matchMedia ? (
          <>
          
            <div className="leyla-naib__mobile">
              <span className="leyla-naib__leyla">Leyla</span>
              <span className="leyla-naib__naib">Naib</span>
            </div>
            <span className="leyla-naib__surname">Jabbarli</span>
          </>
        ) : (
          <>
            <h1>Leyla Naib</h1>
            <p>Jabbarli</p>
          </>
        )}
      </div>
    </section>
  );
};

export default LeylaNaib;
