import { RouteError } from '@src/common/util/route-errors';
import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';

import CaptureRepo from '@src/repos/CaptureRepo';
import { ICapture } from '@src/models/Capture';
/******************************************************************************
 * Constants
 ******************************************************************************/

export const CAPTURE_NON_TROUVEE = 'Capture non trouvée';

/******************************************************************************
 * Fonctions
 ******************************************************************************/

/**
 * Extraire toutes les captures.
 */
async function getAll(): Promise<ICapture[]> {
  return CaptureRepo.getAll();
}

/**
 * Extraire une capture par son ID.
 */
async function getOne(id: string): Promise<ICapture | null> {
  return await CaptureRepo.getOne(id);
}

/**
 * Extraire les captures avant ou à une date donnée.
 */
async function getAvant(date: Date): Promise<ICapture[] | null> {
  return await CaptureRepo.getAvant(date);
}

/**
 * Extraire les captures après une date donnée.
 */
async function getApres(date: Date): Promise<ICapture[] | null> {
  return await CaptureRepo.getApres(date);
}

/**
 * Extraire les captures selon l'espèce.
 */
async function getEspece(espece: string): Promise<ICapture[] | null> {
  return await CaptureRepo.getEspece(espece);
}

/**
 * Ajouter une capture.
 */
async function addOne(capture: ICapture): Promise<void> {
  return await CaptureRepo.AjouterCapture(capture);
}

/**
 * Met à jour une capture.
 */
async function updateOne(capture: ICapture): Promise<void> {
  const persists = await CaptureRepo.getOne(capture.id!);
  if (!persists) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, CAPTURE_NON_TROUVEE);
  }
  return CaptureRepo.modifierCapture(capture);
}

/**
 * Supprimer une capture par son id.
 */
async function delete_(id: string): Promise<void> {
  const persists = await CaptureRepo.getOne(id);
  if (!persists) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, CAPTURE_NON_TROUVEE);
  }
  return CaptureRepo.delete_(id);
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
  addOne,
  updateOne,
  delete: delete_,
} as const;
