import Dashboard from "../../components/pages/dashboard/Dashboard";
import Page404 from "../../components/pages/common/Error/Page404";

const dashboardRoute = [
    {
        path: '/',
        exact: true,
        children: <Dashboard />
    },
    {
        path: '*',
        exact: false,
        children: <Page404 />
    },
];

export default dashboardRoute