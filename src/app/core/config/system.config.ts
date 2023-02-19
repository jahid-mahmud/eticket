import moment, { unitOfTime } from "moment";
import { TableConfig } from "app/modules/components/table/table.component";

export const Roles = {
    ADMIN: 'Admin',
    ENTERPRISE: 'Enterprise',
    PRIVATE:"Private",
    PROJECT_USER: 'project_user',
    GUEST: 'app_user',
    customers: ['admin', 'customers.admin', 'customers.read'],
    dashboard: ['admin', 'dashboard.admin', 'dashboard.read'],
    vendors: ['admin', 'vendors.admin', 'vendors.read'],
    users:['superuser'],
    project_management:['superuser'],
    inventory: {
        warehouses: [
            'admin',
            'warehouses.admin',
            'warehouses.read'
        ],
        products: [
            'admin',
            'products.admin',
            'products.read',
            'products.read-list'
        ],
        orders: [
            'admin',
            'vendor-orders.admin',
            'vendor-orders.read'
        ],
    },
    sales: {
        delivery_challan: [
            'admin',
            'delivery-challans.admin',
            'delivery-challans.read'
        ],
        invoice: [
            'admin',
            'invoices.admin',
            'invoices.read'
        ],
        return_challan: [
            'admin',
            'return-challans.admin',
            'return-challans.read'
        ]
    },
    payments: {
        cash_book: [
            'admin',
            'transactions.admin',
            'transactions.read',
            'cashbook.read'
        ],
        bank_book: [
            'admin',
            'transactions.admin',
            'transactions.read',
            'bankbook.read'
        ],
        receivables: [
            'admin',
            'receivables.admin',
            'receivables.read'
        ],
        payables: [
            'admin',
            'payables.admin',
            'payables.read',
        ]
    },
    reports: [
        'admin',
        'reports.admin',
        'reports.read'
    ],
    settings: {
        users: [
            'app_user',
            'admin',
            'users.admin',
            'users.read'
        ],
        area_code: [
            'admin',
            'area-codes.admin',
            'area-codes.read'
        ],
        banks: [
            'admin',
            'banks.admin',
            'banks.read'
        ]
    }
};


export const RolesArray = Object.values(Roles);


export const DurationTypes = {
    SEVEN_DAYS: "SEVEN_DAYS",
    WEEK: "WEEKLY",
    THREE_MONTHS: "THREE_MONTHS",
    SIX_MONTHS: "SIX_MONTHS",
}


export const DateViewFormatEnum = {
    Date: 0,
    Week: 1,
    Month: 2,
    Quarter: 3
}

export const DefaultSelectedDate = {
    duration: 7,
    value: DateViewFormatEnum.Date,
}

export const DefaultSelectedTime = {
    duration: 12,
    value: 2,
}

export const StockTypes = {
    manual: 'Manual',
    order: 'Order'
}

export const deliveryType = {
    urgent: 'Urgent',
    regular: 'Regular'
}

export const paymentType = {
    cash: 'Cash',
    bank: 'Bank'
}

export const purchaseType = {
    local: 'Local',
    import: 'Import'
}

export const statusCodes = {
    error: 0,
    success: 1,
    warning: 2
}


export const getDifferenceFromValue = (value, type: unitOfTime.Diff = "minutes") => {
    const timeNow = moment("00:00:00", "HH:mm:ss");
    return moment(value, "HH:mm:ss").diff(timeNow, type, true);
}

export const applicationCardTableConfig = (headerData: any, tableCellTemplate): TableConfig => {
    return {
        templateConfig: Object.keys(headerData).map(item => {
            return {
                key: item,
                title: item,
                cellTemplate: tableCellTemplate
            }
        })
    }
}