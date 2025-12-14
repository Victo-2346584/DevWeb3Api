import { Capture, ICapture } from '../models/Capture';

/**
 * Obtenir une capture par ID
 */
async function getOne(id: string): Promise<ICapture | null> {
  const capture = await Capture.findById(id);
  return capture;
}

/**
 * Obtenir toutes les captures
 */
async function getAll(): Promise<ICapture[]> {
  const captures = await Capture.find({});
  return captures;
}

/**
 * Obtenir les captures avant ou a la date donnée
 */
async function getAvant(date: Date): Promise<ICapture[] | null> {
  const captures = await Capture.find({
    dateCapture: { $lte: date },
  }).sort({ dateCapture: -1 });

  return captures;
}
/**
 * Obtenir les captures après une date donnée
 */
async function getApres(date: Date): Promise<ICapture[] | null> {
  const captures = await Capture.find({
    dateCapture: { $gte: date },
  }).sort({ dateCapture: -1 });

  return captures;
}

/**
 * Obtenir les captures selon l'espèce
 */
async function getEspece(espece: string): Promise<ICapture[] | null> {
  const captures = await Capture.find({
    espece: espece,
  });

  return captures;
}

/**
 * Ajouter une capture
 */
async function AjouterCapture(capture: ICapture) {
  if (!capture) return;
  const nouveauCapture = new Capture(capture);
  await nouveauCapture.save();
}
/**
 *
 * @param capture la capture a modifier
 */
async function modifierCapture(capture: ICapture): Promise<void> {
  const captureAModifier = await Capture.findOne({ id: capture.id });
  if (captureAModifier === null) {
    throw new Error('Capture non trouvée');
  }

  captureAModifier.espece = capture.espece;
  captureAModifier.tailleCm = capture.tailleCm;
  captureAModifier.poidsKg = capture.poidsKg;
  captureAModifier.dateCapture = capture.dateCapture;
  captureAModifier.remisALeau = capture.remisALeau;
  captureAModifier.technique = capture.technique;
  captureAModifier.lieu = capture.lieu;
  captureAModifier.conditionsMeteo = capture.conditionsMeteo;
  captureAModifier.temperatureEau = capture.temperatureEau;
  captureAModifier.notes = capture.notes;

  await captureAModifier.save();
}
async function delete_(id: string): Promise<void> {
  await Capture.deleteOne({ _id: id });
}
export default {
  getOne,
  getAll,
  getAvant,
  getApres,
  getEspece,
  AjouterCapture,
  modifierCapture,
  delete_,
} as const;
