import cloudinary from "@/app/lib/cloudinary";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file"); // image OR pdf

    if (!file) {
      return Response.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    // file → buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // detect file type
    const isPdf = file.type === "application/pdf";

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: isPdf ? "documents" : "Portfolio-web-app",
          resource_type: isPdf ? "raw" : "image", // 🔴 IMPORTANT
        },
        (error, result) => {
          if (error) reject(error);
          resolve(result);
        }
      ).end(buffer);
    });

    return Response.json({
      message: isPdf ? "PDF uploaded successfully" : "Image uploaded successfully",
      fileUrl: result.secure_url,
      public_id: result.public_id,
      type: isPdf ? "pdf" : "image",
    });

  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
