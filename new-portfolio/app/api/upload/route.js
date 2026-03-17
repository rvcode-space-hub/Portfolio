import cloudinary from "@/app/lib/cloudinary";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const category = formData.get("category"); // 👈 NEW

    if (!file) {
      return Response.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

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

    // 🔥 Folder Logic
    let folder = "Portfolio-web-app";

    if (isPdf) {
      folder += "/documents";
    } else {
      if (category === "project") {
        folder += "/Projects";
      } else if (category === "certification") {
        folder += "/Certifications";
      } else {
        folder += "/others"; // fallback
      }
    }

    const fileName = `${category || "file"}_${Date.now()}`;

    const result = await new Promise((resolve, reject) => {
      const uploadOptions = {
        folder,
        resource_type: isPdf ? "raw" : "image",
        use_filename: true,
        unique_filename: true,
      };

      if (isPdf) {
        uploadOptions.public_id = fileName;
      }

      const stream = cloudinary.uploader.upload_stream(
        uploadOptions,
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );

      stream.end(buffer);
    });

    return Response.json(
      {
        message: "File uploaded successfully",
        fileUrl: result.secure_url,
        public_id: result.public_id,
        folder: folder, // 👈 debug ke liye useful
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