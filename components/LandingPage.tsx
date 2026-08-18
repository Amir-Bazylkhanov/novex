import React from 'react';
import Hero from './landing/Hero.tsx';
import HowItWorks from './landing/HowItWorks.tsx';
import RobotTeam from './landing/RobotTeam.tsx';
import StudentDashboardPreview from './landing/StudentDashboardPreview.tsx';
import TeacherPanel from './landing/TeacherPanel.tsx';
import ImpactStats from './landing/ImpactStats.tsx';
import FAQ from './landing/FAQ.tsx';
import FinalCTA from './landing/FinalCTA.tsx';

const LandingPage: React.FC = () => {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <RobotTeam />
      <StudentDashboardPreview />
      <TeacherPanel />
      <ImpactStats />
      <FAQ />
      <FinalCTA />
    </main>
  );
};

export default LandingPage;
