"use client";
import Contact from "../components/Contact";
import { Hero } from "../components/Hero";

import Layout from "../components/Layout";
import { AboutUs } from "../components/AboutUs";
import Faq from "../components/Faq";

import Customers from "../components/Customers";
import { Values } from "@/components/Values";
import Beliefs from "@/components/Beliefs";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Values />
      <AboutUs />
      <Beliefs />
      <Faq />
      <Contact />
      <Customers />
    </Layout>
  );
}
