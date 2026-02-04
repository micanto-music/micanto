<?php

namespace App\Http\Requests\API;

use Illuminate\Foundation\Http\FormRequest;

/**
 * @property array<string> $songs
 * @property array<mixed> $data
 */
class TrackUpdateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // Authorization is handled in Controller
    }

    public function rules(): array
    {
        return [
            'tracks' => 'required|array',
            'tracks.*' => 'integer|exists:tracks,id',
            'title' => 'sometimes|string|max:255',
            'album' => 'sometimes|string|max:255',
            'artists' => 'sometimes|array',
            'artists.*' => 'string|max:255',
            'year' => 'sometimes|nullable|integer',
            'track' => 'sometimes|integer',
            'disc' => 'sometimes|integer',
            'genre' => 'sometimes|nullable|string',
            'explicit' => 'sometimes|string', // Comes as 'true'/'false' string from JS
            'compilation' => 'sometimes|string',
            'image' => 'sometimes|image|max:2048',
        ];
    }
}
