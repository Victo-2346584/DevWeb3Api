import mongoose, { Schema, model } from 'mongoose';

export interface ICapture {
  id?: string;
  espece: string;
  tailleCm: number;
  poidsKg: number;
  dateCapture: Date;
  remisALeau: boolean;
  technique: string;
  lieu: string;
  conditionsMeteo?: string;
  temperatureEau?: number;
  notes?: string[];
}

const CaptureSchema = new Schema<ICapture>({
  espece: {
    type: String,
    required: [true, 'L\'espèce est obligatoire.'],
    minlength: [2, 'L\'espèce doit contenir au moins 2 caractères.'],
    maxlength: [50, 'L\'espèce ne doit pas dépasser 50 caractères.'],
  },
  tailleCm: {
    type: Number,
    required: [true, 'La taille est obligatoire.'],
    min: [0, 'La taille doit être supérieure ou égale à 0.'],
    max: [300, 'La taille est trop élevée pour un poisson.'],
  },
  poidsKg: {
    type: Number,
    required: [true, 'Le poids est obligatoire.'],
    min: [0, 'Le poids doit être supérieur ou égal à 0.'],
    max: [200, 'Le poids est trop élevé pour un poisson.'],
  },
  dateCapture: {
    type: Date,
    required: [true, 'La date de capture est obligatoire.'],
  },
  remisALeau: {
    type: Boolean,
    required: [true, 'Le champs de remis a l`eau est obligatoire.'],
    default: false,
  },
  technique: {
    type: String,
    required: [true, 'La technique est obligatoire.'],
    minlength: [2, 'La technique doit contenir au moins 2 caractères.'],
    maxlength: [50, 'La technique ne doit pas dépasser 50 caractères.'],
  },
  lieu: {
    type: String,
    required: [true, 'Le lieu est obligatoire.'],
    minlength: [2, 'Le lieu doit contenir au moins 2 caractères.'],
  },
  conditionsMeteo: {
    type: String,
    default: '',
  },
  temperatureEau: {
    type: Number,
    min: [0, 'Température trop basse pour être réaliste.'],
    max: [30, 'Température trop élevée pour être réaliste.'],
  },
  notes: {
    type: [String],
    default: [],
  },
});

mongoose.pluralize(null);

export const Capture = model<ICapture>('captures', CaptureSchema);
