import React from "react"
import styled from "styled-components"
import { mobileL } from "../util/screen-sizes"
import { Helmet } from "react-helmet"

import "../styles/minireset.css"
import "./layout.css"

const Header = styled.header`
  text-align: left;

  span {
    font-size: 21px;
    line-height: 25px;
    letter-spacing: 0.3px;
    font-weight: 500;
  }
`

const Footer = styled.footer`
  margin-top: 90px;
  margin-bottom: 70px;

  nav {
    float: right;
    display: flex;
    justify-content: space-between;

    a {
      font-size: 17px;
      text-decoration: none;
      color: black;
      margin-left: 64px;
    }
  }

  .copyright {
    text-align: left;
    font-size: 16px;
    letter-spacing: 0.3px;
    white-space: nowrap;

    @media (max-width: 640px) {
      padding-top: 60px;
      text-align: center;
    }

    @media (max-width: ${mobileL}) {
      font-size: 13px;
    }
  }
`

const Layout = ({children}) => (
  <div style={{
    margin: `0 auto`,
    maxWidth: 1203,
    paddingTop: "41px",
  }}>
    <Helmet>
      <link rel="preload" as="font" href="/fonts/FTSwitch-Regular.woff2" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" as="font" href="/fonts/FTSwitch-Regular.woff" type="font/woff" crossOrigin="anonymous" />
      <link rel="preload" as="font" href="/fonts/FTSwitch-Medium.woff2" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" as="font" href="/fonts/FTSwitch-Medium.woff" type="font/woff" crossOrigin="anonymous" />
    </Helmet>
    <Header>
      <span>Oasis</span>
    </Header>
    {children}
    <Footer>
      <nav>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </nav>
      <div className="copyright">
        © {new Date().getFullYear()} Maker Ecosystem Growth Holdings, Inc.
      </div>
    </Footer>
  </div>
)

export default Layout