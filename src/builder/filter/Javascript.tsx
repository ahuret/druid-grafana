import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input, Code } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';
import { ExtractionFn } from '../extractionfn';
import { FilterTuning } from '.';

export const Javascript = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Javascript);
  return (
    <>
      <InlineFieldRow>
        <Input {...scopedProps('dimension')} label="Dimension" description="The dimension name" type="text" />
      </InlineFieldRow>
      <InlineFieldRow>
        <Code
          {...scopedProps('function')}
          label="Function"
          description="The javascript function. e.g: function(x) { return(x >= 'bar' && x <= 'foo') }"
          lang="javascript"
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
Javascript.type = 'javascript';
Javascript.fields = ['dimension', 'function', 'extractionFn', 'filterTuning'];
