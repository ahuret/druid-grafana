import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const DoubleMax = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, DoubleMax);
  return (
    <InlineFieldRow>
      <Input {...scopedProps('name')} label="Name" description="Output name for the summed value" type="text" />
      <Input
        {...scopedProps('fieldName')}
        label="Field name"
        description="Name of the metric column to sum over"
        type="text"
      />
      <Input {...scopedProps('expression')} label="Expression" description="The expression" type="text" />
    </InlineFieldRow>
  );
};
DoubleMax.type = 'doubleMax';
DoubleMax.fields = ['name', 'fieldName', 'expression'];
