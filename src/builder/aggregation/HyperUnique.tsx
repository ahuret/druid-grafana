import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input, Checkbox } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const HyperUnique = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, HyperUnique);
  return (
    <InlineFieldRow>
      <Input {...scopedProps('name')} label="Name" description="Output name for the summed lue" type="text" />
      <Input
        {...scopedProps('fieldName')}
        label="Field name"
        description="Name of the metric column to sum over"
        type="text"
      />
      <Checkbox
        {...scopedProps('round')}
        label="Round"
        description="Set to true to round off estimated lues to whole numbers"
      />
    </InlineFieldRow>
  );
};
HyperUnique.type = 'hyperUnique';
HyperUnique.fields = ['name', 'fieldName', 'round'];
