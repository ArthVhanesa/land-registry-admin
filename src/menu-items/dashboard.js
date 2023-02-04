// assets
import { IconDashboard, IconCurrencyRupee, IconBell, IconNews } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconCurrencyRupee, IconBell, IconNews };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'buysell',
            title: 'Buy / Sell',
            type: 'collapse',
            icon: icons.IconCurrencyRupee,
            // breadcrumbs: false
            children: [
                {
                    id: 'buy',
                    title: 'Buy Land',
                    type: 'item',
                    url: '/dashboard/buy-sell/buy',
                    breadcrumbs: false
                },
                {
                    id: 'sell',
                    title: 'Sell Land',
                    type: 'item',
                    url: '/dashboard/buy-sell/sell',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'notification',
            title: 'Notification',
            type: 'item',
            url: '/dashboard/notification',
            icon: icons.IconBell,
            breadcrumbs: false
        },
        {
            id: 'instruction',
            title: 'Instruction',
            type: 'collapse',
            icon: icons.IconNews,
            children: [
                {
                    id: 'tabler-icons',
                    title: 'Tabler Icons',
                    type: 'item',
                    url: '/dashboard/icons/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: 'Material Icons',
                    type: 'item',
                    url: '/dashboard/icons/material-icons',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default dashboard;
