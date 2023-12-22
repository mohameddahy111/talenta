import cloudinary from "./cloudnary.js";

export const addImages = async (options) => {
    if (!options.path) {
      return "";
    }
    if (options.type == "files") {
      const array = [];
      for (const file of options.path) {
        const { secure_url, public_id } = await cloudinary.uploader.upload(
          file.path,
          { folder: options.folder }
        );
        array.push({ id: public_id, scr: secure_url });
      }
      return array.length > 1 ? array : { id: array[0].id, scr: array[0].scr };
    } else {
      const { public_id, secure_url } = await cloudinary.uploader.upload(
        options.path,
        { folder: options.folder }
      );
      return { id: public_id, scr: secure_url };
    }
  };
  