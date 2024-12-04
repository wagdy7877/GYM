import React from "react";
import { useNavigate } from "react-router-dom";

function Home(props) {
  let { dramaData, comedyData, animationData, mysteryData } = props;
  let nav = useNavigate();

  let GotoDramaDetails = (id) => {
    nav(`/DramaDetails/${id}`);
  };
  let GotoComedyDetails = (id) => {
    nav(`/ComedyDetails/${id}`);
  };
  let GotoAnimationDetails = (id) => {
    nav(`/AnamationDetails/${id}`);
  };
  let GotoMysteryDetails = (id) => {
    nav(`/MysteryDetails/${id}`);
  };

  return (
    <div>
      <>
        <>
          <div className="container">
            <div className="row my-5">
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <div className="items">
                  <hr className="w-25 text-info" />
                  <hr className="w-25 text-info" />
                  <h3>Drama </h3>
                  <h3>Movies </h3>
                  <h3>TO Watch Right Now </h3>
                  <hr className="w-100 text-info" />
                  <hr className="w-100 text-info" />
                </div>
              </div>
              {dramaData.slice(0, 10).map((movie) => (
                <div className="col-md-2">
                  <div className="movie  position-relative mb-5">
                    <img
                      onClick={() => GotoDramaDetails(movie.id)}
                      className="img img-fluid border border-info"
                      src={movie.posterURL}
                      alt="posterURL"
                    />
                    <h4 className="py-2 h6 text-center">{movie.title}</h4>
                    <div className="position-absolute vote" id="rate">
                      7.5
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>

        <>
          <div className="container">
            <div className="row my-5">
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <div className="items">
                  <hr className="w-25 text-info" />
                  <hr className="w-25 text-info" />
                  <h3>Comedy </h3>
                  <h3>Movies </h3>
                  <h3>TO Watch Right Now </h3>
                  <hr className="w-100 text-info" />
                  <hr className="w-100 text-info" />
                </div>
              </div>
              {comedyData.slice(0, 10).map((movie) => (
                <div className="col-md-2">
                  <div className="movie  position-relative mb-5">
                    <img
                      onClick={() => GotoComedyDetails(movie.id)}
                      className="img img-fluid  border border-info"
                      src={movie.posterURL}
                      alt="posterURL"
                    />
                    <h4 className="py-2 h6 text-center">{movie.title}</h4>
                    <div className="position-absolute vote" id="rate">
                      7.5
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>

        <>
          <div className="container">
            <div className="row my-5">
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <div className="items">
                  <hr className="w-25 text-info" />
                  <hr className="w-25 text-info" />
                  <h3>Animation</h3>
                  <h3>Movies </h3>
                  <h3>TO Watch Right Now </h3>
                  <hr className="w-100 text-info" />
                  <hr className="w-100 text-info" />
                </div>
              </div>
              {animationData.slice(0, 10).map((movie) => (
                <div className="col-md-2">
                  <div className="movie  position-relative mb-5">
                    <img
                      onClick={() => GotoAnimationDetails(movie.id)}
                      className="img img-fluid  border border-info"
                      src={movie.posterURL}
                      alt="posterURL"
                    />
                    <h4 className="py-2 h6 text-center">{movie.title}</h4>
                    <div className="position-absolute vote" id="rate">
                      7.5
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>

        <>
          <div className="container">
            <div className="row my-5">
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <div className="items">
                  <hr className="w-25 text-info" />
                  <hr className="w-25 text-info" />
                  <h3>Mystery </h3>
                  <h3>Movies </h3>
                  <h3>TO Watch Right Now </h3>
                  <hr className="w-100 text-info" />
                  <hr className="w-100 text-info" />
                </div>
              </div>
              {mysteryData.slice(0, 10).map((movie) => (
                <div className="col-md-2">
                  <div className="movie  position-relative mb-5">
                    <img
                      onClick={() => GotoMysteryDetails(movie.id)}
                      className="img img-fluid  border border-info"
                      src={movie.posterURL}
                      alt="posterURL"
                    />
                    <h4 className="py-2 h6 text-center">{movie.title}</h4>
                    <div className="position-absolute vote" id="rate">
                      7.5
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      </>
    </div>
  );
}

export default Home;
