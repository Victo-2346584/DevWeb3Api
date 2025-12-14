import mongoose, { Schema, model } from 'mongoose';

export interface IEspecePoisson {
  id: string;
  Nom_francais: string;
  Nom_anglais: string;
  Nom_scientifique: string;
}

const EspecePoissonSchema = new Schema<IEspecePoisson>({
  Nom_francais: {
    type: String,
    required: [true, 'Le nom français est obligatoire.'],
    minlength: [2, 'Le nom français doit contenir au moins 2 caractères.'],
  },
  Nom_anglais: {
    type: String,
    required: [true, 'Le nom anglais est obligatoire.'],
    minlength: [2, 'Le nom anglais doit contenir au moins 2 caractères.'],
  },
  Nom_scientifique: {
    type: String,
    required: [true, 'Le nom scientifique est obligatoire.'],
    minlength: [2, 'Le nom scientifique doit contenir au moins 2 caractères.'],
  },
});

mongoose.pluralize(null);

export const EspecePoisson = model<IEspecePoisson>(
  'poissons',
  EspecePoissonSchema,
);
