import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Advice = () => {
  const [data, setData] = useState({ slip: { advice: "", id: "" } });
  const [isLoading, setIsLoading] = useState(true);
  const defaultAdvice = "Don't be afraid to make mistakes and learn from them.";

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setIsLoading(true);
    const response = await fetch("https://api.adviceslip.com/advice");
    const result = await response.json();

    setData(result);
    setIsLoading(false);
    console.log(result);
  }

  function handleClick() {
    fetchData();
  }

  return (
    <div className="advice">
      <h3 className="advice-head">Advice #{data.slip.id || 0}</h3>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <p className="advice-text">
          <FontAwesomeIcon icon={faQuoteLeft} />
          {"  " + data.slip.advice || defaultAdvice + "  "}
          <FontAwesomeIcon icon={faQuoteRight} />
        </p>
      )}
      <div className="divider">
        <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
            <g transform="translate(138)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
      </div>
      <small className="guide">Click the dice to get a new advice</small>
      <div className="icon-dice">
        <button onClick={handleClick} data-load={isLoading ? "true" : "false"}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Advice;
