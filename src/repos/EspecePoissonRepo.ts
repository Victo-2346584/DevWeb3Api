import { EspecePoisson, IEspecePoisson } from '@src/models/IEspecePoisson';

/**
 * Obtenir toutes les especes
 */
async function getAll(): Promise<IEspecePoisson[]> {
  const especes = await EspecePoisson.find({});
  return especes;
}

export default {
  getAll,
} as const;
