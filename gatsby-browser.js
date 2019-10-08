/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const mixpanel = require("mixpanel-browser")

const env = process.env.NODE_ENV === "production" ? "prod" : "test"

exports.onClientEntry = () => {
  // init mixpanel
  const { token, config } = {
    test: {
      token: "4ff3f85397ffc3c6b6f0d4120a4ea40a",
      config: { debug: true, ip: false, api_host: "https://api.mixpanel.com" },
    },
    prod: {
      token: "a030d8845e34bfdc11be3d9f3054ad67",
      config: { ip: false, api_host: "https://api.mixpanel.com" },
    },
  }[env]
  mixpanel.init(token, config)
  console.debug(`[Mixpanel] Tracking initialized for ${env} env using ${token}`)
}

exports.onRouteUpdate = ({ location, prevLocation }) => {
  console.debug(`[Mixpanel] Tracked: ${location.pathname}`);
  mixpanel.track("Pageview", {
    product: "oasis-landing",
    id: location.pathname,
    page: location.pathname,
    previousPath: prevLocation ? prevLocation.pathname : null,
  })
}
