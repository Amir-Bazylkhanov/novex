import React from 'react';
import Hero from './landing/Hero.tsx';
import ProblemSection from './landing/ProblemSection.tsx';
import HowItWorks from './landing/HowItWorks.tsx';
import RobotTeam from './landing/RobotTeam.tsx';
import AIPersonalization from './landing/AIPersonalization.tsx';
import SubjectsGrid from './landing/SubjectsGrid.tsx';
import StudentDashboardPreview from './landing/StudentDashboardPreview.tsx';
import TeacherPanel from './landing/TeacherPanel.tsx';
import ImpactStats from './landing/ImpactStats.tsx';
import Pricing from './landing/Pricing.tsx';
import FAQ from './landing/FAQ.tsx';
import FinalCTA from './landing/FinalCTA.tsx';

const LandingPage: React.FC = () => {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <RobotTeam />
      <AIPersonalization />
      <SubjectsGrid />
      <StudentDashboardPreview />
      <TeacherPanel />
      <ImpactStats />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
  );
};

export default LandingPage;
