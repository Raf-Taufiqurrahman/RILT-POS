<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        $method = $this->method();

        if($method == 'POST'){
            $validated = [
                'name' => 'required|max:255',
                'image' => 'required|mimes:png,jpg,jpeg|max:2028',
                'category_id' => 'required',
                'description' => 'required',
                'barcode' => 'required|unique:products',
                'buy_price' => 'required|numeric',
                'sell_price' => 'required|numeric',
                'stock' => 'required|numeric'
            ];
        }elseif($method == 'PUT'){
            $validated = [
                'name' => 'required|max:255',
                'image' => 'required|mimes:png,jpg,jpeg|max:2028',
                'category_id' => 'required',
                'description' => 'required',
                'barcode' => 'required|unique:products,barcode,' .$this->product->id,
                'buy_price' => 'required|numeric',
                'sell_price' => 'required|numeric',
                'stock' => 'required|numeric'
            ];
        }

        return $validated;
    }
}
