import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps } from '../abstract';
import { Query as QuerySelector } from '../query';
import { InlineFieldRow } from '@grafana/ui';

export const Query = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Query);
  return (
    <InlineFieldRow>
      <QuerySelector {...scopedProps('query')} />
    </InlineFieldRow>
  );
};
Query.type = 'query';
Query.fields = ['query'];
