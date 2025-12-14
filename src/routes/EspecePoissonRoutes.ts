import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';
import EspecePoissonService from '@src/services/EspecePoissonService';

import { IReq, IRes } from './common/types';

/**
 * Extraire toutes les espèces de poisson
 */
async function getAll(_: IReq, res: IRes) {
  const especes = await EspecePoissonService.getAll();
  res.status(HttpStatusCodes.OK).json({ especes });
}

/******************************************************************************
 * Exportation
 ******************************************************************************/

export default {
  getAll,
} as const;
