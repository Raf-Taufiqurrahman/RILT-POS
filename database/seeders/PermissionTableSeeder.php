<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // dashboard permissions
        Permission::create(['name' => 'dashboard-index']);
        Permission::create(['name' => 'dashboard-sales_chart']);
        Permission::create(['name' => 'dashboard-sales_today']);
        Permission::create(['name' => 'dashboard-profits_today']);
        Permission::create(['name' => 'dashboard-best_selling_product']);
        Permission::create(['name' => 'dashboard-product_stock']);

        // user permissions
        Permission::create(['name' => 'user-index']);
        Permission::create(['name' => 'user-create']);
        Permission::create(['name' => 'user-update']);
        Permission::create(['name' => 'user-delete']);

        // role permissions
        Permission::create(['name' => 'role-index']);
        Permission::create(['name' => 'role-create']);
        Permission::create(['name' => 'role-update']);
        Permission::create(['name' => 'role-delete']);

        // permission permissions
        Permission::create(['name' => 'permission-index']);

        // category permissions
        Permission::create(['name' => 'category-index']);
        Permission::create(['name' => 'category-create']);
        Permission::create(['name' => 'category-update']);
        Permission::create(['name' => 'category-delete']);

        // product permissions
        Permission::create(['name' => 'product-index']);
        Permission::create(['name' => 'product-create']);
        Permission::create(['name' => 'product-update']);
        Permission::create(['name' => 'product-delete']);

        // customer permissions
        Permission::create(['name' => 'customer-index']);
        Permission::create(['name' => 'customer-create']);
        Permission::create(['name' => 'customer-update']);
        Permission::create(['name' => 'customer-delete']);

        // transactions permissions
        Permission::create(['name' => 'transaction-index']);

        // sales permissions
        Permission::create(['name' => 'sales-index']);

        // profit permissions
        Permission::create(['name' => 'profit-index']);
    }
}
