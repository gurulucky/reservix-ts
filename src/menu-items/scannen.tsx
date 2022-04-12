import { FormattedMessage } from 'react-intl';
// assets
import { IconBarcode } from '@tabler/icons';
// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const scannen = {
    id: 'scannen',
    type: 'group',
    children: [
        {
            id: 'scannen',
            title: <FormattedMessage id="Scannen" />,
            type: 'item',
            url: '/scannen',
            icon: IconBarcode,
            breadcrumbs: false
        }
    ]
};

export default scannen;
