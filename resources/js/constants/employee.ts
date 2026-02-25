export const SELECT_OPTION_POSITION: SelectOptions<Employee['position']> = [
    { label: 'Staff', value: 'staff' },
    { label: 'Admin', value: 'admin' },
    { label: 'Manager', value: 'manager' },
];

export const SELECT_OPTION_STATUS: SelectOptions<boolean> = [
    { label: 'Active', value: true },
    { label: 'Inactive', value: false },
];
