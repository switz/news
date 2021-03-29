import styled from 'styled-components';
import {
  layout,
  space,
  position,
  typography,
  background,
  color,
  border,
  variant,
  system,
  // LayoutProps,
  // SpaceProps,
  // BackgroundProps,
  // TypographyProps,
  // PositionProps,
  // ColorProps,
  // BorderProps,
  compose,
} from 'styled-system';

const variantTypes = {
  body: {
    // fontFamily: 'body',
    fontWeight: 'regular',
    // lineHeight: 'copy',
    fontSize: 3,
  },
  heading: {
    // fontFamily: 'heading',
    fontWeight: 'medium',
    // lineHeight: 'solid',
    letterSpacing: 1,
    fontSize: 5,
  },
  smallHeading: {
    // fontFamily: 'heading',
    fontWeight: 'medium',
    // lineHeight: 'solid',
    letterSpacing: 1,
    fontSize: 1,
    textTransform: 'uppercase',
  },
  flatLink: {
    'textDecoration': 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  ellipsis: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};

const textVariants = variant({
  variants: variantTypes,
});

// type VariantProps = keyof typeof variantTypes;

const textStyles = system({
  textTransform: true,
  textDecoration: true,
  boxSizing: true,
  cursor: true,
  transform: true,
  transition: true,
  pointerEvents: true,
  textShadow: true,
  boxShadow: true,
  gap: {
    property: 'gap',
    scale: 'space',
  },
});

// export type BoxProps = LayoutProps &
//   SpaceProps &
//   BackgroundProps &
//   TypographyProps &
//   PositionProps &
//   ColorProps &
//   BorderProps & {
//     variant?: VariantProps | string;
//     textTransform?: string;
//     textDecoration?: string;
//     boxSizing?: string;
//     cursor?: string;
//     transform?: string;
//     transition?: string;
//     pointerEvents?: string;
//     gap?: string | number;
//     textShadow?: string;
//     className?: string;
//     boxShadow?: string;
//   };

export const composedBox = compose(
  layout,
  space,
  position,
  typography,
  background,
  color,
  border,
  textVariants,
  textStyles
);

const Box = styled.div(composedBox);

export default Box;
