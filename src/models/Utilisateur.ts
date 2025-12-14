import mongoose, { Schema, model } from 'mongoose';

export interface IUtilisateur {
  id?: string;
  courriel: string;
  motPasse: string;
}

const UtilisateurSchema = new Schema<IUtilisateur>({
  courriel: {
    type: String,
    required: [true, 'Le courriel est obligatoire.'],
    match: [
      //Regex copié de https://regexr.com/3e48o(2025)
      /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
      'Le format du courriel est invalide.',
    ],
  },
  motPasse: {
    type: String,
    required: [true, 'Le mot de passe est obligatoire.'],
    minlength: [8, 'Le mot de passe doit contenir au moins 8 caractères.'],
  },
});

mongoose.pluralize(null);

export const Utilisateur = model<IUtilisateur>(
  'utilisateurs',
  UtilisateurSchema,
);
