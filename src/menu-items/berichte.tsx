import { FormattedMessage } from 'react-intl';
// assets
import { IconReport, IconTicket, IconScan, IconReportAnalytics } from '@tabler/icons';
// ==============================|| berichte MENU ITEMS ||============================== //

const berichte = {
    id: 'berichte',
    type: 'group',
    children: [
        {
            id: 'berichte',
            title: <FormattedMessage id="Berichte" />,
            type: 'collapse',
            icon: IconReport,
            children: [
                {
                    id: 'tickets',
                    title: <FormattedMessage id="Tickets" />,
                    type: 'item',
                    url: '/tickets',
                    icon: IconTicket,
                    breadcrumbs: false
                },
                {
                    id: 'scans',
                    title: <FormattedMessage id="Scans" />,
                    type: 'item',
                    icon: IconScan,
                    url: '/scans',
                    breadcrumbs: false
                },
                {
                    id: 'einlass-bericht',
                    title: <FormattedMessage id="Einlass-Bericht" />,
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
