"use server";

import cloudinary from "@/lib/cloudinary";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// actions/pastorial-team.ts

export async function updateTeamMember(
  id: number,
  data: {
    name: string;
    role: string;
    bio: string;
    phone: string;
    whatsappNum: string;
    email: string;
    imageUrl?: string;
  },
) {
  return prisma.pastoralTeamMember.update({
    where: { id },
    data,
  });
}

export async function getPastoralTeamMember(id: number) {
  return prisma.pastoralTeamMember.findUnique({
    where: { id },
  });
}

export async function createTeamMember(formData: FormData) {
  const name = formData.get("name") as string;
  const role = formData.get("role") as string;
  const bio = formData.get("bio") as string;
  const phone = formData.get("phone") as string;
  const whatsappNum = formData.get("whatsappNum") as string;
  const email = formData.get("email") as string;
  const imageFile = formData.get("image") as File | null;

  let imageUrl: string | undefined;

  // ⬆️ Upload image to Cloudinary
  if (imageFile && imageFile.size > 0) {
    const buffer = Buffer.from(await imageFile.arrayBuffer());

    const uploadResult: any = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "pastoral-team",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          },
        )
        .end(buffer);
    });

    imageUrl = uploadResult.secure_url;
  }

  await prisma.pastoralTeamMember.create({
    data: {
      name,
      role,
      bio,
      phone,
      whatsappNum,
      email,
      imageUrl: imageUrl ?? "/priestavatar.jpg",
    },
  });

  revalidatePath("/admin/pastorial-team/add");
}

export async function deletePastoralTeamMember(id: number) {
  try {
    await prisma.pastoralTeamMember.delete({
      where: { id },
    });

    revalidatePath("/admin/pastorial-team");
    return { success: true };
  } catch (error) {
    console.error("Error deleting pastoral team member:", error);
    return { success: false, error: "Failed to delete member" };
  }
}
