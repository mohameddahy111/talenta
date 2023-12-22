import { AppError } from "../utils/AppError.js";

export function validetor(schema){
    return (req, res, next) => {
        let data = { ...req.params, ...req.body, ...req.query }
        let { error } = schema.validate(data, { abortEarly: false })
        if (!error) {
            next()
        } else {
            next(new AppError(`${error.message}`, 400));

        }
        
}
}