import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../fonts/fonts.css"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Oasis" />
    <div id="header">
      <span id="title">Oasis</span>
      <nav>
        <ol>
          <li><a href="#">Trade</a></li>
          <li><a href="#">Borrow</a></li>
          <li><a href="#">Save</a></li>
        </ol>
      </nav>
    </div>
    <div id="hero">
      Trade, borrow and save using Dai.
    </div>
    <div id="cards">
      <div className="card">
        <div className="name">Trade</div>
        <div className="description">Wallet to wallet token trading. Decentralized leverage. The most secure way to
          trade.
        </div>
        <div className="button">Start Trading</div>
      </div>
      <div className="card">
        <div className="name">Borrow</div>
        <div className="description">Lock your tokens to borrow Dai, a decentralized cryptocurrency pegged to the value
          of 1 USD.
        </div>
        <div className="button">Borrow Dai</div>
      </div>
      <div className="card">
        <div className="name">Save</div>
        <div className="description">Save by holding Dai. Track your interest over time. Automatic, non-custodial
          savings.
        </div>
        <div className="button">Save Dai</div>
      </div>
    </div>
    <div className="section">
      <h3>Supported Tokens</h3>
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
    </div>

  </Layout>
)

export default IndexPage
