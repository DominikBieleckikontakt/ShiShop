import React from "react";

const Loader = ({ className }: { className?: string }) => {
  return (
    <div
      className={`border-2 border-primary size-8 border-t-transparent animate-spin rounded-full ${className}`}
    />
  );
};

export default Loader;
