<?php

namespace App\Http\Controllers;

class SearchController extends Controller
{
    public function __construct()
    {
    }

    public function list()
    {
        $list = ['hi'];

        return \Response::json($list);
    }
}
