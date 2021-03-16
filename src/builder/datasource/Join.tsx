import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input, Select } from '../abstract';
import { DataSource } from '.';
import { InlineFieldRow } from '@grafana/ui';

export const Join = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Join);
  return (
    <>
      <InlineFieldRow>
        <DataSource {...scopedProps('left')} />
      </InlineFieldRow>
      <InlineFieldRow>
        <DataSource {...scopedProps('right')} />
      </InlineFieldRow>
      <InlineFieldRow>
        <Input
          {...scopedProps('rightPrefix')}
          label="Right prefix"
          description="The right datasource prefix"
          type="text"
        />
      </InlineFieldRow>
      <InlineFieldRow>
        <Input
          {...scopedProps('condition')}
          label="Condition"
          description="The join condition expression"
          type="text"
        />
      </InlineFieldRow>
      <InlineFieldRow>
        <Select
          {...scopedProps('joinType')}
          label="Join type"
          description="The join type"
          entries={{ INNER: 'Inner', LEFT: 'Left' }}
        />
      </InlineFieldRow>
    </>
  );
};
Join.type = 'join';
Join.fields = ['left', 'right', 'rightPrefix', 'condition', 'joinType'];
