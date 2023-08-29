const element = (
  // Write your code here.
  <div>
    <h1 className="main-heading">Congratulations</h1>
    <div className="card">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          height="100px"
          width="100px"
        />
      </div>
      <p className="name">Kiran V</p>
      <p className="content">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          height="100px"
          width="100px"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
