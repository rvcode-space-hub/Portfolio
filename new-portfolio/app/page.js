import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import CardSection from '../components/ProjectsSection.jsx'
import CertificationsSection from '@/components/CertificationsSection.jsx'
export default function page() {
  return (
    <div>
      <HeroSection />
      <CardSection />
      <CertificationsSection/>
    </div>
  )
}
