import React, { useState } from "react"

import styled from 'styled-components'

import SEO from "../components/seo"

import "./index.css"

import BatIcon from '../images/icons/bat.svg'
import ZrxIcon from '../images/icons/zrx.svg'
import DgdIcon from '../images/icons/dgd.svg'
import EthIcon from '../images/icons/eth.svg'
import MkrIcon from '../images/icons/mkr.svg'
import OmgIcon from '../images/icons/omg.svg'
import RepIcon from '../images/icons/rep.svg'
import UsdcIcon from '../images/icons/usdc.svg'
import WbtcIcon from '../images/icons/wbtc.svg'
import EmptyIcon from '../images/icons/empty.svg'

import Cross from "../images/cross.svg"
import Minus from "../images/minus.svg"
import { Helmet } from "react-helmet"

const Hero = styled.div`
  color: #1E2E3A;
  font-size: 38px;
  margin: 97px;
`

const CardContainer = styled.div`
  background-color: #EEEEEE;
  border-radius: 15px;
  width: 300px;
  height: 368px;

  position: relative;

  .title {
    font-size: 29px;
    margin-top: 58px;
  }

  .description {
    font-size: 17px;
    line-height: 25px;
    margin-top: 27px;
    margin-right: 23px;
    margin-left: 23px;
  }

  .buttonContainer {
    position: absolute;
    bottom: 44px;
    width: 100%;
  }

  .button {
    padding-right: 22px;
    padding-left: 22px;
    border: 1px solid black;
    border-radius: 6px;
    display: inline-block;
    font-size: 15px;
    font-weight: 500;
    box-sizing: border-box;
    height: 39px;
    line-height: 34px;
    cursor: pointer;
  }
`

const Card = ({title, content, buttonText}) => (
  <CardContainer>
    <div className="title">{title}</div>
    <div className="description">{content}</div>
    <div className="buttonContainer">
      <div className="button">{buttonText}</div>
    </div>
  </CardContainer>
)


const tokensMetadata = {
  ETH: {
    name: 'Ethereum',
    icon: EthIcon,
  },
  WBTC: {
    name: 'Wrapped Bitcoin',
    icon: WbtcIcon,
  },
  USDC: {
    name: 'USD Coin',
    icon: UsdcIcon,
  },
  OMG: {
    name: 'OmiseGO',
    icon: OmgIcon,
  },
  REP: {
    name: 'Augur',
    icon: RepIcon,
  },
  ZRX: {
    name: '0x',
    icon: ZrxIcon,
  },
  DGD: {
    name: 'Digix Gold Token',
    icon: DgdIcon,
  },
}

const Token = ({name, icon: Icon}) => (
  <div style={{display: "flex", alignItems: "center"}}>
    {Icon ? <Icon width="22" height="22" /> : <EmptyIcon width="22" height="22"/>}
    <span style={{fontSize: "15px", lineHeight: "22px", marginLeft: "13px"}}>{name}</span>
  </div>
)

const Questions = () => {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const questions = [{
    q: "What is Oasis?",
    a: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis."
  },{
    q: "How secure is Oasis?",
    a: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis."
  },{
    q: "Do I need an account to use Oasis?",
    a: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis."
  },{
    q: "How do I borrow Dai?",
    a: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis."
  },{
    q: "How do I trade my tokens?",
    a: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis."
  },{
    q: "Does Oasis charge fees?",
    a: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis."
  },{
    q: "How can I exchange fiat to Dai?",
    a: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis."
  },]

  return questions.map(({q, a}, index) => {
    const isSelected = index === selectedIndex
    return (
      <div style={{maxWidth: "632px", margin: "0 auto", textAlign: "left", fontSize: "18px"}}>
        <div style={{paddingTop: "20px", paddingBottom: "20px", cursor: "pointer"}}>
          {isSelected ? (
            <div onClick={() => setSelectedIndex(null)}>
              {q}
              <Minus style={{float: "right"}}/>
            </div>
          ): (
            <div onClick={() => setSelectedIndex(index)}>
              {q}
              <Cross style={{float: "right"}} />
            </div>
          )}
        </div>
        {isSelected ? <div style={{fontSize: "17px", paddingBottom: "20px"}}>{a}</div> : null}
        {(index < questions.length - 1) ? (
          <div style={{borderBottom: '1px solid #9E9E9E', opacity: 0.9}} />
        ) : null}
      </div>
    )
  })
}

const Header = styled.header`
  text-align: left;

  span {
    font-size: 21px;
    line-height: 25px;
    letter-spacing: 0.3px;
    font-weight: 500;
  }
`

const Nav = styled.nav`
  float: right;
  display: flex;
  justify-content: space-between;
  
  a {
    font-size: 17px;
    text-decoration: none;
    color: black;
    margin-left: 64px;
  }
`

const IndexPage = () => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 1203,
      paddingTop: '41px',
    }}
  >
    <SEO title="Oasis" />
    <Helmet>
      <link rel="preload" href="/fonts/fonts.css" as="style" />
    </Helmet>
    <Header>
      <span>Oasis</span>
    </Header>
    <Hero>
      Trade, borrow and save using Dai.
    </Hero>
    <div id="cards">
      <Card title="Trade" content="Wallet to wallet token trading. Decentralized leverage. The most secure way to trade." buttonText="Start Trading"/>
      <Card title="Borrow" content="Lock your tokens to borrow Dai, a decentralized cryptocurrency pegged to the value of 1 USD." buttonText="Borrow Dai"/>
      <Card title="Save" content="Save by holding Dai. Track your interest over time. Automatic, non-custodial savings." buttonText="Save Dai"/>
    </div>
    <div className="section" style={{marginTop: "76px"}}>
      <h3>Supported Tokens</h3>
      <div style={{display: "flex", justifyContent: "space-around", margin: "0 auto", maxWidth: "978px" }}>
      {Object.values(tokensMetadata).map(({name, icon}) => <Token name={name} icon={icon} />)}
      </div>
    </div>
    <div className="section" style={{marginTop: "95px"}}>
      <h3>What's the Story</h3>
      <p>Oasis is a platform to interact with the world of decentralized finance. Use it to trade tokens, loan yourself money, and earn Dai, a decentralized stablecoin pegged to the value of 1 US Dollar.</p>
    </div>
    <div className="section">
      <h3>The most trusted protocol on Ethereum</h3>
      <p>Oasis is built on top of formally verified smart contracts created by The Maker Foundation, the industry leader in secure decentralized finance.</p>
    </div>
    <div className="section">
      <h3>Completely Permissionless</h3>
      <p>Anyone can access the system simply by using a wallet address, and you never have to trust a counterparty institution to approve your activity.</p>
    </div>
    <div className="section">
      <h3>General Questions</h3>
      <Questions/>
    </div>
    <footer>
      © {new Date().getFullYear()} Maker Ecosystem Growth Holdings, Inc.
      <Nav>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </Nav>
    </footer>
  </div>
)

export default IndexPage
