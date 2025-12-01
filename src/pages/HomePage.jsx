import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import  TestimonialsSection  from '../components/TestimonialsSection';
import { CTASection } from '../components/CTASection';
import PartnerLogoSlider from '../components/PartnerLogoSlider';
import StudentPlacementSlider from '../components/StudentPlacementSlider';
import EventGallerySlider from '../components/EventGallery';
import AIEnabledLearning from '../components/AIEnabledLearning';

const HomePage = () => {
    return (
        <Layout>
            <HeroSection />
            {/* <AIEnabledLearning /> */}
            <PartnerLogoSlider />
            
            <StudentPlacementSlider />
            <FeaturesSection />
            <TestimonialsSection />
            <EventGallerySlider />
            <CTASection />
        </Layout>
    );
}

export default HomePage;
