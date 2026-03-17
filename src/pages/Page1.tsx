import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "@/components/Button";

export default function Page1() {
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  return (
    <div className="bg-blue-500 rounded-md p-4">
      <h1 className="m-2 text-center text-white">This is Page 1</h1>
      <Button onClick={() => setIsOpen(true)}>Open Modal in Page 1</Button>

      <Modal
        isOpen={isOpen}
        title="Modal on Page 1"
        content={<p>This is Page 1 modal content</p>}
        onClose={(res) => {
          setResult(res || null);
          setIsOpen(false);
        }}
      />

      {result && <p className="m-2 text-center text-white">Result: {result}</p>}
    </div>
  );
}
