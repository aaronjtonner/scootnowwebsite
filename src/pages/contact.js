import React from "react"
import Banner from "../components/banners/banner"
import FormContact from "../components/forms/formContact"
import Layout from "../components/layout"
import PortfolioBanner from "../components/portfolioBanner"
import SEO from "../components/seo"

import BannerImg from "../images/contact-banner.jpg"

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact Us" description="Contact us to scoot now!" />
      <Banner
        img={BannerImg}
        title="contact the e-scooter experts!"
        subheader="Our electric bikes and scooters are designed to be user-friendly, and our mobile app streamlines the rental process, making it easy and hassle-free to rent. You can download our app from the App Store or Google Play and use it to rent an electric bike or scooter, track your ride history, and view your rental details."
      />
      <FormContact title="Contact" />
    </Layout>
  )
}
