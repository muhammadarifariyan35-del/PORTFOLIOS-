function card(props) {
  return (
    <>
      <div className="card">
        <div className="top">
          <img src={props.img} alt="" />

          <a>
            Save
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-bookmark-icon lucide-bookmark"
            >
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
            </svg>
          </a>
        </div>

        <div className="center">
          <h3>
            {" "}
            {props.company} <span> {props.time} </span>
          </h3>
          <h2> {props.title} </h2>
          <div className="center_buttom">
            <h4> {props.type} </h4>
            <h4> {props.level} </h4>
          </div>
        </div>

        <div className="buttom">
          <div>
            <h3> {props.salary} </h3>
            <p> {props.location} </p>
          </div>

          <button>apply</button>
        </div>
      </div>
    </>
  );
}

export default card;
