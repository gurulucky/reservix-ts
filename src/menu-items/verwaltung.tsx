// assets
// import { IconTool, IconSmartHome, IconNews } from '@tabler/icons';
// ==============================|| verwaltung MENU ITEMS ||============================== //

const verwaltung = {
    id: 'verwaltung',
    type: 'group',
    children: [
        {
            id: 'verwaltung',
            title: 'Verwaltung',
            type: 'collapse',
            // icon: IconTool,
            children: [
                {
                    id: 'exporte',
                    title: 'Exporte',
                    type: 'item',
                    // icon: IconSmartHome,
                    url: '/exporte',
                    breadcrumbs: false
                },
                {
                    id: 'scannzeiten',
                    title: 'Scannzeiten',
                    type: 'item',
                    // icon: IconNews,
                    url: '/scannzeiten',
                    breadcrumbs: false
                },
                {
                    id: 'scanstatus',
                    title: 'Scan-Status zurücksetzen',
                    type: 'item',
                    // icon: IconNews,
                    url: '/scanstatus',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default verwaltung;
