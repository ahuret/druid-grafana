import { PureComponent } from 'react';
import { QueryBuilderComponentProps } from '../abstract';

export class AlphaNumeric extends PureComponent<QueryBuilderComponentProps> {
  constructor(props: QueryBuilderProps) {
    super(props);
    const { options, onOptionsChange } = props;
    const { builder } = options;
    builder.type = 'alphanumeric';
    onOptionsChange({ ...options, builder: builder });
  }
  render() {
    return null;
  }
}
