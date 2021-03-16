import React from 'react';
import { InlineField } from '@grafana/ui';
import { onBuilderChange } from '.';
import { QueryBuilderProps } from '../types';
import uniqueId from 'lodash/uniqueId';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-hjson';
import 'ace-builds/src-noconflict/mode-sql';
import 'ace-builds/src-noconflict/theme-terminal';

interface Props extends QueryBuilderProps {
  lang: string;
}

export const Code = (props: Props) => {
  const onChange = (value: string) => {
    console.log('CODE CHANGED', value);
    if (value !== props.options.builder) {
      props.onChange !== undefined ? props.onChange(value) : onBuilderChange(props, value);
    }
  };
  return (
    <InlineField label={props.label} grow>
      <AceEditor
        name={uniqueId()}
        placeholder={props.description}
        mode={props.lang}
        theme="terminal"
        onChange={onChange}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={props.options.builder}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </InlineField>
  );
};
