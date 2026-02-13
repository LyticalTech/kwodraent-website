import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-6">
      {children}
    </div>
  );
};

export default Container;



















