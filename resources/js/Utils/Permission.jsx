import { usePage } from '@inertiajs/inertia-react'
import React from 'react'

export default function Permission(permissions) {

    // define props
    const {auth} = usePage().props;

    // define permission from props
    let allPermissions = auth.permissions;

    // define permission value
    let hasPermission = false;

    // define permission data
    permissions.forEach(function(permission){
        if(allPermissions[permission]) hasPermission = true;
    })

    return hasPermission;
}
