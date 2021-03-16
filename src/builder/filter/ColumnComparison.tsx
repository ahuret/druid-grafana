import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Multiple } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';
import { Dimension } from '../dimension';

export const ColumnComparison = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, ColumnComparison);
  return (
    <InlineFieldRow>
      <Multiple
        {...scopedProps('dimensions')}
        label="Dimensions"
        description="The dimensions"
        component={Dimension}
        componentExtraProps={{}}
      />
    </InlineFieldRow>
  );
};
ColumnComparison.type = 'columnComparison';
ColumnComparison.fields = ['dimensions'];
