import {errorHandler} from "../utils/errerHanderl.js";
import Project from "./project.schema.js";
import {AppError} from "../utils/AppError.js";
import {addImages} from "../utils/addImages.js";

export const addProject = errorHandler(async (req, res, next) => {
  console.log(req.files);
  const isExist = await Project.findOne({"name.en": req.body.name.en});
  if (isExist) {
    return next(new AppError("Project already exists", 401));
  }
  const newProject = {
    name: {
      ar: req.body.name.ar,
      en: req.body.name.en
    },
    discrpion: {
      ar: req.body.discrpion.ar,
      en: req.body.discrpion.en
    },
    logo: "",
    web: {
      min_img: "",
      images: [],
      link: req.body.link,
      interFace: {
        ar: req.body.interFace.ar,
        en: req.body.interFace.en
      }
    },
    mobil_App: {
      min_img: "",
      images: [],
      discrpion: {
        ar: req.body.mobil_App.discrpion.ar,
        en: req.body.mobil_App.discrpion.en
      },
      links: {
        apple_Store: req.body.mobil_App.links.apple_Store,
        google_store: req.body.mobil_App.links.google_store
      }
    }
  };


  if (req.files.logo) {
    newProject.logo = await addImages({
      path: req.files.logo,
      type: "files",
      folder: `projects/${req.body.name.en}/logo`
    });
  }
  if (req.files.web_images) {
    newProject.web.images = await addImages({
      folder: `/projects/${req.body.name.en}/website/swiper`,
      path: req.files.web_images,
      type: "files"
    });
  }
  if (req.files.web_min_img) {
    newProject.web.min_img = await addImages({
      folder: `/projects/${req.body.name.en}/website/min`,
      path: req.files.web_min_img,
      type: "files"
    });
  }
  if (req.files.mobile_min) {
    newProject.mobil_App.min_img = await addImages({
      folder: `/projects/${req.body.name.en}/mobil_App/min`,
      path: req.files.mobile_min,
      type: "files"
    });
  }
  if (req.files.mobile_iamges) {
    newProject.mobil_App.images = await addImages({
      folder: `/projects/${req.body.name.en}/mobil_App/images`,
      path: req.files.mobile_iamges,
      type: "files"
    });
  }

  await Project.insertMany(newProject)
  res.status(201).send({message: "Success add project ", newProject});
});
