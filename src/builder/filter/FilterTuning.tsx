import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input, Checkbox, Multiple } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const FilterTuning = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, FilterTuning);
  return (
    <>
      <InlineFieldRow>
        <Checkbox
          {...scopedProps('useBitmapIndex')}
          label="Use bitmap index?"
          description="If set to false will disallow a filter to utilize bitmap indexes"
        />
      </InlineFieldRow>
      <InlineFieldRow>
        <Input {...scopedProps('minCardinalityToUseBitmapIndex')} label="Min cardinality to use bitmap index" description="Allow using bitmap index only if cardinality is over min value" type="number" />
      </InlineFieldRow>
      <InlineFieldRow>
        <Input {...scopedProps('maxCardinalityToUseBitmapIndex')} label="Max cardinality to use bitmap index" description="Allow using a bitmap index only if cardinality is under max value" type="number" />
      </InlineFieldRow>
    </>
  );
};
FilterTuning.type = 'filterTuning';
FilterTuning.fields = ['useBitmapIndex', 'minCardinalityToUseBitmapIndex', 'maxCardinalityToUseBitmapIndex'];
