<?php

use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\IndexController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', IndexController::class)->name('index');

Route::resource("employee", EmployeeController::class)->except(["edit"]);
