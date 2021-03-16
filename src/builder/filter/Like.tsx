import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';
import { ExtractionFn } from '../extractionfn';
import { FilterTuning } from '.';

export const Like = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Like);
  return (
    <>
      <InlineFieldRow>
        <Input {...scopedProps('dimension')} label="Dimension" description="The dimension to filter on." type="text" />
      </InlineFieldRow>
      <InlineFieldRow>
        <Input
          {...scopedProps('pattern')}
          label="Pattern"
          description="LIKE pattern, such as 'foo%' or '___bar'."
          type="text"
        />
      </InlineFieldRow>
      <InlineFieldRow>
        <Input
          {...scopedProps('escape')}
          label="Escape"
          description="An escape character that can be used to escape special characters."
          type="text"
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
Like.type = 'like';
Like.fields = ['dimension', 'pattern', 'escape', 'extractionFn', 'filterTuning'];
