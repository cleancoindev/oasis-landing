import React from "react"
import styled from "styled-components"
import { mobileL } from "../util/screen-sizes"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import "../styles/minireset.css"
import "./layout.css"

import CookieNotice from "./cookieNotice"

const Header = styled.header`
  text-align: left;

  .logo {
    font-size: 21px;
    line-height: 25px;
    letter-spacing: 0.3px;
    font-weight: 500;
  }
`

const centerFooterMaxWidth = "640px";

const Footer = styled.footer`
  margin-top: 90px;
  margin-bottom: 70px;

  nav {
    float: right;
    display: flex;
    justify-content: center;
    
    @media (max-width: ${centerFooterMaxWidth}) {
      float: none;
    }
    
    a {
      font-size: 17px;
      text-decoration: none;
      color: black;
    }
    
    a:hover {
      color: #6D6D6D;
    }
    
    a:not(:first-child) {
      margin-left: 64px;
    }
  }

  .copyright {
    text-align: left;
    font-size: 16px;
    letter-spacing: 0.3px;
    white-space: nowrap;

    @media (max-width: ${centerFooterMaxWidth}) {
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
      <Link className="logo" to="/">Oasis</Link>
    </Header>
    {children}
    <CookieNotice/>
    <Footer>
      <nav>
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
      </nav>
      <div className="copyright">
        © {new Date().getFullYear()} Maker Ecosystem Growth Holdings, Inc.
      </div>
    </Footer>
  </div>
)

export default Layout