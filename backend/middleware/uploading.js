import multer from 'multer';


export const uploading = () => {
    const storage =  multer.diskStorage({})
    const multerUpload = multer({storage})
    return multerUpload
  
 }