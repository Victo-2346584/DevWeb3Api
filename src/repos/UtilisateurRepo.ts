import { IUtilisateur, Utilisateur } from '../models/Utilisateur';

async function getUtilisateur(
  courriel: string,
  motPasse: string,
): Promise<IUtilisateur | null> {
  const utilisateur = await Utilisateur.findOne({
    courriel: courriel,
    motPasse: motPasse,
  });
  return utilisateur;
}

export default {
  getUtilisateur,
} as const;
