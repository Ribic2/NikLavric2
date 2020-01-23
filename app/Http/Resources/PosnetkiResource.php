<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class PosnetkiResource extends Resource
{
    /**
     * Indicates if the resource's collection keys should be preserved.
     *
     * @var bool
     */
    public $preserveKeys = true;

    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return[
            'idPosnetki' => $this->idPosnetki,
            'naslovPosnetka' => $this->naslovPosnetka,
            'opisPosnetka' => $this->opisPosnetka,
            'videoLink' => $this->videoLink,
            'thumbnail' => $this->thumbnail,
            'naslovPosnetkaApi' => $this->naslovPosnetkaApi
        ];
    }
}
