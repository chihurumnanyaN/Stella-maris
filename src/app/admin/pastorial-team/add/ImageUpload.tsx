"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa";

type ImageUploadProps = {
  existingImage?: string;
  onChange?: (file: File | null) => void;
};

export default function ImageUpload({
  existingImage,
  onChange,
}: ImageUploadProps) {
  // ✅ derive initial state from props
  const [imagePreview, setImagePreview] = useState<string | null>(
    existingImage ?? null,
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    onChange?.(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col items-center mb-10">
      <div className="relative group cursor-pointer">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        />

        <div className="size-32 rounded-full bg-background-light border-2 border-dashed border-[#e5e7eb] flex items-center justify-center overflow-hidden hover:border-primary/50 hover:bg-primary/5 transition-all">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Profile preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center">
              <FaPlus className="text-2xl text-[#616f89] group-hover:text-primary mb-1" />
              <span className="text-[10px] font-bold text-[#616f89] group-hover:text-primary uppercase tracking-widest">
                Upload Photo
              </span>
            </div>
          )}
        </div>

        <div className="absolute -bottom-1 -right-1 bg-(--primary) text-white size-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
          <FaPlus className="text-sm" />
        </div>
      </div>

      <p className="mt-4 text-xs text-[#616f89] italic">
        Recommended size: 400×400px (JPG or PNG)
      </p>
    </div>
  );
}
