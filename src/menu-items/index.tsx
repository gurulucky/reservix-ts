import eventlist from './eventlist';
import berichte from './berichte';
import scannen from './scannen';
import clearing from './clearing';
import gerate from './gerate';
import { NavItemType } from 'types';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
    items: [eventlist, berichte, scannen, clearing, gerate]
};

export default menuItems;
