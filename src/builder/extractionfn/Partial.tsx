import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const Partial = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Partial);
  return (
    <>
      <InlineFieldRow>
        <Input {...scopedProps('expr')} label="Expression" description="The regular expressioncd " type="text" />
      </InlineFieldRow>
    </>
  );
};
Partial.type = 'partial';
Partial.fields = ['expr'];
