import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const DimSelector = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, DimSelector);
  return (
    <>
      <InlineFieldRow>
        <Input {...scopedProps('aggregation')} label="Aggregation" description="the metric column" type="text" />
      </InlineFieldRow>
      <InlineFieldRow>
        <Input {...scopedProps('value')} label="Value" description="the numeric value" type="number" />
      </InlineFieldRow>
    </>
  );
};
DimSelector.type = 'dimSelector';
DimSelector.fields = ['aggregation', 'value'];
