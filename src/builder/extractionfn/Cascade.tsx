import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Multiple } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';
import { ExtractionFn } from './';

export const Cascade = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Cascade);
  return (
    <InlineFieldRow>
      <Multiple
        {...scopedProps('extractionsFns')}
        label="Extraction functions"
        description="The extraction functions"
        component={ExtractionFn}
        componentExtraProps={{}}
      />
    </InlineFieldRow>
  );
};
Cascade.type = 'cascade';
Cascade.fields = ['extractionFns'];
