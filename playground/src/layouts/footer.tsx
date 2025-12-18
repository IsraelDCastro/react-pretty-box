import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 p-10">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-xl font-bold text-white m-0">{currentYear}</p>
      </div>
    </footer>
  );
}
