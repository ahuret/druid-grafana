import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input, Multiple } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';
import { OrderByColumnSpecs } from '.';

export const Default = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Default);
  return (
    <>
      <InlineFieldRow>
        <Input
          {...scopedProps('limit')}
          label="Limit"
          description="The amount of rows to keep from the set of results"
          type="number"
        />
      </InlineFieldRow>
      <InlineFieldRow>
        <Multiple
          {...scopedProps('columns')}
          label="Order by columns"
          description="The specifications used to indicate how to do order by operations."
          component={OrderByColumnSpecs}
          componentExtraProps={{}}
        />
      </InlineFieldRow>
    </>
  );
};
Default.type = 'default';
Default.fields = ['limit', 'columns'];
