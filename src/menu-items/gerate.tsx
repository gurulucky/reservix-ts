// assets
// import { IconTool, IconSmartHome, IconNews } from '@tabler/icons';
// ==============================|| gerate MENU ITEMS ||============================== //

const gerate = {
    id: 'pages',
    type: 'group',
    children: [
        {
            id: 'gerate',
            title: 'Geräte',
            type: 'collapse',
            // icon: IconTool,
            children: [
                {
                    id: 'ubersicht',
                    title: 'Übersicht',
                    type: 'item',
                    // icon: IconSmartHome,
                    url: '/ubersicht',
                    breadcrumbs: false
                },
                {
                    id: 'Neu',
                    title: 'Neu',
                    type: 'item',
                    // icon: IconNews,
                    url: '/neu',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default gerate;
