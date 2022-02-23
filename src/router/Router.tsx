import { memo, useContext, VFC } from 'react'
import { Redirect, Route, Switch } from 'react-router';

import Index from '../components/pages/index/Index';
import SignIn from '../components/pages/signin/SignIn';
import dashboardRoute from './dashboard/DashboardRoute';
import newPostRoute from './new/NewRoute'
import Page404 from '../components/pages/common/Error/Page404';
import Registration from '../components/pages/registration/Registration';
// import { UserContext } from '../providers/UserProvier';
import { useRecoilValue } from 'recoil';
import { userState } from '../store/UserState';

const Router: VFC = memo(() => {
    // const { userInfo } = useContext(UserContext);
    // const loggedIn = userInfo ? userInfo.loggedIn : false;
    const userInfo = useRecoilValue(userState);
    const loggedIn = userInfo ? userInfo.loggedIn : false;

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
                    {dashboardRoute.map((route) => {
                        if (loggedIn === true) {
                            return <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
                                {route.children}
                            </Route>
                        } else {
                            return <Redirect key={route.path} to='/signin' />
                        }
                    })}
                </Switch>
            )} />
            <Route path='/new' render={({ match: { url } }) => (
                <Switch>
                    {newPostRoute.map((route) => {
                        if (loggedIn === true) {
                            return <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
                                {route.children}
                            </Route>
                        } else {
                            return <Redirect key={route.path} to='/signin' />
                        }
                    })}
                </Switch>
            )} />
            <Route path='*'>
                <Page404 />
            </Route>
        </Switch>
    )
});

export default Router
