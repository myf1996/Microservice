import { Request, Response, NextFunction } from 'express';

interface validateRequestDto {
  schema: any;
}

export const validateRequest = (options: validateRequestDto) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await options.schema.validateAsync({
      ...req.query,
      ...req.body,
      ...req.params,
    });
    next();
  } catch (error: any) {
    const errors: { message: any; field: any; type: any; }[] = [];
    if (error.isJoi) {
      error.details.forEach((errorData: any) => {
        const errorObject = {
          message: errorData.message,
          field: errorData.path.join('_'),
          type: errorData.type,
        };
        errors.push(errorObject);
      });
      res.status(400).json({
        success: false,
        error: errors,
        message: '',
      });
    }
  }
};

export default validateRequest;