<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use File;

class Angular extends Controller
{
    public function serve(){
        return File::get(public_path('dist/index.html'));
    }
}
