// assets
// import { IconCalendarEvent } from '@tabler/icons';
// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const event = {
    id: 'event',
    type: 'group',
    children: [
        {
            id: 'eventlist',
            title: 'Event-List',
            type: 'item',
            url: '/eventlist',
            // icon: IconCalendarEvent,
            breadcrumbs: false
        }
    ]
};

export default event;
