// Главная (приветственная) страница сайта — то, что видит гость, заходя на novex.
// Сама по себе почти ничего не содержит: просто собирает подряд секции
// из папки components/landing/ — герой-блок, «как это работает», команда роботов,
// панель для учителей, цифры о влиянии и финальный призыв к регистрации.
import React from 'react';
import Hero from './landing/Hero.tsx';
import HowItWorks from './landing/HowItWorks.tsx';
import RobotTeam from './landing/RobotTeam.tsx';
import TeacherPanel from './landing/TeacherPanel.tsx';
import ImpactStats from './landing/ImpactStats.tsx';
import FinalCTA from './landing/FinalCTA.tsx';

const LandingPage: React.FC = () => {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <RobotTeam />
      <TeacherPanel />
      <ImpactStats />
      <FinalCTA />
    </main>
  );
};

export default LandingPage;
