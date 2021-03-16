import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';
import { FilterTuning } from '.';

export const Expression = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Expression);
  return (
    <>
      <InlineFieldRow>
        <Input {...scopedProps('expression')} label="Expression" description="The expression" type="text" />
      </InlineFieldRow>
      <InlineFieldRow>
        <FilterTuning {...scopedProps('filterTuning')} />
      </InlineFieldRow>
    </>
  );
};
Expression.type = 'expression';
Expression.fields = ['expression', 'filterTuning'];
