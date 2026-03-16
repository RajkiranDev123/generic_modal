import React, { useState } from "react";
import Modal from "../components/Modal";

export default function Page1() {
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  return (
    <div className="bg-green-300 rounded-md p-4">
      <h1 className="m-2 text-center">This Page 1</h1>
      <button className="bg-black text-white p-2 rounded-md cursor-pointer" onClick={() => setIsOpen(true)}>Open Modal in Page 1</button>

      <Modal
        isOpen={isOpen}
        title="Modal on Page 1"
        content={<p>This is Page 1 modal content</p>}
        onClose={(res) => {
          setResult(res || null);
          setIsOpen(false);
        }}
      />

      {result && <p className="m-2 text-center">Result: {result}</p>}
    </div>
  );
}