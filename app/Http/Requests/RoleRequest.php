<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RoleRequest extends FormRequest
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
                'name' => 'required|max:255|unique:roles',
                'permissions' => 'required|min:1|array',
            ];
        }elseif($method == 'PUT'){
            $validated = [
                'name' => 'required|max:255|unique:roles,name,' . $this->role->id,
                'permissions' => 'nullable|min:1|array',
            ];
        }

        return $validated;
    }
}
