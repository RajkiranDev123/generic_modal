import React, { useState } from "react";
import Modal from "../components/Modal";

export default function Page2() {
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  return (
    <div className="bg-orange-300 rounded-md p-4">
      <h1 className="m-2 text-center">This is Page 2</h1>
      <button className="bg-red-500 text-white p-2 rounded-md cursor-pointer" onClick={() => setIsOpen(true)}>Open Modal in Page 2</button>

      <Modal
        isOpen={isOpen}
        title="Modal on Page 2"
        content={<p>This is Page 2 modal content</p>}
        onClose={(res) => {
          setResult(res || null);
          setIsOpen(false);
        }}
      />

      {result && <p className="m-2 text-center">Result : {result}</p>}
    </div>
  );
}