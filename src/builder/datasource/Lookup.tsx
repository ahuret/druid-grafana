import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const Lookup = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Lookup);
  return (
    <InlineFieldRow>
      <Input {...scopedProps('lookup')} label="Lookup" description="The lookup table name" type="text" />
    </InlineFieldRow>
  );
};
Lookup.type = 'lookup';
Lookup.fields = ['lookup'];
