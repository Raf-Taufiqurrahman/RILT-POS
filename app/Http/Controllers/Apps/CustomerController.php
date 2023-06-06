<?php

namespace App\Http\Controllers\Apps;

use App\Models\Customer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\CustomerRequest;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $customers = Customer::query()
            ->search('name')
            ->latest()
            ->paginate(7)->withQueryString();

        // render view
        return inertia('Customer/Index', [
            'customers' => $customers,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // render view
        return inertia('Customer/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CustomerRequest $request)
    {
        // create new customer
        Customer::create([
            'name' => $request->name,
            'address' => $request->address,
            'no_telp' => $request->no_telp,
        ]);

        // render view
        return redirect(route('apps.customer.index'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Customer $customer)
    {
        // render view
        return inertia('Customer/Edit', [
            'customer' => $customer,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CustomerRequest $request, Customer $customer)
    {
        // update customer data by id
        $customer->update([
            'name' => $request->name,
            'address' => $request->address,
            'no_telp' => $request->no_telp,
        ]);

        // render view
        return redirect(route('apps.customer.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Customer $customer)
    {
        // delete customer data by id
        $customer->delete();

        // render view
        return redirect(route('apps.customer.index'));
    }
}
