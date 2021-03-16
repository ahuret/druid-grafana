import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const Substring = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Substring);
  return (
    <>
      <InlineFieldRow>
        <Input {...scopedProps('index')} label="Index" description="The starting index" type="number" />
      </InlineFieldRow>
      <InlineFieldRow>
        <Input {...scopedProps('length')} label="Length" description="The substring length" type="number" />
      </InlineFieldRow>
    </>
  );
};
Substring.type = 'substring';
Substring.fields = ['index', 'length'];
