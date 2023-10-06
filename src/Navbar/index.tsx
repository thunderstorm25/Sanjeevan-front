import React, { useEffect, useState } from "react";
import Tab from "../Tab";
import { Sections } from "../constants";

function Navbar({ setParentSection }: { setParentSection: Function }) {
  const [section, setSection] = useState(Sections.INAMTES);

  useEffect(() => {
    setParentSection(section);
  }, [section, setParentSection]);

  return (
    <div>
      <div className="space-y-5">
        <div className="border-b border-b-green-100">
          <ul className="-mb-px flex items-center gap-4 text-sm font-medium">
            <li className="flex-1">
              <Tab
                selected={section === Sections.INAMTES}
                label="Inmates"
                onClick={() => {
                  setSection(Sections.INAMTES);
                }}
              />
            </li>
            <li className="flex-1">
              <Tab
                selected={section === Sections.DONORS}
                label="Donations"
                onClick={() => {
                  setSection(Sections.DONORS);
                }}
              />
            </li>
            <li className="flex-1">
              <Tab
                selected={section === Sections.STAFF}
                label="Staff"
                onClick={() => {
                  setSection(Sections.STAFF);
                }}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
