import React from "react";

const Accounts = () => {
  return (
    <>
      <h2 className="p-2 m-2 rounded-md bg-primary/15 shadow-sm w-fit">
        Accounts
      </h2>
      <div id="list-accounts" className="flex flex-col gap-2 p-5">
        <div className="flex items-center justify-between bg-extra/15 p-2 rounded-md">
          <p className="font-bold">
            Account name - <small>account mask</small>
          </p>
          <p className="font-bold">$1000.34</p>
        </div>
        <div className="flex flex-col bg-extra/15 p-2 rounded-md">
          <div className="flex items-center justify-between w-full">
            <p className="font-bold">
              Account name - <small>account mask</small>
            </p>
            <p className="font-bold">$1000.34</p>
          </div>
          <div className="flex items-center justify-between w-full">
            <small className="text-secondary/75">
              Total credit available: $5000
            </small>
            <small className="text-secondary/75">$2500 available</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accounts;
