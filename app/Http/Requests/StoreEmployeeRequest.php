<?php

namespace App\Http\Requests;

use App\Enum\EmployeePositionEnum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreEmployeeRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:256'],
            'position' => ['required', 'string', Rule::enum(EmployeePositionEnum::class)],
            'start_date' => ['required', 'date', Rule::date()->beforeOrEqual(today())],
            'status' => ['required', 'boolean']
        ];
    }

    public function attributes()
    {
        return [
            'name' => 'Name',
            'position' => 'Position',
            'start_date' => 'Start Date',
            'Status' => 'Status',
        ];
    }
}
