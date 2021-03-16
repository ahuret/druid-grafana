import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const DoubleAny = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, DoubleAny);
  return (
    <InlineFieldRow>
      <Input {...scopedProps('name')} label="Name" description="Output name for the summed value" type="text" />
      <Input
        {...scopedProps('fieldName')}
        label="Field name"
        description="Name of the metric column to sum over"
        type="text"
      />
    </InlineFieldRow>
  );
};
DoubleAny.type = 'doubleAny';
DoubleAny.fields = ['name', 'fieldName'];
