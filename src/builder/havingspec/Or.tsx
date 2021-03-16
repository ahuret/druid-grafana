import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Multiple } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';
import { HavingSpec } from './';

export const Or = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Or);
  return (
    <InlineFieldRow>
      <Multiple
        {...scopedProps('havingSpecs')}
        label="Or"
        description="The having filters"
        component={HavingSpec}
        componentExtraProps={{}}
      />
    </InlineFieldRow>
  );
};
Or.type = 'or';
Or.fields = ['havingSpecs'];
