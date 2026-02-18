import { en } from './en';
import { zhHans } from './zh-Hans';
import { zhHant } from './zh-Hant';

// 1. Named Export (Standard for v3.09)
export const translations = {
  en,
  'zh-Hans': zhHans,
  'zh-Hant': zhHant,
};

// 2. Default Export (Failsafe for v3.10 legacy code)
export default translations;