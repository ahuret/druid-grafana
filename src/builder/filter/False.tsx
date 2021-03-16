import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const False = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, False);
  const options,
    onOptionsChange = scopedProps(undefined);
  onOptionsChange(options);

  return (
    <InlineFieldRow>
      The false filter is a filter which matches no value. It can be used to temporarily disable other filters without
      removing the filter.
    </InlineFieldRow>
  );
};
False.type = 'false';
False.fields = [];
