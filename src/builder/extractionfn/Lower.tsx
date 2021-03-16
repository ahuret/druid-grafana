import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const Lower = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Lower);
  return (
    <>
      <InlineFieldRow>
        <Input {...scopedProps('locale')} label="Locale" description="The optionnal locale to use to perform the transformation. e.g: fr" type="text" />
      </InlineFieldRow>
    </>
  );
};
Lower.type = 'lower';
Lower.fields = ['locale'];
