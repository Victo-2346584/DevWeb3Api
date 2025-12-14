import EspecePoissonRepo from '@src/repos/EspecePoissonRepo';
import { IEspecePoisson } from '@src/models/IEspecePoisson';

/**
 * Obtenir toutes les especes
 */
async function getAll(): Promise<IEspecePoisson[]> {
  const especes = await EspecePoissonRepo.getAll();
  return especes;
}

export default {
  getAll,
} as const;
