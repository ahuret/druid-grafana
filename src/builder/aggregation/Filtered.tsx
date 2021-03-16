import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { Aggregation } from './';
import { Filter } from '../filter';
import { InlineFieldRow } from '@grafana/ui';

export const Filtered = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Filtered);
  return (
    <InlineFieldRow>
      <Input {...scopedProps('name')} label="Name" description="Output name for the summed value" type="text" />
      <Filter {...scopedProps('filter')} />
      <Aggregation {...scopedProps('aggregator')} />
    </InlineFieldRow>
  );
};
Filtered.type = 'filtered';
Filtered.fields = ['name', 'filter', 'aggregator'];
