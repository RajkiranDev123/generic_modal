import { useState } from "react";
import Modal from "../components/Modal";
import Button from "@/components/Button";

export default function Page2() {
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  return (
    <div className="bg-gray-500 rounded-md p-4">
      <h1 className="m-2 text-center text-white">This is Page 2</h1>
      <Button className="font-semibold" onClick={() => setIsOpen(true)}>
        Open Modal in Page 2
      </Button>

      <Modal
        isOpen={isOpen}
        title="Modal on Page 2"
        content={<p>This is Page 2 modal content</p>}
        // onClose={(res) => {
        //   setResult(res || null);
        //   setIsOpen(false);
        // }}
        onClose={function (res) {
          setResult(res || null);
          setIsOpen(false);
        }}
      />

      {result && (
        <p className="m-2 text-center text-white">Result : {result}</p>
      )}
    </div>
  );
}
