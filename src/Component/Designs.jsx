import React from "react";

function Designs({ clickMenu }) {
  return (
    <div onKeyDown={clickMenu} className="bg-slate-300 mt-10">
      <div className="text-gray-700 py-5 mt-5 flex flex-col px-5 md:px-40">
        <h1 className="text-lg text-center font-semibold mb-4 sm:text-2xl">
           dolor sit, amet consectetur adipisicing
        </h1>
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </p>
        <p className="text-justify mt-4">
          Aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <figure>
          <img
            className="mt-4 w-[100%]"
            src="https://images.unsplash.com/photo-1505409628601-edc9af17fda6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wzMzIzODk5OXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
            alt="dinning room"
          />
        </figure>
      </div>
      {/* https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXwzMzIzODk5OXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60 */}
      {/* https://images.unsplash.com/photo-1505409628601-edc9af17fda6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wzMzIzODk5OXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60 */}
    </div>
  );
}

export default Designs;
