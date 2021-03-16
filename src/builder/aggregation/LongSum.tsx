import React from 'react';
import { QueryBuilderProps } from '../types';
import { InlineFieldRow } from '@grafana/ui';
import { useScopedQueryBuilderProps, Input } from '../abstract';

export const LongSum = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, LongSum);
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
LongSum.type = 'longSum';
LongSum.fields = ['name', 'fieldName', 'expression'];
