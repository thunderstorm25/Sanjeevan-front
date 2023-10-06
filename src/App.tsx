import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import { Sections } from "./constants";
import Inmates from "./Inmates";
import Donations from "./Donations";
import Staff from "./Staff";
import Footer from "./Footer";
import InmatesSearch from "./InmatesSearch";
import DonationsSearch from "./DonationsSearch";
import StaffSearch from "./StaffSearch";

function App() {
  const [section, setSection] = useState(Sections.DONORS);
  const [search, setSearch] = useState(false);
  return (
    <div>
      {!search && <Navbar setParentSection={setSection} />}
      <button
        className="py-2 px-4 bg-transparent text-green-600 font-semibold border border-green-600 
        rounded hover:bg-green-600 hover:text-white hover:border-transparent 
        transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 
        absolute right-0 m-5 top-24"
        onClick={() => setSearch(!search)}
      >
        {search ? "BACK" : "SEARCH"}
      </button>

      {section === Sections.INAMTES &&
        (!search ? <Inmates /> : <InmatesSearch />)}
      {section === Sections.DONORS &&
        (!search ? <Donations /> : <DonationsSearch />)}
      {section === Sections.STAFF && (!search ? <Staff /> : <StaffSearch />)}

      <Footer />
    </div>
  );
}

export default App;
