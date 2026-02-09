"use client";

import { useState } from "react";
import { deletePastoralTeamMember } from "@/actions/pastorial-team";
import { MdDelete, MdDeleteOutline } from "react-icons/md";

const Delete = ({ id }: { id: number }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      const result = await deletePastoralTeamMember(id);

      if (!result.success) {
        throw new Error(result.error);
      }

      setShowConfirm(false);
    } catch (error) {
      console.error("Error deleting member:", error);
      alert("Failed to delete member. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowConfirm(true)}
        className="absolute top-4 right-4 text-red-400 hover:text-red-600 transition-colors"
        title="Delete member"
      >
        <MdDeleteOutline className="text-xl" />
      </button>

      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm mx-4 shadow-xl">
            <h3 className="font-bold text-lg mb-2">Delete Member?</h3>
            <p className="text-gray-600 text-sm mb-6">
              Are you sure you want to delete this team member? This action
              cannot be undone.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowConfirm(false)}
                disabled={isDeleting}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="px-4 py-2 rounded-lg text-sm font-semibold bg-red-500 text-white hover:bg-red-600 transition-colors disabled:opacity-50"
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Delete;
