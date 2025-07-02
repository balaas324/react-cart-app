import { Link } from "react-router-dom";
import "../styles/pages/NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="not-found-home-link">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
