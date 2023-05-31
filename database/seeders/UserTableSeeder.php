<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // create administrator user
        $user = User::create([
            'name' => 'Administrator',
            'email' => 'admin@dev.com',
            'password' => bcrypt('password'),
        ]);

        // get all permissions data
        $permissions = Permission::all();

        // get admin role data
        $role = Role::where('name', 'admin')->first();

        // assign permissions to admin role
        $role->givePermissionTo($permissions);

        // assign role to user
        $user->assignRole($role);
    }
}
