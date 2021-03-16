import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input, Multiple } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const Histogram = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Histogram);
  return (
    <InlineFieldRow>
      <Input {...scopedProps('name')} label="Name" description="Output name for the summed value" type="text" />
      <Input
        {...scopedProps('fieldName')}
        label="Field name"
        description="Name of the metric column to sum over"
        type="text"
      />
      <Multiple
        {...scopedProps('breaks')}
        label="Breaks"
        description="The histogram breaks"
        component={Input}
        componentExtraProps={{
          label: 'Break',
          description: 'An histogram break',
          type: 'number',
        }}
      />
    </InlineFieldRow>
  );
};
Histogram.type = 'histogram';
Histogram.fields = ['name', 'fieldName', 'breaks'];
