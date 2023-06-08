<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
                'name' => 'required', 'max:255',
                'email' => 'required', 'unique:users',
                'password' => 'required', 'string', 'min:6', 'confirmed'
            ];
        }elseif($method == 'PUT'){
            $validated = [
                'name' => 'required', 'max:255',
                'email' => 'required', 'unique:users,email,'. $this->user->id,
                'password' => 'nullable', 'min:6', 'confirmed',
            ];
        }

        return $validated;
    }
}
