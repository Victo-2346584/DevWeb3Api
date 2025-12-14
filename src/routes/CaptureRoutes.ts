import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';
import CaptureService from '@src/services/CaptureService';
import { ICapture } from '@src/models/Capture';

import { IReq, IRes } from './common/types';

/**
 * Extraire toutes les captures
 */
async function getAll(_: IReq, res: IRes) {
  const captures = await CaptureService.getAll();
  res.status(HttpStatusCodes.OK).json({ captures });
}

/**
 * Extraire une capture par ID
 */
async function getOne(req: IReq, res: IRes) {
  const { id } = req.params;
  const capture = await CaptureService.getOne(id as string);
  res.status(HttpStatusCodes.OK).json({ capture });
}

/**
 * Extraire les captures avant ou à une date donnée
 */
async function getAvant(req: IReq, res: IRes) {
  const { date } = req.params;
  const captures = await CaptureService.getAvant(new Date(date as string));

  res.status(HttpStatusCodes.OK).json({ captures });
}

/**
 * Extraire les captures après une date donnée
 */
async function getApres(req: IReq, res: IRes) {
  const { date } = req.params;
  const captures = await CaptureService.getApres(new Date(date as string));
  res.status(HttpStatusCodes.OK).json({ captures });
}

/**
 * Extraire les captures selon l'espèce
 */
async function getEspece(req: IReq, res: IRes) {
  const { espece } = req.params;
  const captures = await CaptureService.getEspece(espece as string);
  res.status(HttpStatusCodes.OK).json({ captures });
}

/**
 * Ajouter une capture
 */
async function add(req: IReq, res: IRes) {
  const { capture } = req.body;
  await CaptureService.addOne(capture as ICapture);
  res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Mettre à jour une capture
 */
async function update(req: IReq, res: IRes) {
  const { capture } = req.body;
  await CaptureService.updateOne(capture as ICapture);
  res.status(HttpStatusCodes.OK).end();
}

/**
 * Supprimer une capture
 */
async function delete_(req: IReq, res: IRes) {
  const { id } = req.params;
  await CaptureService.delete(id as string);
  res.status(HttpStatusCodes.OK).end();
}

/******************************************************************************
 * Exportation
 ******************************************************************************/

export default {
  getAll,
  getOne,
  getAvant,
  getApres,
  getEspece,
  add,
  update,
  delete: delete_,
} as const;
