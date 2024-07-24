import Animals from './components/basics/Animals.jsx';
import App from './App.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx';
import Login from './components/dashboard/Login.jsx';
import Detail from './components/dashboard/Detail.jsx';
import Profile from './components/basics/Profile.jsx';

const routes = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "dashboard",
        element: <Dashboard />,
        children: [
        { index: true, element: <Animals /> },
        {
            path: 'detail',
            element: <Detail></Detail>
        }
        ]
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "profile/:name",
        element: <Profile />
    },
];

export default routes;