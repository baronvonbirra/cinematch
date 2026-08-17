import React, { useState } from 'react';
import { Film, Skull, Clock, Sparkles, Shuffle, HeartHandshake, Eye, TrendingUp, AlertTriangle } from 'lucide-react';
import { Tabs } from '../components/Tabs';
import { Dashboard } from '../components/Dashboard';

import { RecommendationsTab } from '../tabs/RecommendationsTab';
import { AntiTab } from '../tabs/AntiTab';
import { TimelineTab } from '../tabs/TimelineTab';
import { SurpriseTab } from '../tabs/SurpriseTab';
import { CounterfactualTab } from '../tabs/CounterfactualTab';
import { EmotionalTab } from '../tabs/EmotionalTab';
import { TonalTab } from '../tabs/TonalTab';
import { TrendTab } from '../tabs/TrendTab';
import { ForbiddenTab } from '../tabs/ForbiddenTab';

const TAB_CONFIG = [
  { id: 'recommendations', label: 'Recomendaciones', icon: Film },
  { id: 'anti', label: 'Películas Malditas', icon: Skull },
  { id: 'timeline', label: 'Timeline Cinemático', icon: Clock },
  { id: 'surprise', label: 'Sorpresas', icon: Sparkles },
  { id: 'counterfactual', label: 'Cine Contrafáctico', icon: Shuffle },
  { id: 'emotional', label: 'Sensaciones', icon: HeartHandshake },
  { id: 'tonal', label: 'Traductor de Crítico', icon: Eye },
  { id: 'trend', label: 'Tendencias', icon: TrendingUp },
  { id: 'forbidden', label: 'Película Prohibida', icon: AlertTriangle }
];

export const Analysis = ({ profile, username }) => {
  const [activeTab, setActiveTab] = useState('recommendations');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'recommendations':
        return <RecommendationsTab username={username} />;
      case 'anti':
        return <AntiTab username={username} />;
      case 'timeline':
        return <TimelineTab username={username} profile={profile} />;
      case 'surprise':
        return <SurpriseTab username={username} />;
      case 'counterfactual':
        return <CounterfactualTab username={username} />;
      case 'emotional':
        return <EmotionalTab username={username} profile={profile} />;
      case 'tonal':
        return <TonalTab username={username} profile={profile} />;
      case 'trend':
        return <TrendTab username={username} />;
      case 'forbidden':
        return <ForbiddenTab username={username} />;
      default:
        return <RecommendationsTab username={username} />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <Dashboard profile={profile} />
      <Tabs activeTab={activeTab} onChangeTab={setActiveTab} tabs={TAB_CONFIG} />
      <div>{renderActiveTab()}</div>
    </div>
  );
};
