import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';
import { Filter as FilterField } from '../filter';

export const Filter = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Filter);
  return (
    <InlineFieldRow>
      <FilterField {...scopedProps('filter')} />
    </InlineFieldRow>
  );
};
Filter.type = 'filter';
Filter.fields = ['filter'];
