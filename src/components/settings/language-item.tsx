import type { Language } from '@/core/i18n/resources';
import type { Option } from '@/ui';

import { useSelectedLanguage } from '@/core';
import { translate } from '@/core';
import { Options, useModal } from '@/ui';
import * as React from 'react';

import { Item } from './item';

export const LanguageItem = () => {
  const { language, setLanguage } = useSelectedLanguage();
  const modal = useModal();
  const onSelect = React.useCallback(
    (option: Option) => {
      setLanguage(option.value as Language);
      modal.dismiss();
    },
    [setLanguage, modal],
  );

  const langs = React.useMemo(
    () => [
      { label: translate('settings.english'), value: 'en' },
      { label: translate('settings.arabic'), value: 'ar' },
    ],
    [],
  );

  const selectedLanguage = React.useMemo(
    () => langs.find(lang => lang.value === language),
    [language, langs],
  );

  return (
    <>
      <Item onPress={modal.present} text="settings.language" value={selectedLanguage?.label} />
      <Options
        onSelect={onSelect}
        options={langs}
        ref={modal.ref}
        value={selectedLanguage?.value}
      />
    </>
  );
};
