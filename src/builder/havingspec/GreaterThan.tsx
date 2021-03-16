import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const GreaterThan = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, GreaterThan);
  return (
    <>
      <InlineFieldRow>
        <Input {...scopedProps('aggregation')} label="Aggregation" description="The metric column" type="text" />
      </InlineFieldRow>
      <InlineFieldRow>
        <Input {...scopedProps('value')} label="Value" description="The numeric value" type="number" />
      </InlineFieldRow>
    </>
  );
};
GreaterThan.type = 'greaterThan';
GreaterThan.fields = ['aggregation', 'value'];
