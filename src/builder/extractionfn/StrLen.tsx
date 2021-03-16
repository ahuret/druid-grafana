import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const StrLen = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, StrLen);
  const options,
    onOptionsChange = scopedProps(undefined);
  onOptionsChange(options);

  return <InlineFieldRow>Returns the length of dimension values (as if they were encoded in UTF-16)</InlineFieldRow>;
};
StrLen.type = 'strlen';
StrLen.fields = [];
