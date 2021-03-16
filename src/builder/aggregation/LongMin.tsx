import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const LongMin = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, LongMin);
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
LongMin.type = 'longMin';
LongMin.fields = ['name', 'fieldName', 'expression'];
