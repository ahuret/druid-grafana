import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';
import { ExtractionFn } from '../extractionfn';
import { FilterTuning } from '.';

export const Regex = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Regex);
  return (
    <>
      <InlineFieldRow>
        <Input {...scopedProps('dimension')} label="Dimension" description="The dimension name" type="text" />
      </InlineFieldRow>
      <InlineFieldRow>
        <Input {...scopedProps('pattern')} label="Pattern" description="the regex pattern" type="text" />
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
Regex.type = 'regex';
Regex.fields = ['dimension', 'pattern', 'extractionFn', 'filterTuning'];
