import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

function Card({ card }) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {card.plan}
          </h5>
          <h6 className="card-price text-center">
            ${card.price}/<span className="period">month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            {card.features.map((item) => {
              return (
                <li className={item.correct ? "" : "text-muted"}>
                  <span class="fa-li">
                    <FontAwesomeIcon icon={item.correct ? faCheck : faXmark} />
                  </span>
                  {item.highlight ? (
                    <strong>{item.title}</strong>
                  ) : (
                    <span>{item.title}</span>
                  )}
                </li>
              );
            })}
          </ul>
          <div class="d-grid">
            <a href="#" class="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
