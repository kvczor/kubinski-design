import React, { createElement } from "react"
import styled from "styled-components"
import { getSize, mediaQueries, sizes } from "../theme"

export type TypographyVariant =
  | "header1"
  | "header2"
  | "header3"
  | "header4"
  | "header5"
  | "header6"
  | "subtitle1"
  | "body1"

interface TypographyProps {
  variant: TypographyVariant
  className?: string
  testId?: string
}

const Header1 = styled.h1({
  margin: 0,
  fontSize: getSize(18),
  fontWeight: "bold",
  [mediaQueries.tablet]: {
    fontSize: getSize(31),
  },
})

const Header2 = styled.h2({
  margin: 0,
})

const Header3 = styled.h3({
  margin: 0,
})

const Header4 = styled.h4({
  margin: 0,
})

const Header5 = styled.h5({
  margin: 0,
})

const Header6 = styled.h6({
  margin: 0,
  fontSize: getSize(5),
  fontWeight: "bold",
})

const Subtitle1 = styled.span({
  margin: 0,
  fontSize: sizes.medium,
  fontWeight: 500,
})

const Body1 = styled.span({
  margin: 0,
  fontSize: getSize(5),
  fontWeight: 500,
})

export const Typography: React.FC<TypographyProps> = ({
  variant,
  testId,
  ...props
}) => {
  const elementMap = {
    header1: Header1,
    header2: Header2,
    header3: Header3,
    header4: Header4,
    header5: Header5,
    header6: Header6,
    subtitle1: Subtitle1,
    body1: Body1,
    // subtitle2: StyledSubtitle2,
    // body1: StyledBody1,
    // body2: StyledBody2,
    // caption: StyledCaption,
    // overline: StyledOverline,
  }

  return createElement(elementMap[variant], {
    ...props,
    "data-testid": testId,
  })
}

export default Typography
