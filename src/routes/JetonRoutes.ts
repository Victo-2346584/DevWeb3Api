import { IUtilisateur } from '@src/models/Utilisateur';
import JetonService from '@src/services/JetonService';
import { IReq, IRes } from './common/types';

/**
 * Générer un jeton.
 *
 * @param {IReq} req - La requête au serveur
 * @param {IRes} res - La réponse du serveur
 */
async function generateToken(req: IReq, res: IRes) {
  const utilisateur = req.body.utilisateur;
  const token = await JetonService.generateToken(utilisateur as IUtilisateur);
  return res.send({ token: token });
}

// **** Export default **** //

export default {
  generateToken,
} as const;
