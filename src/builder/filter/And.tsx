import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Multiple } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';
import { Filter } from './';

export const And = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, And);
  return (
    <InlineFieldRow>
      <Multiple
        {...scopedProps('fields')}
        label="Fields"
        description="The filter fields"
        component={Filter}
        componentExtraProps={{}}
      />
    </InlineFieldRow>
  );
};
And.type = 'and';
And.fields = ['fields'];
