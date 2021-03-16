import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';
import { Dimension } from '../dimension';

export const PrefixFiltered = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, PrefixFiltered);
  return (
    <>
      <InlineFieldRow>
        <Dimension {...scopedProps('delegate')} />
      </InlineFieldRow>
      <InlineFieldRow>
        <Input {...scopedProps('prefix')} label="Prefix" description="The prefix to use" type="text" />
      </InlineFieldRow>
    </>
  );
};
PrefixFiltered.type = 'prefixFiltered';
PrefixFiltered.fields = ['delegate', 'prefix'];
