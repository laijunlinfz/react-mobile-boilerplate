import { Suspense } from 'react';
import routes from "./config";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes  } from 'react-router-config'
import ErrorBoundary from '@/components/ErrorBoundary';

const Index = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<div></div>}>
          {renderRoutes(routes)}
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Index;
