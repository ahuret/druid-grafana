import React, { useState } from 'react';
import { QueryBuilderProps } from '../types';
import { useScopedQueryBuilderProps, Input } from '../abstract';
import { InlineFieldRow, InfoBox } from '@grafana/ui';
import { ExtractionFn } from '../extractionfn';

export const Extraction = (props: QueryBuilderProps) => {
  const scopedProps = useScopedQueryBuilderProps(props, Extraction);
  const [showInfo, setShowInfo] = useState(true);
  return (
    <>
      {showInfo && (
        <InfoBox
          title="Deprecated"
          url={'https://druid.apache.org/docs/latest/querying/filters.html#extraction-filter'}
          onDismiss={() => {
            setShowInfo(false);
          }}
        >
          <p>
            The extraction filter is now deprecated. The selector filter with an extraction function specified provides
            identical functionality and should be used instead.
          </p>
        </InfoBox>
      )}

      <InlineFieldRow>
        <Input {...scopedProps('dimension')} label="Dimension" description="The dimension name" type="text" />
      </InlineFieldRow>

      <InlineFieldRow>
        <Input {...scopedProps('value')} label="Value" description="The dimension value" type="text" />
      </InlineFieldRow>

      <InlineFieldRow>
        <ExtractionFn {...scopedProps('extractionFn')} />
      </InlineFieldRow>
    </>
  );
};
Extraction.type = 'extraction';
Extraction.fields = ['dimension', 'value', 'extractionFn'];
