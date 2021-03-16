import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input, Checkbox, Select } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';
import { ExtractionFn } from '../extractionfn';
import { FilterTuning } from '.';
import { SearchQuerySpec } from '../searchqueryspec';

export const Search = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Search);
  return (
    <>
      <InlineFieldRow>
        <Input {...scopedProps('dimension')} label="Dimension" description="the dimension name" type="text" />
      </InlineFieldRow>
      <InlineFieldRow>
        <SearchQuerySpec {...scopedProps('query')} />
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
Search.type = 'search';
Search.fields = ['dimension', 'query', 'extractionFn', 'filterTuning'];
