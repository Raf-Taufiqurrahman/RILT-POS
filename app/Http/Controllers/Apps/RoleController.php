<?php

namespace App\Http\Controllers\Apps;

use Illuminate\Http\Request;
use App\Http\Requests\RoleRequest;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use Spatie\Permission\Models\Permission;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // get all role data
        $roles = Role::query()
            ->with('permissions')
            ->when($request->search, fn($query) => $query->where('name', 'like', '%'. $request->search . '%'))
            ->latest()
            ->paginate(7)->withQueryString();

        // render view
        return inertia('Role/Index', [
            'roles' => $roles,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // get all permissions data
        $permissions = Permission::all()->map(function($permission){
            return [
                'label' => $permission->name,
                'value' => $permission->id,
            ];
        });

        // render view
        return inertia('Role/Create', [
            'permissions' => $permissions
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RoleRequest $request)
    {
        // create new role
        $role = Role::create(['name' => $request->name]);

        // assign permissions to role
        $role->givePermissionTo($request->permissions);

        // render view
        return redirect(route('apps.role.index'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Role $role)
    {
        // get all permissions data
        $permissions = Permission::all()->map(function($permission){
            return [
                'label' => $permission->name,
                'value' => $permission->id,
            ];
        });

        // render view
        return inertia('Role/Edit', [
            'permissions' => $permissions,
            'role' => $role->load('permissions'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(RoleRequest $request, Role $role)
    {
        // update role data by id
        $role->update(['name' => $request->name]);

        // assign permissions to role
        $role->syncPermissions($request->permissions);

        // render view
        return redirect(route('apps.role.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Role $role)
    {
        // delete role by id
        $role->delete();

        // render view
        return back();
    }
}
