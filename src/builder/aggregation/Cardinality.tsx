import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input, Checkbox, Multiple } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const Cardinality = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Cardinality);
  return (
    <>
      <InlineFieldRow>
        <Input {...scopedProps('name')} label="Name" description="Output name for the summed value" type="text" />
      </InlineFieldRow>
      <InlineFieldRow>
        <Multiple
          {...scopedProps('fields')}
          label="Dimensions"
          description="The dimensions names"
          component={Input}
          componentExtraProps={{
            label: 'Dimension',
            description: 'A dimension name',
            type: 'text',
          }}
        />
      </InlineFieldRow>
      <InlineFieldRow>
        <Checkbox
          {...scopedProps('byRow')}
          label="By row"
          description="Set to true to computes the cardinality by row, i.e. the cardinality of distinct dimension combinations"
        />
        <Checkbox
          {...scopedProps('round')}
          label="Round"
          description="Set to true to round off estimated values to whole numbers"
        />
      </InlineFieldRow>
    </>
  );
};
Cardinality.type = 'cardinality';
Cardinality.fields = ['name', 'fields', 'byRow', 'round'];
