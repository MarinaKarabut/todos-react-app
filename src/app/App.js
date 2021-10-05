import { Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Loader from '../shared/components/Loader';
import routes from './routes';
import Navbar from '../client/Navbar';

const HomePage = lazy(() => import('../client/pages/HomePage'));
const TodosPage = lazy(() => import('../client/pages/TodosPage'));

const App = () => {
  const { home, todos } = routes;
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={home} component={HomePage} />
          <Route exact path={todos} component={TodosPage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
