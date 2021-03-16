import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input, Multiple } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const Union = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Union);
  return (
    <InlineFieldRow>
      <Multiple
        {...scopedProps('dataSources')}
        label="Datasources"
        description="Datasources to union"
        component={Input}
        componentExtraProps={{
          label: 'Datasource',
          description: 'The datasource name',
          type: 'text',
        }}
      />
    </InlineFieldRow>
  );
};
Union.type = 'union';
Union.fields = ['dataSources'];
