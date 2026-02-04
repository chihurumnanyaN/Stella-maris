"use server";

import cloudinary from "@/lib/cloudinary";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

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
