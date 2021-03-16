import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const FloatLast = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, FloatLast);
  return (
    <InlineFieldRow>
      <Input {...scopedProps('name')} label="Name" description="Output name for the summed value" type="text" />
      <Input
        {...scopedProps('name')}
        label="Field name"
        description="Name of the metric column to sum over"
        type="text"
      />
    </InlineFieldRow>
  );
};
FloatLast.type = 'floatLast';
FloatLast.fields = ['name', 'fieldName'];
