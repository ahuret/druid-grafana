import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input, Multiple } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';
import { Interval as IntervalField } from '../date';
import { ExtractionFn } from '../extractionfn';
import { FilterTuning } from '.';

export const Interval = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Interval);
  return (
    <>
      <InlineFieldRow>
        <Input {...scopedProps('dimension')} label="Dimension" description="The dimension name" type="text" />
      </InlineFieldRow>
      <InlineFieldRow>
        <Multiple
          {...scopedProps('intervals')}
          label="Intervals"
          description="The intervals"
          component={IntervalField}
          componentExtraProps={{
            label: 'Interval',
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
Interval.type = 'interval';
Interval.fields = ['dimension', 'intervals', 'extractionFn', 'filterTuning'];
