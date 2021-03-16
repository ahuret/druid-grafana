import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const True = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, True);
  const options,
    onOptionsChange = scopedProps(undefined);
  onOptionsChange(options);

  return (
    <InlineFieldRow>
      The true filter is a filter which matches all values. It can be used to temporarily disable other filters without
      removing the filter.
    </InlineFieldRow>
  );
};
True.type = 'true';
True.fields = [];
