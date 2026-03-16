import React, { useState } from "react";
import Modal from "../components/Modal";

export default function Page1() {
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  return (
    <div>
      <h1>Page 1</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal in Page1</button>

      <Modal
        isOpen={isOpen}
        title="Modal on Page 1"
        content={<p>This is Page 1 modal content</p>}
        onClose={(res) => {
          setResult(res || null);
          setIsOpen(false);
        }}
      />

      {result && <p>Result: {result}</p>}
    </div>
  );
}