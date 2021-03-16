import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const DoubleMean = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, DoubleMean);
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
DoubleMean.type = 'doubleMean';
DoubleMean.fields = ['name', 'fieldName'];
