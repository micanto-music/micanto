<?php

namespace App\Http\Requests\API;

use Illuminate\Foundation\Http\FormRequest;

/**
 * @property array<string> $songs
 * @property array<mixed> $data
 */
class TrackUpdateRequest extends FormRequest
{
    /** @return array<mixed> */
//    public function rules(): array
//    {
//        return [
//            'tracks' => 'required|array',
//            'formData' => 'required|array',
//        ];
//    }
}
