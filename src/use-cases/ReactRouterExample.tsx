// This example is contained in a single file for simplicity.
// In a real-world application, you would split the components into separate files.

import { BrowserRouter, Routes, Route, Link } from 'react-router';

const ReactRouterExample: React.FC = () => {
  return (
    // BrowserRouter wraps the entire app to enable routing functionality
    <BrowserRouter>
      {/* Navigation menu uses Link components for client-side navigation */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* The Routes component defines the routing structure */}
      <Routes>
        {/* Individual Route components map paths to elements (components) */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 errors */}
      </Routes>
    </BrowserRouter>
  );
}

const Home: React.FC = () =><h1>Home Page</h1>;
const About: React.FC = () =><h1>About Page</h1>;
const Contact: React.FC = () =><h1>Contact Page</h1>;
const NotFound: React.FC = () =><h1>404: Page Not Found</h1>;

export default ReactRouterExample;
