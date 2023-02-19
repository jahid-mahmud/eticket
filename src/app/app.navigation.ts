
import { FuseNavigationItem } from '@fuse/components/navigation';
import { Roles } from './core/config/system.config';

export const defaultNavigation: FuseNavigationItem[] = [
    
    {
        id: 'designation',
        title: 'Designation',
        roles: [Roles.ADMIN],
        type: 'basic',
        classes: {
            icon: "material"
        },
        icon: 'mat_solid:group',
        link: '/designation',
    },
    {
        id: 'lead-source',
        title: 'Lead Source',
        roles: [Roles.ADMIN],
        type: 'basic',
        classes: {
            icon: "material"
        },
        icon: 'mat_solid:group',
        link: '/lead-source',
    },
    {
        id: 'lead-stage',
        title: 'Lead Stage',
        roles: [Roles.ADMIN],
        type: 'basic',
        classes: {
            icon: "material"
        },
        icon: 'mat_solid:group',
        link: '/lead-stage',
    },
    {
        id: 'products',
        title: 'Products',
        roles: [Roles.ADMIN],
        type: 'basic',
        classes: {
            icon: "material"
        },
        icon: 'mat_solid:group',
        link: '/products',
    },
    {
        id: 'activity',
        title: 'Activity',
        roles: [Roles.ADMIN],
        type: 'basic',
        classes: {
            icon: "material"
        },
        icon: 'mat_solid:group',
        link: '/activity',
    },
    {
        id: 'role_mapping',
        title: 'Role Mapping',
        roles: [Roles.ADMIN],
        type: 'basic',
        classes: {
            icon: "material"
        },
        icon: 'mat_solid:group',
        link: '/role-mapping',
    },
    {
        id: 'message',
        title: 'Messages',
        roles: [Roles.ADMIN],
        type: 'basic',
        classes: {
            icon: "material"
        },
        icon: 'mat_solid:group',
        link: '/message',
    }
    








    // {
    //     id: 'dashboard',
    //     title: 'Dashboard',
    //     type: 'basic',
    //     roles: Roles.dashboard,
    //     classes: {
    //         icon: "material"
    //     },
    //     icon: 'mat_solid:dashboard',
    //     link: '/dashboard',

    // },
    // {
    //     id: 'customers',
    //     title: 'Customers',
    //     type: 'basic',
    //     roles: Roles.customers,
    //     classes: {
    //         icon: "material"
    //     },
    //     icon: 'mat_solid:business',
    //     link: '/customers',

    // },
    // {
    //     id: 'profile',
    //     title: 'My Profile',
    //     type: 'basic',
    //     roles: Roles.customers,
    //     classes: {
    //         icon: "material"
    //     },
    //     icon: 'mat_solid:people',
    //     link: '/addprofile',

    // },
    // {
    //     id: 'vendors',
    //     title: 'Vendors',
    //     type: 'basic',
    //     roles: Roles.vendors,
    //     classes: {
    //         icon: "material"
    //     },
    //     icon: 'mat_solid:people',
    //     link: '/vendors',

    // },
    // {
    //     id: 'inventory',
    //     title: 'Inventory',
    //     type: 'collapsable',
    //     roles: [
    //         Roles.GUEST,
    //     ],
    //     classes: {
    //         icon: "material"
    //     },
    //     icon: 'mat_solid:assignment',
    //     children: [
    //         {
    //             id: 'warehouses',
    //             title: 'Warehouses',
    //             type: 'basic',
    //             roles: Roles.inventory.warehouses,
    //             classes: {
    //                 icon: "material"
    //             },
    //             link: 'inventory/warehouses',
    //         },
    //         {
    //             id: 'products',
    //             title: 'Products',
    //             type: 'basic',
    //             roles: Roles.inventory.products,
    //             classes: {
    //                 icon: "material"
    //             },
    //             link: 'inventory/products',
    //         },
    //         {
    //             id: 'orders',
    //             title: 'Orders',
    //             type: 'basic',
    //             roles: Roles.inventory.orders,
    //             classes: {
    //                 icon: "material"
    //             },
    //             link: 'inventory/orders',
    //         },
    //     ]

    // },{
    //     id: 'sales',
    //     title: 'Sales',
    //     type: 'collapsable',
    //     roles: [
    //         Roles.GUEST,
    //     ],
    //     classes: {
    //         icon: "material"
    //     },
    //     icon: 'mat_solid:sell',
    //     children: [
    //         {
    //             id: 'delivery-challan',
    //             title: 'Delivery Challan',
    //             type: 'basic',
    //             roles: Roles.sales.delivery_challan,
    //             classes: {
    //                 icon: "material"
    //             },
    //             link: 'sales/delivery-challan',
    //         },
    //         {
    //             id: 'invoice',
    //             title: 'Invoice',
    //             type: 'basic',
    //             roles: Roles.sales.invoice,
    //             classes: {
    //                 icon: "material"
    //             },
    //             link: 'sales/invoice',
    //         },
    //         {
    //             id: 'return-challan',
    //             title: 'Return Challan',
    //             type: 'basic',
    //             roles: Roles.sales.return_challan,
    //             classes: {
    //                 icon: "material"
    //             },
    //             link: 'sales/return-challan',
    //         }
    //     ]


    // },
    // {
    //     id: 'payments',
    //     title: 'Payments',
    //     type: 'collapsable',
    //     roles: [

    //         'admin',
    //         'transactions.admin',
    //         'transactions.read',
    //         'cashbook.read',
    //         'bankbook.read',
    //         'receivables.admin',
    //         'receivables.read',
    //         'payables.admin',
    //         'payables.read',
    //     ],
    //     classes: {
    //         icon: "material"
    //     },
    //     icon: 'mat_solid:credit_card',
    //     children: [
    //         {
    //             id: 'cash-book',
    //             title: 'Cash Book',
    //             type: 'basic',
    //             roles: Roles.payments.cash_book,
    //             classes: {
    //                 icon: "material"
    //             },
    //             link: 'payments/cash-book',
    //         },
    //         {
    //             id: 'bank-book',
    //             title: 'Bank Book',
    //             type: 'basic',
    //             roles: Roles.payments.bank_book,
    //             classes: {
    //                 icon: "material"
    //             },
    //             link: 'payments/bank-book',
    //         },
    //         {
    //             id: 'receivables',
    //             title: 'Receivables',
    //             type: 'basic',
    //             roles: Roles.payments.receivables,
    //             classes: {
    //                 icon: "material"
    //             },
    //             link: 'payments/receivables',
    //         },
    //         {
    //             id: 'payables',
    //             title: 'Payables',
    //             type: 'basic',
    //             roles: Roles.payments.payables,
    //             classes: {
    //                 icon: "material"
    //             },
    //             link: 'payments/payables',
    //         }
    //     ]


    // },
    // {
    //     id: 'reports',
    //     title: 'Reports',
    //     type: 'basic',
    //     roles: Roles.reports,
    //     classes: {
    //         icon: "material"
    //     },
    //     icon: 'mat_solid:assignment_turned_in',
    //     link: '/reports',

    // },
    // {
    //     id: 'settings',
    //     title: 'Settings',
    //     type: 'collapsable',
    //     roles: [
    //         Roles.GUEST,
    //     ],
    //     classes: {
    //         icon: "material"
    //     },
    //     icon: 'mat_solid:settings',
    //     children: [
    //         {
    //             id: 'users',
    //             title: 'Users',
    //             type: 'basic',
    //             roles: Roles.settings.users,
    //             classes: {
    //                 icon: "material"
    //             },
    //             link: 'settings/users',
    //         },
    //         {
    //             id: 'area-code',
    //             title: 'Employee ID',
    //             type: 'basic',
    //             roles: Roles.settings.area_code,
    //             classes: {
    //                 icon: "material"
    //             },
    //             link: 'settings/area-codes',
    //         },
    //         {
    //             id: 'banks',
    //             title: 'Banks',
    //             type: 'basic',
    //             roles: Roles.settings.banks,
    //             classes: {
    //                 icon: "material"
    //             },
    //             link: 'settings/banks',
    //         },
    //     ]

    // }
];



