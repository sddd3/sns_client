import { memo, VFC } from 'react'
import { Route, Switch } from 'react-router';

import Index from '../components/pages/index/Index';
import SignIn from '../components/pages/signin/SignIn';
import dashboardRoute from './dashboard/DashboardRoute';
import newPostRoute from './new/NewRoute'
import Page404 from '../components/pages/common/Error/Page404';
import Registration from '../components/pages/registration/Registration';

const Router: VFC = memo(() => {
    return (
        <Switch>
            <Route exact path='/'>
                <Index />
            </Route>
            <Route exact path='/signin'>
                <SignIn />
            </Route>
            <Route exact path='/register'>
                <Registration />
            </Route>
            {/* propsが受け取れ、propsの中のmatchのurlには/homeが格納されている */}
            <Route path='/dashboard' render={({ match: { url } }) => (
                <Switch>
                    {dashboardRoute.map((route) => (
                        <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
                            {route.children}
                        </Route>
                    ))}
                </Switch>
            )} />
            <Route path='/new' render={({ match: { url } }) => (
                <Switch>
                    {newPostRoute.map((route) => (
                        <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
                            {route.children}
                        </Route>
                    ))}
                </Switch>
            )} />
            <Route path='*'>
                <Page404 />
            </Route>
        </Switch>
    )
});

export default Router
