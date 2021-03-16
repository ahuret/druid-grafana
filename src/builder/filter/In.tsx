import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input, Multiple } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';
import { ExtractionFn } from '../extractionfn';
import { FilterTuning } from '.';

export const In = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, In);
  return (
    <>
      <InlineFieldRow>
        <Input {...scopedProps('dimension')} label="Dimension" description="The dimension name" type="text" />
      </InlineFieldRow>
      <InlineFieldRow>
        <Multiple
          {...scopedProps('values')}
          label="Values"
          description="The values"
          component={Input}
          componentExtraProps={{
            label: 'Value',
            description: 'A value',
            type: 'text',
          }}
        />
      </InlineFieldRow>
      <InlineFieldRow>
        <ExtractionFn {...scopedProps('extractionFn')} />
      </InlineFieldRow>
      <InlineFieldRow>
        <FilterTuning {...scopedProps('filterTuning')} />
      </InlineFieldRow>
    </>
  );
};
In.type = 'in';
In.fields = ['dimension', 'values', 'extractionFn', 'filterTuning'];
