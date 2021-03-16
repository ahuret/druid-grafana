import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';
import { ExtractionFn } from '../extractionfn';
import { FilterTuning } from '.';

export const Selector = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Selector);
  return (
    <>
      <InlineFieldRow>
        <Input {...scopedProps('dimension')} label="Dimension" description="the dimension name" type="text" />
      </InlineFieldRow>
      <InlineFieldRow>
        <Input {...scopedProps('value')} label="Value" description="the dimension value" type="text" />
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
Selector.type = 'selector';
Selector.fields = ['dimension', 'value', 'extractionFn', 'filterTuning'];
