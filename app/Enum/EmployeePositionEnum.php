<?php

namespace App\Enum;

enum EmployeePositionEnum: string
{
    case ADMIN = 'admin';
    case MANAGER = 'manager';
    case STAFF = 'staff';
}
