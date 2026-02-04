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

    // ✅ size limit (10MB)
    const MAX_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      return Response.json(
        { error: "File size must be less than 10MB" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const isPdf = file.type === "application/pdf";

    const fileName = isPdf
      ? `document_${Date.now()}`
      : `image_${Date.now()}`;

   const result = await new Promise((resolve, reject) => {
  const uploadOptions = {
    folder: isPdf ? "documents" : "Portfolio-web-app",
    resource_type: isPdf ? "raw" : "image",
    use_filename: true,
    unique_filename: true,
  };

  // ✅ PDF specific handling
  if (isPdf) {
    uploadOptions.public_id = fileName.replace(/\.pdf$/i, ""); // no extension here
  }

  const stream = cloudinary.uploader.upload_stream(
    uploadOptions,
    (error, result) => {
      if (error) return reject(error);
      resolve(result);
    }
  );

  stream.end(buffer); // ✅ buffer must be complete
});

    return Response.json(
      {
        message: "File uploaded successfully",
        fileUrl: result.secure_url,      // 👈 DB me save karo
        public_id: result.public_id,
        type: isPdf ? "pdf" : "image",
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Upload error:", error);
    return Response.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}
