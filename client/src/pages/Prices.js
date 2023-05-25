import React from "react";

import NewHeader from "../components/NewHeader";
import Footer from "../components/Footer";
import Prices from "../components/Prices";

export default function Home() {
  return (
    <div className="body">
      <NewHeader />
      <Prices />
      <Footer />
    </div>
  );
}
