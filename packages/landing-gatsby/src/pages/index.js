import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import { agencyTheme } from 'common/theme/agency';
import { ResetCSS } from 'common/assets/css/style';
import { GlobalStyle, AgencyWrapper } from 'containers/Agency/agency.style';
import Navbar from 'containers/Agency/Navbar';
import BannerSection from 'containers/Agency/BannerSection';
import FeatureSection from 'containers/Agency/FeatureSection';
import AboutUsSection from 'containers/Agency/AboutUsSection';
import WorkHistory from 'containers/Agency/WorkHistory';
//import BlogSection from 'containers/Agency/BlogSection';
//import TestimonialSection from 'containers/Agency/TestimonialSection';
//import TeamSection from 'containers/Agency/TeamSection';
//import VideoSection from 'containers/Agency/VideoSection';
import FaqSection from 'containers/Agency/FaqSection';
//import NewsletterSection from 'containers/Agency/NewsletterSection';
import QualitySection from 'containers/Agency/QualitySection';
import Footer from 'containers/Agency/Footer';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import '@redq/reuse-modal/es/index.css';
import SEO from 'components/seo';

export default () => {
  return (
    <ThemeProvider theme={agencyTheme}>
      <Fragment>
        <SEO title="AKG Roofing and Specialty Services, INC" />
        <Modal />
        <ResetCSS />
        <GlobalStyle />
        {/* End of agency head section */}
        {/* Start agency wrapper section */}
        <AgencyWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <FeatureSection />
          <AboutUsSection />
          <WorkHistory />
          {/**<BlogSection /> */}
          <QualitySection />
          {/**<VideoSection />*/}
          {/**<TestimonialSection />*/}
          {/**<TeamSection />*/}
          <FaqSection />
          {/*<NewsletterSection />*/}
          <div
            style={{
              width: '100%',
              display: 'flex',
              margin: '0 auto',
              textAlign: 'center',
              justifyContent: 'center',
            }}
          >
            <a
              href={'https://www.expertise.com/fl/miami/roofing'}
              style={{
                display: 'inline-block',
                border: '0',
                position: 'relative',
                margin: '0 auto',
              }}
            >
              <img
                style={{ width: '200px', display: 'block', height: '160px' }}
                src={
                  'https://res.cloudinary.com/expertise-com/image/upload/f_auto,fl_lossy,q_auto/w_auto/remote_media/awards/fl_miami_roofing_2021_transparent.svg'
                }
                alt={'Top Miami Roofers'}
              />
            </a>
          </div>
          <Footer />
        </AgencyWrapper>
        {/* End of agency wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
