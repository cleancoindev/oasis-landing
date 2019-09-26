import React from "react"

import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TextPage = styled.div`
  max-width: 680px;
  text-align: left;
  margin: 0 auto;
  padding: 75px 0 28px;
  
  h1 {
    font-size: 38px;
    color: #1E2E3A;
    margin: 20px 0;
  }
  
  .subheading {
    font-size: 17px;
    color: #666666;
    margin-bottom: 49px;
  }
  
  h2 {
    font-size: 25px;
    color: #000000;
    margin: 35px 0;
    line-height: 36px;
  }
  
  p {
    font-size: 18px;
    line-height: 28px;
    margin: 28px 0;
  }
`


const Privacy = () => (
  <Layout>
    <SEO title="Oasis - Privacy Policy" />
    <TextPage>
      <h1>Privacy Policy</h1>
      <div className="subheading">Last Updated: September 20, 2010</div>
      <p>
        This Privacy Policy provides our privacy policy regarding the nature, purpose, use, and sharing of personal data or other information collected from the users of the website makerdao.com and other websites which use subdomains of makerdao.com (the „Site”). We are committed to protecting and respecting your privacy. Please read this carefully as this Privacy Policy is legally binding when you use the Site.
      </p>
      <p>
        As used in this Privacy Policy, "we", "us" or "our" refers to Maker Ecosystem Growth Holdings, Inc., a Cayman based limited liability company. You can reach us with any request relating to this Privacy Policy via contact details provided below.
      </p>
      <h2>Data processing in connection with the site use of cookies and similar technologies</h2>
      <p>The Site is using cookies. Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site. Cookies are typically stored on your computer's hard drive. Information collected from cookies is used by us to evaluate the effectiveness of our Site and analyze trends. The information collected from cookies allows us to determine such things as which parts of the Site are most visited and difficulties our visitors may experience in accessing the SIte. With this knowledge, we can improve the quality of your experience on the Site by recognizing and delivering more of the most desired features and information, as well as by resolving access difficulties. </p>
      <p>We use third party service providers, to assist us in better understanding the use of our Site. Our service providers will place cookies on the hard drive of your computer (or use similar technologies) and will receive information that we select that will educate us on such things as how visitors navigate around our Site. This information is aggregated to provide statistical data about our users' browsing actions and patterns, and does not personally identify individuals. This information may include:</p>
    </TextPage>
  </Layout>
)

export default Privacy