import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input, Checkbox, Multiple } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';
import { Map } from '../lookup';

export const Lookup = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Lookup);
  return (
    <>
      <InlineFieldRow>
        <Map {...scopedProps('lookup')} />
      </InlineFieldRow>
      <InlineFieldRow>
        <Checkbox
          {...scopedProps('retainMissingValue')}
          label="Retain missing value?"
          description="Specifies if the missing value should be retained"
        />
      </InlineFieldRow>
      <InlineFieldRow>
        <Input
          {...scopedProps('replaceMissingValueWith')}
          label="Replace missing value with"
          description="the missing value replacement text"
          type="text"
        />
      </InlineFieldRow>
      <InlineFieldRow>
        <Checkbox {...scopedProps('injective')} label="Injective?" description="Specifies if the lookup is injective" />
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
Lookup.fields = ['lookup', 'retainMissingValue', 'replaceMissingValueWith', 'injective', 'optimize'];
