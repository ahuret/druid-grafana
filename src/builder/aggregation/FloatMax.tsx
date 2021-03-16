import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const FloatMax = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, FloatMax);
  return (
    <InlineFieldRow>
      <Input {...scopedProps('name')} label="Name" description="Output name for the summed lue" type="text" />
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
FloatMax.type = 'floatMax';
FloatMax.fields = ['name', 'fieldName', 'expression'];
