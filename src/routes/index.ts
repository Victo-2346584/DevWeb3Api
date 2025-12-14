/* eslint-disable */
import { Request, Response, NextFunction, Router } from 'express';

import Paths from '@src/common/constants/Paths';
import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';

import CaptureRoutes from './CaptureRoutes';
import EspecePoissonRoutes from './EspecePoissonRoutes';
import { ICapture } from '@src/models/Capture';
import JetonRoutes from './JetonRoutes';

function validateCapture(req: Request, res: Response, next: NextFunction) {
  const captureData = req.body.capture as ICapture;

  if (!captureData) {
    return res.status(HttpStatusCodes.BAD_REQUEST).json({
      erreur: 'Capture requise dans le corps de la requête (req.body.capture)',
    });
  }
  try {
    const nouvelleCapture = captureData;
    next();
  } catch (erreur) {
    return res
      .status(HttpStatusCodes.BAD_REQUEST)
      .json({ erreur: 'Données de capture invalides' });
  }
}

const apiRouter = Router();
const tokenRouter = Router();
tokenRouter.post(Paths.token.Get, JetonRoutes.generateToken);
apiRouter.use(Paths.token.Base, tokenRouter);
const captureRouter = Router();

captureRouter.get(Paths.Capture.Get, CaptureRoutes.getAll);
captureRouter.get(Paths.Capture.GetOne, CaptureRoutes.getOne);
captureRouter.post(Paths.Capture.Add, validateCapture, CaptureRoutes.add);
captureRouter.put(Paths.Capture.Update, CaptureRoutes.update);
captureRouter.delete(Paths.Capture.Delete, CaptureRoutes.delete);
captureRouter.get(Paths.Capture.GetAvant, CaptureRoutes.getAvant);
captureRouter.get(Paths.Capture.GetApres, CaptureRoutes.getApres);
captureRouter.get(Paths.Capture.GetEspece, CaptureRoutes.getEspece);
apiRouter.use(Paths.Capture.Base, captureRouter);

const especePoissonRouter = Router();

especePoissonRouter.get(Paths.EspecePoisson.Get, EspecePoissonRoutes.getAll);
apiRouter.use(Paths.EspecePoisson.Base, especePoissonRouter);

/******************************************************************************
 * Export default
 ******************************************************************************/

export default apiRouter;
