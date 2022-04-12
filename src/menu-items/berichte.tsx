import { IconReport, IconTicket, IconScan, IconReportAnalytics } from '@tabler/icons';
// ==============================|| berichte MENU ITEMS ||============================== //

const berichte = {
    id: 'berichte',
    type: 'group',
    children: [
        {
            id: 'berichte',
            title: 'Berichte',
            type: 'collapse',
            icon: IconReport,
            children: [
                {
                    id: 'tickets',
                    title: 'Tickets',
                    type: 'item',
                    url: '/tickets',
                    icon: IconTicket,
                    breadcrumbs: false
                },
                {
                    id: 'scans',
                    title: 'Scans',
                    type: 'item',
                    icon: IconScan,
                    url: '/scans',
                    breadcrumbs: false
                },
                {
                    id: 'einlass-bericht',
                    title: 'Einlass-Bericht',
                    type: 'item',
                    icon: IconReportAnalytics,
                    url: '/einlass',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default berichte;
