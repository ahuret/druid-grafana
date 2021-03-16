import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const LessThan = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, LessThan);
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
LessThan.type = 'lessThan';
LessThan.fields = ['aggregation', 'value'];
