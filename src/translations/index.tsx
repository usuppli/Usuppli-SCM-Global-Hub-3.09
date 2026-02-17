
import { Translation, Language } from '../types';
import { en } from './en';
import { zhHans } from './zh-Hans';
import { zhHant } from './zh-Hant';

export const translations: Record<Language, Translation> = {
  en,
  'zh-Hans': zhHans,
  'zh-Hant': zhHant,
};