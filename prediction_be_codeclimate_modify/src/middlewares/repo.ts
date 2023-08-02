import { myDataSource } from "../config/config";
import { Figlio } from "../entity/Figlio";
import { Genitore } from "../entity/Genitore";
import { Guasto } from "../entity/Guasto";
import { Operatore } from "../entity/Operatore"
import { Parola } from "../entity/Parola";
import { Segnalazione } from "../entity/Segnalazione";
import { SiteList } from "../entity/SiteList";
import { TentativoAccesso } from "../entity/TentativoAccesso";
import { TimeConsumingOp } from "../entity/TimeConsumingOp";

export const genitoreRepository = myDataSource.getRepository(Genitore);
export const operatoreRepository = myDataSource.getRepository(Operatore);
export const figlioRepository = myDataSource.getRepository(Figlio);
export const guastoRepository = myDataSource.getRepository(Guasto);
export const parolaRepository = myDataSource.getRepository(Parola);
export const segnalazioneRepository = myDataSource.getRepository(Segnalazione);
export const blacklistRepository = myDataSource.getRepository(SiteList);
export const tentativoAccessoRepository = myDataSource.getRepository(TentativoAccesso);
export const tcopRepository = myDataSource.getRepository(TimeConsumingOp);