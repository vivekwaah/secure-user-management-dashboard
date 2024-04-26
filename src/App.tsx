import React from 'react';
import AppTemplate from './components/template/template';
import AppHeader from './components/app/header';
import AppFooter from './components/app/footer';
import AppRoutes from './routes/Routes';

const App: React.FC = () => {
  return (
    <AppTemplate>
      {{
        header: <AppHeader />,
        footer: <AppFooter />,
        content: <AppRoutes />,
      }}
    </AppTemplate>
  );
};

export default App;