<?php
namespace App\Http\Requests\API\Player;

use Illuminate\Foundation\Http\FormRequest;

/**
 * @property string $song The song's ID
 */
class UpdateSessionRequest extends FormRequest
{
    /** @return array<mixed> */
    public function rules(): array
    {
        return [
            'time' => 'required',
            'track' => 'required'
        ];
    }
}
