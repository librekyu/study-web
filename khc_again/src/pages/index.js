import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hello from "../components/Hello";

const Home = () => {
  return (
    <>
      <Header
        name="props name is here."
        value="value is here."
        isSpecial={true}
      />
      <Header name="this is header 2" value="value2 is here." />
      <Hello />
      <div>hello world!</div>
      <Footer />
    </>
  );
};

export default Home;
