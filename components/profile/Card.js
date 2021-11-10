import React from "react";

const Booksowned = () => {
  return (
    <div className="p-0 m-0">
      <article
        className="sm:grid grid-cols-6 bg-white shadow-sm p-7 relative lg:max-w-2xl sm:p-4 rounded-lg lg:col-span-2 lg:ml-20"
        style={{ margin: "20px" }}>
        <img
          src="https://images.unsplash.com/photo-1502977249166-824b3a8a4d6d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGZsb3dlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="Just a flower"
          className="w-full rounded-lg"
        />
        <div className="pt-5 self-center sm:pt-0 sm:pl-10 col-span-3">
          <h2 className="text-gray-800 capitalize text-xl font-bold">
            hypnotherapy for motivation getting the drive back
          </h2>
          by{" "}
          <a href="#" className="capitalize underline inline-block pt-2">
            dorothy parks
          </a>
        </div>
      </article>
    </div>
  );
};

export default Booksowned;
