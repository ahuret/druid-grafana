import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Multiple } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';
import { HavingSpec } from './';

export const And = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, And);
  return (
    <InlineFieldRow>
      <Multiple
        {...scopedProps('havingSpecs')}
        label="And"
        description="The having filters"
        component={HavingSpec}
        componentExtraProps={{}}
      />
    </InlineFieldRow>
  );
};
And.type = 'and';
And.fields = ['havingSpecs'];
