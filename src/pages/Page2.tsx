import React, { useState } from "react";
import Modal from "../components/Modal";

export default function Page2() {
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  return (
    <div>
      <h1>Page 2</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal in Page2</button>

      <Modal
        isOpen={isOpen}
        title="Modal on Page 2"
        content={<p>This is Page 2 modal content</p>}
        onClose={(res) => {
          setResult(res || null);
          setIsOpen(false);
        }}
      />

      {result && <p>Result: {result}</p>}
    </div>
  );
}