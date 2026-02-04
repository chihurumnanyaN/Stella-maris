"use client";

import React from "react";
import { MdContentCopy, MdVolunteerActivism } from "react-icons/md";

const page = () => {
  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard");
  };

  return (
    <div className="min-h-screen bg-white px-4 py-12 md:px-12">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-(--primary)/10">
            <MdVolunteerActivism className="text-3xl text-(--primary)" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            Support Our Parish
          </h1>
          <p className="mt-3 text-gray-600">
            Your generous donations help us sustain the mission of the Church,
            support parish activities, and serve the community.
          </p>
        </div>

        {/* Donation Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-6 text-xl font-semibold text-gray-900">
            Bank Transfer Details
          </h2>

          <div className="space-y-4">
            {/* Account Name */}
            <InfoRow
              label="Account Name"
              value="Stella Maris Catholic Church, Abayi-Aba"
              onCopy={copyText}
            />

            {/* Bank Name */}
            <InfoRow
              label="Bank Name"
              value="Example Bank Plc"
              onCopy={copyText}
            />

            {/* Account Number */}
            <InfoRow
              label="Account Number"
              value="1234567890"
              onCopy={copyText}
              highlight
            />
          </div>

          {/* Instructions */}
          <div className="mt-8 rounded-lg bg-gray-50 p-5">
            <h3 className="mb-3 font-semibold text-gray-800">
              Important Instructions
            </h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-gray-600">
              <li>
                Please include your <b>name</b> as the payment reference.
              </li>
              <li>
                For special intentions (Thanksgiving, Tithe, Project Support),
                kindly indicate it in the narration.
              </li>
              <li>
                If you made a transfer in error, contact the parish office
                immediately.
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-center text-sm text-gray-500">
          “God loves a cheerful giver” — 2 Corinthians 9:7
        </p>
      </div>
    </div>
  );
};

export default page;

/* Reusable row component */
const InfoRow = ({
  label,
  value,
  onCopy,
  highlight = false,
}: {
  label: string;
  value: string;
  onCopy: (text: string) => void;
  highlight?: boolean;
}) => {
  return (
    <div
      className={`flex items-center justify-between rounded-lg border px-4 py-3 ${
        highlight ? "border-(--primary) bg-(--primary)/5" : "border-gray-200"
      }`}
    >
      <div>
        <p className="text-xs font-medium uppercase text-gray-500">{label}</p>
        <p className="text-base font-semibold text-gray-900">{value}</p>
      </div>

      <button
        onClick={() => onCopy(value)}
        className="rounded-md p-2 text-gray-600 hover:bg-(--primary)/10 hover:text-(--primary)"
        aria-label={`Copy ${label}`}
      >
        <MdContentCopy />
      </button>
    </div>
  );
};
