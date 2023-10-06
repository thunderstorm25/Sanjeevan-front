import React, { useState } from 'react'
import AgendaHeader from '../AgendaHeader'
import { PaymentOptions } from '../constants';

function DonationsSearch() {
    const [step, setStep] = useState(0);
    const [formValues, setFormValues] = useState({
      donorFname: "",
      donorLname: "",
      donorID: "",
      donorEmail: "",
      donorPhone: "",
      donationAmt: "",
      donationnTID: "",
      donationDate: Date.now(),
      donationType: "",
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

    const moveStep = () => {
      setStep(step + 1);
    };

    
    return (
        <>
        <div>
          <AgendaHeader agenda='Search By Donations/Donors' />
        </div>

        <div>
          <div className="items-center justify-center p-24">
            <div className="mx-auto w-full max-w-[550px]">
              <form>
                {step % 2 === 0 ? (
                  <div>
                    <div className="top-0 flex flex-col">
                      <label
                        htmlFor="fName"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Donors's Name
                      </label>
                      <div className="flex -mx-3">
                        <div className="w-full px-3 sm:w-1/2">
                          <div className="mb-5">
                            <input
                              onChange={handleInputChange}
                              value={formValues.donorFname}
                              type="text"
                              name="donorFname"
                              id="donorFname"
                              placeholder="First Name"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#64f19a] focus:shadow-md"
                            />
                          </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                          <div className="mb-5">
                            <input
                              onChange={handleInputChange}
                              value={formValues.donorLname}
                              type="text"
                              name="donorLname"
                              id="donorLname"
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
                        value={formValues.donorID}
                        type="text"
                        name="donorID"
                        id="donorID"
                        placeholder="Adhaar/PAN"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#64f19a] focus:shadow-md"
                      />
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
                              value={formValues.donorEmail}
                              type="text"
                              name="donorEmail"
                              id="donorEmail"
                              placeholder="Email"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#64f19a] focus:shadow-md"
                            />
                          </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                          <div className="mb-5">
                            <input
                              onChange={handleInputChange}
                              value={formValues.donorPhone}
                              type="number"
                              name="donorPhone"
                              id="donorPhone"
                              placeholder="Phone"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#64f19a] focus:shadow-md"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-5">
                      <label
                        htmlFor="guest"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Amount
                      </label>
                      <input
                        onChange={handleInputChange}
                        value={formValues.donationAmt}
                        type="number"
                        name="donationAmt"
                        id="donationAmt"
                        placeholder="Donation Amount"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#64f19a] focus:shadow-md"
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="guest"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Transaction ID
                      </label>
                      <input
                        onChange={handleInputChange}
                        value={formValues.donationnTID}
                        type="text"
                        name="donationnTID"
                        id="donationnTID"
                        placeholder="#"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#64f19a] focus:shadow-md"
                      />
                    </div>
                    <div className="">
                      <label
                        htmlFor="guest"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Other Details
                      </label>
                      <div className="flex flex-col">
                        <div className="flex -mx-3">
                          <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                              <input
                                onChange={handleInputChange}
                                value={formValues.donationDate}
                                type="date"
                                name="donationDate"
                                id="donationDate"
                                placeholder="Date of Donation"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#64f19a] focus:shadow-md"
                              />
                            </div>
                          </div>
                          <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                              <select
                                onChange={handleInputChange}
                                name="donationType"
                                value={formValues.donationType}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#64f19a] focus:shadow-md"
                              >
                                {(
                                  Object.keys(PaymentOptions) as Array<
                                    keyof typeof PaymentOptions
                                  >
                                ).map((key) => {
                                  return <option>{key}</option>;
                                })}
                              </select>
                            </div>
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
                )}
              </form>
              <div className="flex">
                <button
                  className="hover:shadow-htmlForm rounded-md bg-[#64f19a] py-3 px-8 text-center text-base font-semibold text-white outline-none m-auto"
                  onClick={moveStep}
                >
                  {step % 2 ? "PREV" : "NEXT"}
                </button>
              </div>
            </div>
          </div>
        </div>
        </>
)
}

export default DonationsSearch