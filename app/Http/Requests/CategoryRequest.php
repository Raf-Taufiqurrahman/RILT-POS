<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CategoryRequest extends FormRequest
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
                'name' => 'required|max:255|unique:categories',
                'image' => 'required|mimes:png,jpg,jpeg|max:2028',
            ];
        }elseif($method == 'PUT'){
            $validated = [
                'name' => 'required|max:255|unique:categories,name,' . $this->category->id,
                'image' => 'nullable|mimes:png,jpg,jpeg|max:2028',
            ];
        }

        return $validated;
    }
}
