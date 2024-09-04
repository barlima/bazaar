import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="m-auto flex flex-col gap-4 text-center prose-xl"> 
      <h1 className="text-2xl">Page not found</h1>
      <span>
        Check out our{" "}
        <a href="/" className="underline text-rose-400 hover:text-rose-500">
          products
        </a>
      </span>
    </div>
  );
};

export default NotFound;
