import { ComponentType } from 'react';
import { QueryBuilderProps, QueryBuilderOptions } from '../types';
import { cloneDeep } from 'lodash';

type QueryBuilderComponent = ComponentType<QueryBuilderComponentProps> & {
  type: string;
  fields: string[];
};

export interface QueryBuilderComponentProps extends QueryBuilderProps {
  name: string;
  label: string;
  description: string;
  onChange?: (newBuilder: any) => void;
}

export const initBuilder = (prevBuilder: any, component: QueryBuilderComponent): any => {
  let builder: any = { type: component.type };
  component.fields.forEach((field) => {
    builder[field] = prevBuilder[field];
  });
  return builder;
};

export const useScopedQueryBuilderProps = (props: QueryBuilderProps, component: QueryBuilderComponent) => {
  return (name: string): QueryBuilderComponentProps => {
    let scopedProps = cloneDeep(props);
    scopedProps.name = name;
    scopedProps.options.builder = initBuilder(props.options.builder[name] || {}, component);
    scopedProps.onOptionsChange = (options: QueryBuilderOptions) => {
      console.log('OPTIONS HAS CHANGED', options);
    };
    return scopedProps;
  };
};

export const onBuilderChange = (props: QueryBuilderProps | undefined, builder: any) => {
  if (undefined !== props) {
    props.onOptionsChange({ ...props.options, builder: builder });
  } else {
    console.error('onOptionsChange is not available. QueryBuilderProps not passed.');
  }
};
