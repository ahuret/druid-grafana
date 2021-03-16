import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const Identity = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Identity);
  const options,
    onOptionsChange = scopedProps(undefined);
  onOptionsChange(options);
  return <InlineFieldRow>Identity. Whatever it does.</InlineFieldRow>;
};
Identity.type = 'identity';
Identity.fields = [];
