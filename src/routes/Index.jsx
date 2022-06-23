import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div id="Index">
      <div className="container">
        <h1>Hello world</h1>
        <Link to="/web-maker">
          <button className="btn btn-primary">to web maker</button>
        </Link>
      </div>
    </div>
  );
}
