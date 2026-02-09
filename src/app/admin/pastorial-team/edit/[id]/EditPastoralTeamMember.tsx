"use client";

import React, { useState } from "react";
import {
  FaPlus,
  FaChevronDown,
  FaInfoCircle,
  FaUserPlus,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { updateTeamMember } from "@/actions/pastorial-team";

type Props = {
  member: {
    id: number;
    name: string;
    role: string;
    bio: string;
    phone: string;
    whatsappNum: string;
    email: string;
    imageUrl?: string | null;
  };
};

const EditPastoralTeamMember: React.FC<Props> = ({ member }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(
    member.imageUrl || null,
  );
  const [saving, setSaving] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);

    const formData = new FormData(e.currentTarget);

    await updateTeamMember(member.id, {
      name: formData.get("name") as string,
      role: formData.get("role") as string,
      bio: formData.get("bio") as string,
      phone: formData.get("phone") as string,
      whatsappNum: formData.get("whatsappNum") as string,
      email: formData.get("email") as string,
      imageUrl: imagePreview ?? undefined,
    });

    setSaving(false);
    alert("Member updated successfully");
  };

  return (
    <div className="min-h-screen bg-background-light flex">
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-black tracking-tight">
              Edit Team Member
            </h2>
            <p className="text-[#616f89] mt-1">
              Update profile for the pastoral leadership team.
            </p>
          </div>

          {/* Card */}
          <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm overflow-hidden">
            <form onSubmit={handleSubmit} className="p-8">
              {/* Photo Upload */}
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
                      <Image
                        src={imagePreview}
                        alt="Preview"
                        width={300}
                        height={300}
                        unoptimized
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center">
                        <FaPlus className="text-2xl text-[#616f89] mb-1" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#616f89]">
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

              {/* Fields */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    label="Full Name"
                    name="name"
                    defaultValue={member.name}
                  />

                  <div className="space-y-1.5">
                    <label className="text-sm font-bold">Role / Title</label>
                    <div className="relative">
                      <select
                        name="role"
                        defaultValue={member.role}
                        className="w-full px-4 py-3 bg-white border border-[#e5e7eb] rounded-lg text-sm appearance-none focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                      >
                        <option>Parish Priest (Rector)</option>
                        <option>Parochial Vicar</option>
                        <option>Deacon</option>
                        <option>Catechist</option>
                      </select>
                      <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#616f89]" />
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="space-y-1.5">
                  <label className="text-sm font-bold">Biography</label>
                  <textarea
                    name="bio"
                    rows={6}
                    defaultValue={member.bio}
                    className="w-full px-4 py-3 bg-white border border-[#e5e7eb] rounded-lg text-sm resize-none focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                  />
                </div>

                {/* Contact */}
                <div>
                  <label className="text-sm font-bold">
                    Contact Information
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                    <ContactInput
                      label="Phone Number"
                      name="phone"
                      defaultValue={member.phone}
                    />
                    <ContactInput
                      label="WhatsApp Number"
                      name="whatsappNum"
                      defaultValue={member.whatsappNum}
                    />
                    <ContactInput
                      label="Email"
                      name="email"
                      type="email"
                      defaultValue={member.email}
                    />
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-10 pt-8 border-t border-[#e5e7eb] flex flex-col md:flex-row justify-end gap-4">
                <Link
                  href="/admin/pastorial-team"
                  className="px-6 py-2.5 rounded-xl font-bold text-[#616f89] hover:bg-gray-200 text-center"
                >
                  Cancel
                </Link>
                <button
                  disabled={saving}
                  className="flex items-center justify-center gap-2 bg-(--primary) text-white px-8 py-2.5 rounded-xl font-bold shadow-md shadow-primary/20"
                >
                  <FaUserPlus />
                  {saving ? "Saving..." : "Save Changes"}
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
                Changes are saved instantly and reflected on the Pastoral Team
                page.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EditPastoralTeamMember;

/* ---------- Small Components ---------- */

const FormInput = ({
  label,
  name,
  defaultValue,
}: {
  label: string;
  name: string;
  defaultValue?: string;
}) => (
  <div className="space-y-1.5">
    <label className="text-sm font-bold">{label}</label>
    <input
      name={name}
      defaultValue={defaultValue}
      className="w-full px-4 py-3 bg-white border border-[#e5e7eb] rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
    />
  </div>
);

const ContactInput = ({
  label,
  name,
  defaultValue,
  type = "text",
}: {
  label: string;
  name: string;
  defaultValue?: string;
  type?: string;
}) => (
  <div>
    <label className="block text-sm font-semibold text-gray-400 mb-1">
      {label}
    </label>
    <input
      type={type}
      name={name}
      defaultValue={defaultValue}
      className="w-full px-4 py-3 bg-white border border-[#e5e7eb] rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
    />
  </div>
);
