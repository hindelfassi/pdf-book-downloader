import React from "react";

const Section = ({ children, className }) => {
  return (
    <section className={`w-full py-12 md:py-24 lg:py-32 ${className}`}>
      <div className="container mx-auto grid md:grid-cols-3 gap-10 px-4 md:px-6 max-w-screen-lg">
        {children}
      </div>
    </section>
  );
};

export default Section;
