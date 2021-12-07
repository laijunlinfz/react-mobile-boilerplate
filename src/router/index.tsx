import { Suspense, Fragment } from 'react';
import routes from "./config";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorBoundary from '@/components/ErrorBoundary';
import { RouteConfig } from 'react-router-config';

const Index = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<div></div>}>
          <Switch>
            {routes.map((routeItem: RouteConfig) => {
              const { key = '', path, component: Component, routes: children } = routeItem;
              return <Route
                key={key}
                path={path}
                render={props => {

                  const ChildrenCom = Array.isArray(children) && children.length ? (<Switch>
                    {children.map((child: RouteConfig) => {
                      const { component: ccomponent, path: cpath, exact: cexact = false, key: ckey } = child;
                      return <Route key={ckey} path={cpath} exact={cexact} component={ccomponent} />
                    })}
                  </Switch>) : undefined;

                  const CurComponet = Component ? <Component {...props} /> : undefined;

                  return <Fragment>
                    {CurComponet ? CurComponet : ''}
                    {ChildrenCom ? ChildrenCom : ''}
                  </Fragment>
                }}
              />
            })}
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Index;
