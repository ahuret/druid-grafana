import React from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Code, Checkbox } from '../abstract';
import { InlineFieldRow } from '@grafana/ui';

export const Javascript = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Javascript);
  return (
    <>
      <InlineFieldRow>
        <Code
          {...scopedProps('function')}
          label="Function"
          description="The javascript function. e.g: function(str) { return str.substr(0, 3); }"
          lang="javascript"
        />
      </InlineFieldRow>
      <InlineFieldRow>
        <Checkbox
          {...scopedProps('injective')}
          label="Injective?"
          description="Specifies if the JavaScript function preserves uniqueness"
        />
      </InlineFieldRow>
    </>
  );
};
Javascript.type = 'javascript';
Javascript.fields = ['function', 'injective'];
