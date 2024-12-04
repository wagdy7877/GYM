import React from "react";
import { useNavigate } from "react-router-dom";

const Mystery = (props) => {
  let { mysteryData } = props;
  let nav = useNavigate();

  let GotoMysteryDetails = (id) => {
    nav(`/MysteryDetails/${id}`);
  };

  return (
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
          {mysteryData.map((movie) => (
            <div className="col-md-2">
              <div className="movie  position-relative mb-5">
                <img
                  className="img img-fluid  border border-info"
                  onClick={() => GotoMysteryDetails(movie.id)}
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
  );
};

export default Mystery;
