import mongoose, { Schema, model } from 'mongoose';

export interface IPoissonChoix {
  element_id: number;
  Nom_francais: string;
  Nom_anglais: string;
  Nom_scientifique: string;
  Origine: string;
}
const PoissonChoixSchema = new Schema<IPoissonChoix>({
  name: { type: String, required: [true, 'nom requis'] },
  first_release_date: {
    type: Date,
    required: [true, 'Date requis'],
    max: [new Date(2025, 12, 31), 'Date avant 2025'],
  },
  genres: [GenreSchema],
  aggregated_rating_count: {
    type: Number,
    min: [0, 'Le rating doit être un nombre positif'],
  },
  platforms: { type: [String] },
  summary: { type: String },
  themes: { type: [String] },
});

mongoose.pluralize(null);

export const Jeu = model<IJeu>('jeux', JeuSchema);
