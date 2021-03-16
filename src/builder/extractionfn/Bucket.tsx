import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const Bucket = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Bucket);
  return (
    <>
      <InlineFieldRow>
        <Input {...scopedProps('size')} label="Size" description="The buckets size" type="number" />
      </InlineFieldRow>
      <InlineFieldRow>
        <Input {...scopedProps('offset')} label="Offset" description="The buckets offset" type="number" />
      </InlineFieldRow>
    </>
  );
};
Bucket.type = 'bucket';
Bucket.fields = ['size', 'offset'];
