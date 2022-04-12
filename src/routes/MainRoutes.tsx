import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// Event list
const EventPage = Loadable(lazy(() => import('views/event-page')));
// Berichte
const TicketsPage = Loadable(lazy(() => import('views/berichte/tickets')));
const ScansPage = Loadable(lazy(() => import('views/berichte/scans')));
const EinlassPage = Loadable(lazy(() => import('views/berichte/einlass')));
// Scanne
const ScannenPage = Loadable(lazy(() => import('views/scannen')));
// Clearing
const ClearingPage = Loadable(lazy(() => import('views/clearing')));
// gerate
const UbersichtPage = Loadable(lazy(() => import('views/gerate/ubersicht')));
const NeuPage = Loadable(lazy(() => import('views/gerate/neu')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <EventPage />
        },
        {
            path: '/eventlist',
            element: <EventPage />
        },
        {
            path: '/tickets',
            element: <TicketsPage />
        },
        {
            path: '/scans',
            element: <ScansPage />
        },
        {
            path: '/einlass',
            element: <EinlassPage />
        },
        {
            path: '/scannen',
            element: <ScannenPage />
        },
        {
            path: '/clearing',
            element: <ClearingPage />
        },
        {
            path: '/ubersicht',
            element: <UbersichtPage />
        },
        {
            path: '/neu',
            element: <NeuPage />
        }
    ]
};

export default MainRoutes;
