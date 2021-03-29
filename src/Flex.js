import styled from 'styled-components';
import { flexbox } from 'styled-system';
import { composedBox } from './Box';

// export type FlexProps = BoxProps & FlexboxProps;

const Flex = styled.div(composedBox, flexbox, {
  display: 'flex',
});

export default Flex;
