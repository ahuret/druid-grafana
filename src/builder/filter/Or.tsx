import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Multiple } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';
import { Filter } from './';

export const Or = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Or);
  return (
    <>
      <InlineFieldRow>
        <Multiple
          {...scopedProps('fields')}
          label="Filters"
          description="The filters"
          component={Filter}
          componentExtraProps={{}}
        />
      </InlineFieldRow>
    </>
  );
};
Or.type = 'or';
Or.fields = ['fields'];
