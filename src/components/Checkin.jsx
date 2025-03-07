import { useState } from "react";

export default function Checkin() {
  const [members, setMembers] = useState([1]);
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://banner2.cleanpng.com/20180825/ook/kisspng-logo-brand-product-design-trademark-logos-fake-mock-up-illust-ss143531671-2-sra-so-1713948667494.webp"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold text-white">
          Check In at Hotel #1
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          {members.map((member) => (
            <MemberDetails key={member}>{`Member ${member}`}</MemberDetails>
          ))}
          <div>
            {members.length < 6 && (
              <button
                onClick={() =>
                  members.length < 6
                    ? setMembers([...members, ++members[members.length - 1]])
                    : null
                }
                className="flex w-full justify-center rounded-md  border-blue-500 hover:border-blue-400 border-2 text-blue-500 hover:text-blue-400 px-3 py-1.5 font-semibold shadow-xs  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add Member
              </button>
            )}
            {members.length > 1 && (
              <button
                onClick={() => members.pop() && setMembers([...members])}
                className="flex w-full mt-4 justify-center rounded-md disabled:bg-grey-500 disabled:border-gray-500 disabled:text-white border-red-500 hover:border-red-400 border-2 text-red-500 hover:text-red-400 px-3 py-1.5  font-semibold shadow-xs  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Remove Member
              </button>
            )}
          </div>
          <div>
            <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Check In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function MemberDetails({ children }) {
  const [adhaar, setAdhaar] = useState("");
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <label
          htmlFor="name"
          className="block text-sm/6 font-medium text-white"
        >
          {children}
        </label>
      </div>
      <div className="mt-2">
        <input
          name="name"
          id="name"
          required
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
      </div>
      <div className="flex items-center justify-between mt-2">
        <label
          htmlFor="adhaar"
          className="block text-sm/6 font-medium text-white"
        >
          Member Adhaar
        </label>
      </div>
      <div className="mt-2">
        <input
          name="adhaar"
          id="adhaar"
          required
          value={adhaar}
          onChange={(e) =>
            (/^\d+$/.test(e.target.value) && e.target.value.length <= 16) ||
            e.target.value == ""
              ? setAdhaar(e.target.value)
              : null
          }
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
      </div>
    </div>
  );
}
