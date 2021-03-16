import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input, Select } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const OrderByColumnSpecs = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, OrderByColumnSpecs);
  return (
    <>
      <InlineFieldRow>
        <Input {...scopedProps('dimension')} label="Dimension" description="Any dimension or metric name" type="text" />
      </InlineFieldRow>
      <InlineFieldRow>
        <Select
          {...scopedProps('direction')}
          label="Direction"
          description="Specifies the sort direction"
          entries={{
            ascending: 'Ascending',
            descending: 'Descending',
          }}
        />
      </InlineFieldRow>
      <InlineFieldRow>
        <Select
          {...scopedProps('dimensionOrder')}
          label="Ordering"
          description="Specifies the sorting order to use"
          entries={{
            lexicographic: 'Lexicographic',
            alphanumeric: 'Alphanumeric',
            strlen: 'String len',
            numeric: 'Numeric',
            version: 'Version',
          }}
        />
      </InlineFieldRow>
    </>
  );
};
OrderByColumnSpecs.type = undefined;
OrderByColumnSpecs.fields = ['direction', 'dimensionOrder'];
