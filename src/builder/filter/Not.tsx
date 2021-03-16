import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';
import { Filter } from './';

export const Not = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Not);
  return (
    <InlineFieldRow>
      <Filter {...scopedProps('field')} />
    </InlineFieldRow>
  );
};
Not.type = 'not';
Not.fields = ['field'];
