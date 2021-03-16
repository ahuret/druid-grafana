import { PureComponent } from 'react';
import { QueryBuilderComponentProps } from '../abstract';

export class Lexicographic extends PureComponent<QueryBuilderComponentProps> {
  constructor(props: QueryBuilderProps) {
    super(props);
    const { options, onOptionsChange } = props;
    const { builder } = options;
    builder.type = 'lexicographic';
    onOptionsChange({ ...options, builder: builder });
  }
  render() {
    return null;
  }
}
