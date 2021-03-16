import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const GlobalTable = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, GlobalTable);
  return (
    <InlineFieldRow>
      <Input {...scopedProps('name')} label="Name" description="The global table name" type="text" />
    </InlineFieldRow>
  );
};
GlobalTable.type = 'globalTable';
GlobalTable.fields = ['name'];
