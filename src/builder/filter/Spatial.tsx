import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';
import { ExtractionFn } from '../extractionfn';
import { FilterTuning } from '.';
import { Spatial } from '../spatial';

export const Spatial = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Spatial);
  return (
    <>
      <InlineFieldRow>
        <Input {...scopedProps('dimension')} label="Dimension" description="The dimension name" type="text" />
      </InlineFieldRow>
      <InlineFieldRow>
        <Spatial {...scopedProps('spatial')} />
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
Spatial.type = 'spatial';
Spatial.fields = ['dimension', 'spatial', 'extractionFn', 'filterTuning'];
