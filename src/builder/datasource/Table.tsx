import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const Table = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Table);
  return (
    <InlineFieldRow>
      <Input {...scopedProps('name')} label="Name" description="The table name" type="text" />
    </InlineFieldRow>
  );
};
Table.type = 'table';
Table.fields = ['name'];
