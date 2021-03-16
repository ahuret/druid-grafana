import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input, Checkbox, Select } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';
import { ExtractionFn } from '../extractionfn';
import { FilterTuning } from '.';

export const Bound = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Bound);
  return (
    <>
      <InlineFieldRow>
        <Input {...scopedProps('dimension')} label="Dimension" description="The dimension to filter on" type="text" />
      </InlineFieldRow>
      <InlineFieldRow>
        <Input {...scopedProps('lower')} label="Lower" description="The lower bound for the filter" type="text" />
      </InlineFieldRow>
      <InlineFieldRow>
        <Input {...scopedProps('upper')} label="Upper" description="The upper bound for the filter" type="text" />
      </InlineFieldRow>
      <InlineFieldRow>
        <Checkbox
          {...scopedProps('name')}
          label="Lower strict"
          description="Perform strict comparison on the lower bound ('>' instead of '>=')"
        />
      </InlineFieldRow>
      <InlineFieldRow>
        <Checkbox
          {...scopedProps('name')}
          label="Upper strict"
          description="Perform strict comparison on the upper bound ('<' instead of '<=')"
        />
      </InlineFieldRow>
      <InlineFieldRow>
        <Select
          {...scopedProps('ordering')}
          label="Ordering"
          description="Specifies the sorting order to use when comparing values against the bound."
          entries={{
            lexicographic: 'Lexicographic',
            alphanumeric: 'Alphanumeric',
            strlen: 'String len',
            numeric: 'Numeric',
            version: 'Version',
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
Bound.type = 'bound';
Bound.fields = ['dimension', 'lower', 'upper', 'lowerStrict', 'upperStrict', 'ordering', 'extractionFn', 'filterTuning'];
