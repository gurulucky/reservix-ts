// assets
// import { IconTool, IconSmartHome, IconNews } from '@tabler/icons';
// ==============================|| profile MENU ITEMS ||============================== //

const profile = {
    id: 'profile',
    type: 'group',
    children: [
        {
            id: 'profile',
            title: 'Profile',
            type: 'collapse',
            // icon: IconTool,
            children: [
                {
                    id: 'bearbeiten',
                    title: 'Bearbeiten',
                    type: 'item',
                    // icon: IconSmartHome,
                    url: '/bearbeiten',
                    breadcrumbs: false
                },
                {
                    id: 'zuweisen',
                    title: 'Zuweisen',
                    type: 'item',
                    // icon: IconNews,
                    url: '/zuweisen',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default profile;
