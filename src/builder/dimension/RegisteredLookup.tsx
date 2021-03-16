import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input, Checkbox } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const RegisteredLookup = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, RegisteredLookup);
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
          {...scopedProps('lookup')}
          label="Lookup"
          description="The registered lookup name"
          type="text"
        />
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
RegisteredLookup.type = 'registeredLookup';
RegisteredLookup.fields = [
  'dimension',
  'outputName',
  'lookup',
  'retainMissingValue',
  'replaceMissingValueWith',
  'injective',
  'optimize',
];
