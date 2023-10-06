import React, { useState } from "react";
function Staff() {
  const [formValues, setFormValues] = useState({
    staffID: "",
    staffFname: "",
    staffLname: "",
    staffEmail: "",
    staffPhone: "",
    staffDOJ: Date.now(),
    staffDOL: "",
    staffDesig: "",
    staffSalary: "",
  });

  const handleInputChange = (event: any) => {
    setFormValues((prevInputValues) => ({
      ...prevInputValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: any) => {
    console.log(formValues);
  };

  return (
    <div>
      <div className="items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form>
            <div>
              <div className="mb-5">
                <label
                  htmlFor="guest"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  ID Proof
                </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  value={formValues.staffID}
                  name="staffID"
                  id="staffID"
                  placeholder="ID Proof"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#64f19a] focus:shadow-md"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="fName"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Name
                </label>
                <div className="flex -mx-3">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <input
                        onChange={handleInputChange}
                        type="text"
                        value={formValues.staffFname}
                        name="staffFname"
                        id="staffFname"
                        placeholder="First Name"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#64f19a] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <input
                        onChange={handleInputChange}
                        type="text"
                        value={formValues.staffLname}
                        name="staffLname"
                        id="staffLname"
                        placeholder="Last Name"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#64f19a] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="guest"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Concact Details
                </label>
              </div>
              <div className="flex flex-col">
                <div className="flex -mx-3">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <input
                        onChange={handleInputChange}
                        type="text"
                        value={formValues.staffEmail}
                        name="staffEmail"
                        id="staffEmail"
                        placeholder="Email"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#64f19a] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <input
                        onChange={handleInputChange}
                        type="number"
                        value={formValues.staffPhone}
                        name="staffPhone"
                        id="staffPhone"
                        placeholder="Phone"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#64f19a] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="guest"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Dates
                </label>
              </div>
              <div className="flex flex-col">
                <div className="flex -mx-3">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <input
                        onChange={handleInputChange}
                        value={formValues.staffDOJ}
                        type="date"
                        name="staffDOJ"
                        id="staffDOJ"
                        placeholder="DOJ"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#64f19a] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <input
                        onChange={handleInputChange}
                        type="date"
                        value={formValues.staffDOL}
                        name="staffDOL"
                        id="staffDOL"
                        placeholder="DOL"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#64f19a] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="guest"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Other Detials
                </label>
              </div>
              <div className="flex flex-col">
                <div className="flex -mx-3">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <input
                        onChange={handleInputChange}
                        type="text"
                        name="staffDesig"
                        value={formValues.staffDesig}
                        id="staffDesig"
                        placeholder="Designation"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#64f19a] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <input
                        onChange={handleInputChange}
                        type="number"
                        value={formValues.staffSalary}
                        name="staffSalary"
                        id="staffSalary"
                        placeholder="Salary"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#64f19a] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex my-5">
                <button
                  className="flex-1 hover:shadow-htmlForm rounded-md bg-[#64f19a] py-3 px-8 text-center text-base font-semibold text-white outline-none flex`"
                  onClick={handleSubmit}
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Staff;
