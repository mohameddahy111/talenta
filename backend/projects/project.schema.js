import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: {
      ar: {type: String, required: true, unique: true},
      en: {type: String, required: true, unique: true}
    },
    discrpion: {
      ar: {type: String, required: true},
      en: {type: String, required: true}
    },
    logo: {
      id: {type: String},
      src: {type: String}
    },
    web: {
      min_img: {
        id: {type: String},
        src: {type: String}
      },
      images: [Object],
      link: {type: String},
      interFace: {
        ar: {type: String, required: true},
        en: {type: String, required: true}
      }
    },
    mobil_App: {
      min_img: {
        id: {type: String},
        src: {type: String}
      },
      images: [Object],
      discrpion: {
        ar: {type: String, required: true},
        en: {type: String, required: true}
      },
      links: {
        apple_Store: {type: String},
        google_store: {type: String}
      }
    }
  },
  {timestamps: true}
);

const Project = mongoose.model("Project", projectSchema);
export default Project;
