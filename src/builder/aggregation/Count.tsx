import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const Count = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Count);
  return (
    <InlineFieldRow>
      <Input {...scopedProps('name')} label="Name" description="Output name for the summed value" type="text" />
    </InlineFieldRow>
  );
};
Count.type = 'count';
Count.fields = ['name'];
