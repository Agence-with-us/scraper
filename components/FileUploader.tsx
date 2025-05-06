"use client";

import { useRef, useState } from "react";
import { UploadCloud } from "lucide-react";

interface FileUploaderProps {
  onFileChange: (file: File | null) => void;
}

const FileUploader = ({ onFileChange }: FileUploaderProps) => {
  const [dragging, setDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    setFileName(file?.name || null);
    onFileChange(file);

    if (file) {
      const fileInfo = {
        name: file.name,
        size: file.size,
      };
      localStorage.setItem("uploadedFile", JSON.stringify(fileInfo));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFileName(file?.name || null);
    onFileChange(file);

    if (file) {
      const fileInfo = {
        name: file.name,
        size: file.size,
      };
      localStorage.setItem("uploadedFile", JSON.stringify(fileInfo));
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="flex h-[50vh]">
      <div
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={() => setDragging(true)}
        onDragLeave={() => setDragging(false)}
        className={`flex flex-col gap-4 justify-center border-2 border-dashed bg-white rounded-lg w-full text-center cursor-pointer transition items-center px-6 ${
          dragging ? "bg-gray-100 border-blue-400" : "border-gray-300"
        }`}
      >
        <UploadCloud className="mx-auto mb-4 h-12 w-12 text-black" />
        <div className="flex flex-col gap-2">
          <p className="text-black text-lg font-medium">
            Télécharger votre fichier
          </p>
          <p className="text-gray-600">
            Glisser et déposer votre fichier ici ou{" "}
            <span className="text-black font-medium underline">
              choisir un fichier
            </span>
          </p>
        </div>

        {fileName && (
          <p className="mt-4 text-sm text-green-600">
            Fichier sélectionné : {fileName}
          </p>
        )}
        <input
          type="file"
          ref={inputRef}
          onChange={handleChange}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

export default FileUploader;
