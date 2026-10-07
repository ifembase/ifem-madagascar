// Registre central des images de l'IFEM.
// Chaque fichier du dossier src/images est importé ici une seule fois,
// puis réutilisé dans les composants via `import { IMAGES } from '../images'`.

// Logos
import logoTransparent from './logotrensparent.png'; // PNG transparent : à utiliser sur fond clair
import logoFond from './ifemavecback.png'; // PNG avec fond blanc : à utiliser sur fond sombre (dans une pastille blanche)

// L'IFEM : siège, bureaux, établissement
import siege from './siege.jpeg';
import siege2 from './siege2.jpeg';
import etab4 from './etab4.jpeg';
import bureauLiaison1 from './bureau-liaison1.jpg';
import bureauLiaison2 from './bureau-liaison2.jpg';

// Formations & professionnels
import formation from './formation.jpeg';
import info from './info.jpeg';
import support from './support.jpeg';

// Regroupements
import regroupement from './regroupement.jpeg';
import regroupement2 from './regroupement2.jpeg';

// Soutenances
import souten from './souten.jpeg';
import soutenance from './soutenance.jpeg';
import soutenn from './soutenn.jpeg';

// Diplômes & promotions
import remiseDiplome from './remiseDiplome.jpeg';
import remiseDiplome1 from './remiseDiplome1.jpeg';
import promotion from './promotion.jpeg';
import promotion1 from './promotion1.jpeg';
import pdgetautre from './pdgetautre.jpeg';
import gateau from './gateau.jpeg';

// Équipements
import equipement1 from './equipement1.jpeg';
import equipement2 from './equipement2.jpeg';
import equipement3 from './equipement3.jpeg';
import equipement4 from './equipement4.jpeg';
import bibliotheque from './bibliotheque.jpeg';

export const LOGOS = {
  transparent: logoTransparent,
  withBackground: logoFond,
};

export const IMAGES = {
  siege,
  siege2,
  etab4,
  bureauLiaison1,
  bureauLiaison2,
  formation,
  info,
  support,
  regroupement,
  regroupement2,
  souten,
  soutenance,
  soutenn,
  remiseDiplome,
  remiseDiplome1,
  promotion,
  promotion1,
  pdgetautre,
  gateau,
  equipement1,
  equipement2,
  equipement3,
  equipement4,
  bibliotheque,
};
