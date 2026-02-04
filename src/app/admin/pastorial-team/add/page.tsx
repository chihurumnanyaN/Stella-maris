"use client";
import React, { useState } from "react";
import {
  FaPlus,
  FaChevronDown,
  FaInfoCircle,
  FaUserPlus,
} from "react-icons/fa";
import Link from "next/link";
import { createTeamMember } from "@/actions/pastorial-team";
import Image from "next/image";

const AddPastoralTeamMember: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="min-h-screen bg-background-light flex">
      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-black tracking-tight">
              Add Team Member
            </h2>
            <p className="text-[#616f89] mt-1">
              Create a new profile for the pastoral leadership team.
            </p>
          </div>

          {/* Card */}
          <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm overflow-hidden">
            <form
              action={createTeamMember}
              encType="multipart/form-data"
              className="p-8"
            >
              {/* Photo Upload */}

              <div className="flex flex-col items-center mb-10">
                <div className="relative group cursor-pointer">
                  {/* Hidden file input */}
                  <input
                    type="file"
                    name="image" // 👈 REQUIRED
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />

                  {/* Image Preview or Placeholder */}
                  <div className="size-32 rounded-full bg-background-light border-2 border-dashed border-[#e5e7eb] flex items-center justify-center overflow-hidden hover:border-primary/50 hover:bg-primary/5 transition-all">
                    {imagePreview ? (
                      <Image
                        src={imagePreview}
                        alt="Preview"
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

                  {/* Small Add Button */}
                  <div className="absolute -bottom-1 -right-1 bg-(--primary) text-white size-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                    <FaPlus className="text-sm" />
                  </div>
                </div>

                <p className="mt-4 text-xs text-[#616f89] italic">
                  Recommended size: 400×400px (JPG or PNG)
                </p>
              </div>

              {/* Fields */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    name="name"
                    label="Full Name"
                    placeholder="e.g. Rev. Fr. Joe Anuonye"
                  />

                  <div className="space-y-1.5">
                    <label className="text-sm font-bold">Role / Title</label>
                    <div className="capitalize relative">
                      <select
                        name="role"
                        className="w-full px-4 py-3 bg-white border border-[#e5e7eb] rounded-lg text-sm appearance-none focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                      >
                        <option value="">Select a role...</option>
                        <option>Parish Priest (Rector)</option>
                        <option>parochial vicar</option>
                        <option>parochial vicar 2</option>
                        <option>Deacon</option>
                        <option>Catechist</option>
                        <option>Catechist 2</option>
                      </select>
                      <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#616f89]" />
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <label className="text-sm font-bold">Biography</label>
                    <span className="text-xs text-[#616f89]">
                      Max 500 characters
                    </span>
                  </div>
                  <textarea
                    name="bio"
                    rows={6}
                    placeholder="Briefly describe the member's background and service at Stella Maris..."
                    className="w-full px-4 py-3 bg-white border border-[#e5e7eb] rounded-lg text-sm resize-none focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                  />
                </div>

                <div>
                  {" "}
                  <div className="flex justify-between">
                    <label className="text-sm font-bold">
                      Contact Information
                    </label>
                    <span className="text-xs text-[#616f89]"></span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                    <div>
                      <label className="block text-sm font-semibold text-gray-400  mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="070xxxxxxx"
                        className="w-full px-4 py-3 bg-white border border-[#e5e7eb] rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-400  mb-1">
                        {" "}
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        name="whatsappNum"
                        placeholder="070xxxxxxx"
                        className="w-full px-4 py-3 bg-white border border-[#e5e7eb] rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-400  mb-1">
                        {" "}
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="priest@gmail.com"
                        className="w-full px-4 py-3 bg-white border border-[#e5e7eb] rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-10 pt-8 border-t border-[#e5e7eb] flex flex-col md:flex-row justify-end gap-4">
                <Link
                  href="/admin/pastorial-team"
                  className="px-6 py-2.5 rounded-xl font-bold text-center text-[#616f89] hover:bg-gray-200"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-(--primary) text-white px-8 py-2.5 rounded-xl font-bold hover:bg-(--primary)/90 shadow-md shadow-primary/20"
                >
                  <FaUserPlus />
                  Add Member
                </button>
              </div>
            </form>
          </div>

          {/* Tip */}
          <div className="mt-8 flex gap-3 bg-blue-50 p-4 rounded-xl border border-blue-100">
            <FaInfoCircle className="text-blue-600 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-blue-900">Quick Tip</h4>
              <p className="text-xs text-blue-700 mt-1">
                Newly added members appear instantly in the Pastoral Team page.
                You can edit profiles anytime.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddPastoralTeamMember;

/* ---------- Small Components ---------- */

const FormInput = ({
  label,
  placeholder,
  name,
}: {
  name: string;
  label: string;
  placeholder?: string;
}) => (
  <div className="space-y-1.5">
    <label className="text-sm font-bold">{label}</label>
    <input
      name={name}
      placeholder={placeholder}
      className="w-full px-4 py-3 bg-white border border-[#e5e7eb] rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
    />
  </div>
);

const CheckboxCard = ({
  title,
  desc,
  defaultChecked,
}: {
  title: string;
  desc: string;
  defaultChecked?: boolean;
}) => (
  <label className="flex items-center gap-3 p-4 rounded-xl border border-[#e5e7eb] hover:bg-background-light cursor-pointer">
    <input
      type="checkbox"
      defaultChecked={defaultChecked}
      className="size-4 rounded text-primary focus:ring-primary/20 border-gray-300"
    />
    <div>
      <span className="text-sm font-bold">{title}</span>
      <p className="text-[10px] text-[#616f89]">{desc}</p>
    </div>
  </label>
);
