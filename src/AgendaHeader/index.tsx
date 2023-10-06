import React from "react";

function AgendaHeader({ agenda }: { agenda: string }) {
  return (
    <div className="bg-indigo-300 h-10 fixed w-full top-0 flex justify-center">
      <h1 className="font-mono my-auto">{agenda}</h1>
    </div>
  );
}

export default AgendaHeader;
