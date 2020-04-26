import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors, getSize, sizes } from "../styles/theme"
import Typography from "../styles/primitives/Typography"

const HeaderBase = styled.header({
  padding: sizes.xLarge,
  backdropFilter: "blur(10px)",
  display: "flex",
  width: "100%",
  position: "sticky",
  top: 0,
  background: "rgba(0,0,0,0.20)",
  backgroundImage:
    "linear-gradient(180deg, rgba(0,0,0,0.99) 0%, rgba(0,0,0,0.00) 100%)",
})

const HeaderContent = styled.div({
  maxWidth: "1024px",
  flex: 1,
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
})

const MenuItem = styled.div({
  marginRight: sizes.xSmall,
})

const Menu = styled.ul({
  display: "flex",
  listStyle: "none",
  position: "relative",
  paddingBottom: sizes.medium,

  [`${MenuItem}:last-child`]: {
    marginRight: 0,
  },
})

const Dot = styled.div({
  display: "block",
  padding: 0,
  position: "absolute",
  left: 0,
  right: "auto",
  height: getSize(2),
  width: getSize(2),
  bottom: 0,
  borderRadius: "50%",
  marginLeft: 0,
  background: colors.primary["500"],
  transition: "left 1s ease",
})

// TODO: think about making Link a reusable component
const MenuLink = styled(Link)({
  color: colors.neutral?.["000"],
  textDecoration: "none",
  [`${Dot}`]: {
    background: "red !important",
  },
})

const Header = () => (
  <HeaderBase>
    <HeaderContent>
      <MenuLink to="/">
        <Typography variant="subtitle1">kubiński</Typography>
      </MenuLink>

      <Menu>
        <MenuItem>
          <MenuLink to="/">
            <Typography variant="subtitle1">articles</Typography>
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/">
            <Typography variant="subtitle1">about me</Typography>
          </MenuLink>
        </MenuItem>
        <Dot />
      </Menu>
    </HeaderContent>
  </HeaderBase>
)
export default Header
