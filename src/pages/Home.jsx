import React from "react";
import { useAuth } from "../hooks/useAuth";

import { Link } from "react-router-dom";

const Home = () => {
  const { auth } = useAuth();
  console.log("User Authenticated:", auth);
  return (
    <div>
      <Link to="/me"> Go to Profile page</Link>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="text-lg">
          This is the home page of our application. You can navigate to
          different sections using the links in the header.
        </p>
      </div>
    </div>
  );
};

export default Home;
