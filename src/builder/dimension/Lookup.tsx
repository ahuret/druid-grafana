import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input, Checkbox } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';
import { Lookup as LookupExtractor } from '../lookup';

export const Lookup = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Lookup);
  return (
    <>
      <InlineFieldRow>
        <Input {...scopedProps('dimension')} label="Dimension" description="The dimension name" type="text" />
      </InlineFieldRow>
      <InlineFieldRow>
        <Input
          {...scopedProps('outputName')}
          label="Output name"
          description="The, optionnal, dimension output name"
          type="text"
        />
      </InlineFieldRow>
      <InlineFieldRow>
        <Input
          {...scopedProps('name')}
          label="Name"
          description="The registered lookup name (exclusive, this or lookup field below)"
          type="text"
        />
      </InlineFieldRow>
      <InlineFieldRow>
        <LookupExtractor {...scopedProps('lookup')} />
      </InlineFieldRow>
      <InlineFieldRow>
        <Checkbox
          {...scopedProps('retainMissingValue')}
          label="Retain missing value"
          description="Specifies if the missing value should be retained"
        />
      </InlineFieldRow>
      <InlineFieldRow>
        <Input
          {...scopedProps('replaceMissingValueWith')}
          label="Replace missing value with"
          description="The missing value replacement text"
          type="text"
        />
      </InlineFieldRow>
      <InlineFieldRow>
        <Checkbox
          {...scopedProps('injective')}
          label="Injective?"
          description="Specifies if the lookup is injective or not"
        />
      </InlineFieldRow>
      <InlineFieldRow>
        <Checkbox
          {...scopedProps('optimize')}
          label="Optimize?"
          description="Specifies if the lookup should be optimized"
        />
      </InlineFieldRow>
    </>
  );
};
Lookup.type = 'lookup';
Lookup.fields = [
  'dimension',
  'outputName',
  'name',
  'lookup',
  'retainMissingValue',
  'replaceMissingValueWith',
  'injective',
  'optimize',
];
