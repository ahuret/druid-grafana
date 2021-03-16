import React, { useState, ComponentType } from 'react';
import { InlineLabel, InlineFieldRow, Button, Icon } from '@grafana/ui';
import { QueryBuilderOptions } from '../types';
import { QueryBuilderComponentProps, onBuilderChange } from '.';

interface Props extends QueryBuilderComponentProps {
  component: ComponentType<any>;
  componentExtraProps: any;
}

const useProxyBuilder = (name: string, builder: any): any => {
  let proxyBuilder: any = {};
  const componentBuilder = builder[name] || [undefined];
  componentBuilder.forEach((value: any, index: number) => {
    proxyBuilder[name + '_' + index] = value;
  });
  console.log('BUILDERS READY', proxyBuilder);
  return useState(proxyBuilder);
};

export const Multiple = (props: Props) => {
  const Component = props.component;
  //const [builder, setBuilder] = props.builder;
  const [proxyBuilder, setProxyBuilder] = useProxyBuilder(props.name, props.options.builder);
  const onComponentOptionsChange = (options: QueryBuilderOptions) => {
    const newBuilder = {
      ...props.options.builder,
      [props.name]: Object.entries(options.builder).map((entry) => entry[1]),
    };
    //setBuilder(newBuilder);
    props.onChange !== undefined ? props.onChange(newBuilder) : onBuilderChange(props, newBuilder);
    console.log('ONE HAS CHANGED', options, newBuilder);
  };
  return (
    <>
      <InlineLabel width="auto" tooltip={props.description}>
        {props.label}
      </InlineLabel>
      {Object.entries(proxyBuilder).map((_: any, index: number) => (
        <InlineFieldRow key={index}>
          <Component
            {...props.componentExtraProps}
            {...props}
            onOptionsChange={onComponentOptionsChange}
            name={props.name + '_' + index}
          />
          <Button
            variant="secondary"
            size="xs"
            onClick={() =>
              setProxyBuilder(
                Object.fromEntries(Object.entries(proxyBuilder).filter((_: any, i: number) => i !== index))
              )
            }
          >
            <Icon name="trash-alt" />
          </Button>
        </InlineFieldRow>
      ))}
      <Button
        variant="secondary"
        icon="plus"
        onClick={() =>
          setProxyBuilder({ ...proxyBuilder, [props.name + '_' + Object.entries(proxyBuilder).length]: undefined })
        }
      >
        Add
      </Button>
    </>
  );
};
