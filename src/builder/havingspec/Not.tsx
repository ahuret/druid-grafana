import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';
import { HavingSpec } from './';

export const Not = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Not);
  return (
    <InlineFieldRow>
      <HavingSpec {...scopedProps('havingSpec')} />
    </InlineFieldRow>
  );
};
Not.type = 'not';
Not.fields = ['havingSpec'];
