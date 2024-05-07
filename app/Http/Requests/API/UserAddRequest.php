<?php

namespace App\Http\Requests\API;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

/**
 * @property-read string $password
 * @property-read string $name
 * @property-read string $email
 */
class UserAddRequest extends FormRequest
{
    /** @return array<mixed> */
    public function rules(): array
    {
        return [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'image' => 'sometimes',
            'password' => ['required', Password::defaults()],
            'is_admin' => 'sometimes',
        ];
    }
}
