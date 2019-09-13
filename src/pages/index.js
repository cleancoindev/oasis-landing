import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../fonts/fonts.css"
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
      <>
        <div>{q}</div>
        {isSelected ? (
          <div onClick={() => setSelectedIndex(null)}><Minus /></div>
        ): (
          <div onClick={() => setSelectedIndex(index)}><Cross /></div>
        )}
        {isSelected ? <div>{a}</div> : null}
      </>
    )
  })
}

const Card = ({title, content, buttonText}) => (
  <div className="card">
    <div className="title">{title}</div>
    <div className="description">{content}</div>
    <div className="buttonContainer">
      <div className="button">{buttonText}</div>
    </div>
  </div>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Oasis" />
    <div id="hero">
      Trade, borrow and save using Dai.
    </div>
    <div id="cards">
      <Card title="Trade" content="Wallet to wallet token trading. Decentralized leverage. The most secure way to trade." buttonText="Start Trading"/>
      <Card title="Borrow" content="Lock your tokens to borrow Dai, a decentralized cryptocurrency pegged to the value of 1 USD." buttonText="Borrow Dai"/>
      <Card title="Save" content="Save by holding Dai. Track your interest over time. Automatic, non-custodial savings." buttonText="Save Dai"/>
    </div>
    <div className="section">
      <h3>Supported Tokens</h3>
      <div style={{display: "flex", justifyContent: "space-around", margin: "0 auto", maxWidth: "978px" }}>
      {Object.values(tokensMetadata).map(({name, icon}) => <Token name={name} icon={icon} />)}
      </div>
    </div>
    <div className="section">
      <h3>What's the Story</h3>
      <p>Oasis is a platform to interact...</p>
    </div>
    <div className="section">
      <h3>Completely Permissionless</h3>
      <p>Anyone can access the system...</p>
    </div>
    <div className="section">
      <h3>General Questions</h3>
      <Questions/>
    </div>

  </Layout>
)

export default IndexPage
