import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const StringAny = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, StringAny);
  return (
    <InlineFieldRow>
      <Input {...scopedProps('name')} label="Name" description="Output name for the summed value" type="text" />
      <Input
        {...scopedProps('fieldName')}
        label="Field name"
        description="Name of the metric column to sum over"
        type="text"
      />
      <Input {...scopedProps('maxStringBytes')} label="Max string bytes" description="Max string bytes" type="number" />
    </InlineFieldRow>
  );
};
StringAny.type = 'stringAny';
StringAny.fields = ['name', 'fieldName', 'maxStringBytes'];
