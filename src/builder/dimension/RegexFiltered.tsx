import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';
import { Dimension } from '../dimension';

export const RegexFiltered = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, RegexFiltered);
  return (
    <>
      <InlineFieldRow>
        <Dimension {...scopedProps('delegate')} />
      </InlineFieldRow>
      <InlineFieldRow>
        <Input {...scopedProps('pattern')} label="Pattern" description="The regex pattern" type="text" />
      </InlineFieldRow>
    </>
  );
};
RegexFiltered.type = 'regexFiltered';
RegexFiltered.fields = ['delegate', 'pattern'];
