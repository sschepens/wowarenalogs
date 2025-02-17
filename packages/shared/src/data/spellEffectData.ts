import _ from 'lodash';

import rawMinedData from './spellEffects.json';

/*
 Interface and export for data mined from the WOW spells db itself
*/

export interface IMinedSpell {
  spellId: string;
  name: string;
  cooldownSeconds?: number;
  charges?: {
    charges?: number;
    chargeCooldownSeconds?: number;
  };
  durationSeconds?: number;
}

export const spellEffectData: Record<string, IMinedSpell> = rawMinedData;

// DEV - Validate mined data
if (process.env.NODE_ENV === 'development') {
  _.keys(rawMinedData).forEach((k) => {
    if (k !== spellEffectData[k].spellId) {
      console.error(`Missing Spell Id: ${k}`);
    }
    if (!spellEffectData[k].cooldownSeconds) {
      if (!spellEffectData[k].charges?.chargeCooldownSeconds) {
        console.error(`Missing Cooldown Info: ${k}`);
      }
    }
  });
}
