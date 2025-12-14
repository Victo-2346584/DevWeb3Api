import { RouteError } from '@src/common/util/route-errors';
import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';

import { IUtilisateur } from '@src/models/Utilisateur';
import UtilissateurRepo from '@src/repos/UtilisateurRepo';

export const UTILISATEUR_NON_TROUVE = 'Utilisateur non trouvé';
/**
 * Obtenir l'utilisateur associé a son courriel et mot de passe
 */
async function getUtilisateur(
  courriel: string,
  motPasse: string,
): Promise<IUtilisateur | null> {
  const persists = await UtilissateurRepo.getUtilisateur(courriel, motPasse);
  if (!persists) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, UTILISATEUR_NON_TROUVE);
  }
  return persists;
}

export default {
  getUtilisateur,
} as const;
