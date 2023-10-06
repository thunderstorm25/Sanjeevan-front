import React, { useState } from "react";
import AgendaHeader from "../AgendaHeader";

function InmatesSearch() {
  const [formValues, setFormValues] = useState({
    guardianFname: "",
    guardianLname: "",
    guardianID: "",
    guardianEmail: "",
    guardianContact: "",
    guardianAdd: "",
    guardianState: "",
    guardianCity: "",
    guardianPostal: "",
    inmateFname: "",
    inmateLname: "",
    inamteFatherFname: "",
    inmateFatherLname: "",
    inmateMotherFname: "",
    inmateMotherLname: "",
    inmateDOB: "",
    inmateAge: "",
    inamteDOA: "",
    inmateStayInterval: "",
    inmateDOL: "",
    inmateDeposit: "",
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

  const [step, setStep] = useState(0);
  const moveStep = () => {
    setStep(step + 1);
  };

  return (
    <>
      <div>
        <AgendaHeader agenda="Search By Inmates/Guardians" />
      </div>

      <div>
        <div className="items-center justify-center p-24 mb-20">
          <div className="mx-auto w-full max-w-[550px]">
            <form>
              {step % 2 === 0 ? (
                <div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="fName"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Guardians's Name
                    </label>
                    <div className="flex -mx-3">
                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <input
                            onChange={handleInputChange}
                            value={formValues.guardianFname}
                            type="text"
                            name="guardianFname"
                            id="guardianFname"
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
                            value={formValues.guardianLname}
                            name="guardianLname"
                            id="guardianLname"
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
                      ID Proof
                    </label>
                    <input
                      onChange={handleInputChange}
                      value={formValues.guardianID}
                      type="text"
                      name="guardianID"
                      id="guardianID"
                      placeholder="ID Proof"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#64f19a] focus:shadow-md"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="fName"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Email and Contact
                    </label>
                    <div className="flex -mx-3">
                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <input
                            onChange={handleInputChange}
                            value={formValues.guardianEmail}
                            type="text"
                            name="guardianEmail"
                            id="guardianEmail"
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
                            value={formValues.guardianContact}
                            name="guardianContact"
                            id="guardianContact"
                            placeholder="Contact"
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
                      Address
                    </label>
                    <input
                      onChange={handleInputChange}
                      type="text"
                      value={formValues.guardianAdd}
                      name="guardianAdd"
                      id="guardianAdd"
                      placeholder="Address"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#64f19a] focus:shadow-md"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex -mx-3">
                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <input
                            onChange={handleInputChange}
                            type="text"
                            value={formValues.guardianCity}
                            name="guardianCity"
                            id="guardianCity"
                            placeholder="City"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#64f19a] focus:shadow-md"
                          />
                        </div>
                      </div>
                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <input
                            onChange={handleInputChange}
                            type="text"
                            value={formValues.guardianState}
                            name="guardianState"
                            id="guardianState"
                            placeholder="State"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#64f19a] focus:shadow-md"
                          />
                        </div>
                      </div>
                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <input
                            onChange={handleInputChange}
                            type="number"
                            value={formValues.guardianPostal}
                            name="guardianPostal"
                            id="guardianPostal"
                            placeholder="Postal Code"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#64f19a] focus:shadow-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="fName"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Inmate's Name
                    </label>
                    <div className="flex -mx-3">
                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <input
                            onChange={handleInputChange}
                            type="text"
                            value={formValues.inmateFname}
                            name="inmateFname"
                            id="inmateFname"
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
                            value={formValues.inmateLname}
                            name="inmateLname"
                            id="inmateLname"
                            placeholder="Last Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#64f19a] focus:shadow-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="fName"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Inmate's Father's Name
                    </label>
                    <div className="flex -mx-3">
                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <input
                            onChange={handleInputChange}
                            type="text"
                            value={formValues.inamteFatherFname}
                            name="inamteFatherFname"
                            id="inamteFatherFname"
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
                            value={formValues.inmateFatherLname}
                            name="inmateFatherLname"
                            id="inmateFatherLname"
                            placeholder="Last Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#64f19a] focus:shadow-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="fName"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Inmate's Mother's Name
                    </label>
                    <div className="flex -mx-3">
                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <input
                            onChange={handleInputChange}
                            type="text"
                            value={formValues.inmateMotherFname}
                            name="inmateMotherFname"
                            id="inmateMotherFname"
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
                            value={formValues.inmateMotherLname}
                            name="inmateMotherLname"
                            id="inmateMotherLname"
                            placeholder="Last Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#64f19a] focus:shadow-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <label
                      htmlFor="guest"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Date Of Birth
                    </label>
                    <div className="flex flex-col">
                      <div className="flex -mx-3">
                        <div className="w-full px-3 sm:w-1/2">
                          <div className="mb-5">
                            <input
                              onChange={handleInputChange}
                              type="date"
                              value={formValues.inmateDOB}
                              name="inmateDOB"
                              id="inmateDOB"
                              placeholder="Date of Birth"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#64f19a] focus:shadow-md"
                            />
                          </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                          <div className="mb-5">
                            <input
                              onChange={handleInputChange}
                              type="number"
                              value={formValues.inmateAge}
                              name="inmateAge"
                              id="inmateAge"
                              placeholder="-"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#64f19a] focus:shadow-md"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="guest"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Details of Stay
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex -mx-3">
                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <input
                            onChange={handleInputChange}
                            type="date"
                            value={formValues.inamteDOA}
                            name="inamteDOA"
                            id="inamteDOA"
                            placeholder="Date of Admission"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#64f19a] focus:shadow-md"
                          />
                        </div>
                      </div>
                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <input
                            onChange={handleInputChange}
                            type="number"
                            value={formValues.inmateStayInterval}
                            name="inmateStayInterval"
                            id="inmateStayInterval"
                            placeholder="Stay (months)"
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
                      Date of Leave
                    </label>
                    <input
                      onChange={handleInputChange}
                      type="date"
                      value={formValues.inmateDOL}
                      name="inmateDOL"
                      id="inmateDOL"
                      placeholder="Date of Leave"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#64f19a] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="guest"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Deposit
                    </label>
                    <input
                      onChange={handleInputChange}
                      type="number"
                      value={formValues.inmateDeposit}
                      name="inmateDeposit"
                      id="inmateDeposit"
                      placeholder="Deposit Fee"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#64f19a] focus:shadow-md"
                    />
                  </div>
                  <div className="flex my-5">
                    <button
                      className="flex-1 hover:shadow-htmlForm rounded-md bg-[#64f19a] py-3 px-8 text-center text-base font-semibold text-black outline-none flex`"
                      onClick={handleSubmit}
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
              )}
            </form>
            <div className="flex">
              <button
                className="hover:shadow-htmlForm rounded-md bg-[#64f19a] py-3 px-8 text-center text-base font-semibold text-black outline-none m-auto"
                onClick={moveStep}
              >
                {step % 2 ? "PREV" : "NEXT"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default InmatesSearch;
