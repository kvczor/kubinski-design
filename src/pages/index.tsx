import React from "react"
import styled, { ThemeProvider } from "styled-components"
import "reset-css"
import "../fonts/inter.css"
import Header from "../components/Header"
import GlobalStyles from "../styles/globalStyles"
import theme, { colors, sizes } from "../styles/theme"
import Typography from "../styles/primitives/Typography"

const ArticleTitleContainer = styled.div({
  gridArea: "AT",
  padding: sizes.xSmall,
})

const SectionTitleContainer = styled.div({
  gridArea: "ST",
})

const TextContainer = styled.div({
  gridArea: "TC",
})

const PageContainer = styled.div({
  color: colors.neutral["000"],
})

const ContentContainer = styled.main({
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
  gridGap: sizes.medium,
  gridRowGap: sizes.xxLarge,
  maxWidth: "1024px",
  width: "100%",
  margin: "0 auto",
  paddingLeft: sizes.medium,
  paddingRight: sizes.medium,

  [theme.mediaQueries.tablet]: {
    paddingLeft: 0,
    paddingRight: 0,
  },

  gridTemplateAreas: `
    "AT AT AT AT AT AT AT AT AT AT AT AT"
    "ST ST ST ST ST ST ST ST ST ST ST ST"
    "TC TC TC TC TC TC TC TC TC TC TC TC"
  `,

  [theme.mediaQueries.tablet]: {
    gridTemplateAreas: `
      "AT AT AT AT AT AT AT AT . . . ."
      "ST ST ST ST ST TC TC TC TC TC TC TC"
  `,
  },
})

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <PageContainer>
      <Header />

      <ContentContainer>
        <ArticleTitleContainer>
          <Typography variant="header1">Building a Design System</Typography>
        </ArticleTitleContainer>

        <SectionTitleContainer>sectionTitle</SectionTitleContainer>
        <TextContainer>
          Design System is a hot topic in the development world. Teams face
          various difficulties building web interfaces and investing time in
          building and running the design system is promised to alleviate many
          of them. Countless articles go in length about how building a common
          language, a collection of reusable components, set of design tokens
          and a living documentation will help us bring an end to inconsistency
          in behaviour and appearance across the application, spaghetti css,
          misalignment between team members and those endless questions about
          font properties, hex values and spacing in pixels to the designer
          team. There are seemingly more and more companies, even big ones like
          Microsoft, Uber and Airbnb, adopting this new way of working and
          perceiving UI layer of the application. Design System is a hot topic
          in the development world. Teams face various difficulties building web
          interfaces and investing time in building and running the design
          system is promised to alleviate many of them. Countless articles go in
          length about how building a common language, a collection of reusable
          components, set of design tokens and a living documentation will help
          us bring an end to inconsistency in behaviour and appearance across
          the application, spaghetti css, misalignment between team members and
          those endless questions about font properties, hex values and spacing
          in pixels to the designer team. There are seemingly more and more
          companies, even big ones like Microsoft, Uber and Airbnb, adopting
          this new way of working and perceiving UI layer of the application.
          Design System is a hot topic in the development world. Teams face
          various difficulties building web interfaces and investing time in
          building and running the design system is promised to alleviate many
          of them. Countless articles go in length about how building a common
          language, a collection of reusable components, set of design tokens
          and a living documentation will help us bring an end to inconsistency
          in behaviour and appearance across the application, spaghetti css,
          misalignment between team members and those endless questions about
          font properties, hex values and spacing in pixels to the designer
          team. There are seemingly more and more companies, even big ones like
          Microsoft, Uber and Airbnb, adopting this new way of working and
          perceiving UI layer of the application. Design System is a hot topic
          in the development world. Teams face various difficulties building web
          interfaces and investing time in building and running the design
          system is promised to alleviate many of them. Countless articles go in
          length about how building a common language, a collection of reusable
          components, set of design tokens and a living documentation will help
          us bring an end to inconsistency in behaviour and appearance across
          the application, spaghetti css, misalignment between team members and
          those endless questions about font properties, hex values and spacing
          in pixels to the designer team. There are seemingly more and more
          companies, even big ones like Microsoft, Uber and Airbnb, adopting
          this new way of working and perceiving UI layer of the application.
          Design System is a hot topic in the development world. Teams face
          various difficulties building web interfaces and investing time in
          building and running the design system is promised to alleviate many
          of them. Countless articles go in length about how building a common
          language, a collection of reusable components, set of design tokens
          and a living documentation will help us bring an end to inconsistency
          in behaviour and appearance across the application, spaghetti css,
          misalignment between team members and those endless questions about
          font properties, hex values and spacing in pixels to the designer
          team. There are seemingly more and more companies, even big ones like
          Microsoft, Uber and Airbnb, adopting this new way of working and
          perceiving UI layer of the application. Design System is a hot topic
          in the development world. Teams face various difficulties building web
          interfaces and investing time in building and running the design
          system is promised to alleviate many of them. Countless articles go in
          length about how building a common language, a collection of reusable
          components, set of design tokens and a living documentation will help
          us bring an end to inconsistency in behaviour and appearance across
          the application, spaghetti css, misalignment between team members and
          those endless questions about font properties, hex values and spacing
          in pixels to the designer team. There are seemingly more and more
          companies, even big ones like Microsoft, Uber and Airbnb, adopting
          this new way of working and perceiving UI layer of the application.
        </TextContainer>
      </ContentContainer>
    </PageContainer>
  </ThemeProvider>
)

export default IndexPage
