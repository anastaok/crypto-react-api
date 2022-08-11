import React from "react";

import { Featured, Footer, Hero, Navbar, Signup } from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
