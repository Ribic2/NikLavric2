<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('posnetki')->insert([

            [
                'idPosnetki' => 1,
                'naslovProjekta' => 'Ford Slovenija Slovenija Winter campaign 2020',
                'opisPosnetka' => 'Client: Ford Slovenija;Production: Lab 007;Producer: Lea Bajt;Director: Miha Kačič;DOP: Rožle Bregar, Peter Perunović;Post production: Nik Lavrič',
                'videoLink' => 'https://www.youtube.com/embed/rtiYy29ueTo?list=PLyEfQXlqMsZCqtJE0O1ud2QXb3DugfRQi',
                'thumbnail' => 'ford_01.jpg'
            ],
            [
                'idPosnetki' => 2,
                'naslovProjekta' => 'Obrtna zbornica 50 let',
                'opisPosnetka' => 'Client: Obrtno-podjetniška zbornica Slovenija;
                Production: Lab 007;
                Director and DOP: Miha Kačič;
                Post production: Nik Lavrič
                ',
                'videoLink' => 'https://www.youtube.com/embed/ijouZo-HLu4',
                'thumbnail' => 'ozs_50.jpg'
            ],
            [
                'idPosnetki' => 3,
                'naslovProjekta' => 'Pirnar Contemporary Doors',
                'opisPosnetka' => 'Client: Pirnar;
                Production: Lab 007;
                Animation: Nik Lavrič',
                'videoLink' => 'https://www.youtube.com/embed/cNY5PlmdNrc',
                'thumbnail' => 'pirnar_01.jpg'
            ],
            [
                'idPosnetki' => 4,
                'naslovProjekta' => 'Lidl Otvoritev logističnega centra Arja vas',
                'opisPosnetka' => 'Client: Lidl Slovenija;
                Production: Lab 007;
                DOP: Miha Kačič;
                Post production: Nik Lavrič
                ',
                'videoLink' => 'https://www.youtube.com/embed/xs9sv5HjXHc',
                'thumbnail' => 'lidl_01.jpg'
            ],
            [
                'idPosnetki' => 5,
                'naslovProjekta' => 'Epicenter 19',
                'opisPosnetka' => 'Client: Spid.si;
                DOP: Nik Lavrič;
                Post production: Nik Lavrič
                ',
                'videoLink' => 'https://www.youtube.com/embed/uO6qysJpWWM',
                'thumbnail' => 'ec19.jpg'
            ],
            [
                'idPosnetki' => 6,
                'naslovProjekta' => 'Epicenter 20',
                'opisPosnetka' => 'Client: Spid.si;
                DOP: Nik Lavrič, Jaka Kordiš;
                Post production: Nik Lavrič
                ',
                'videoLink' => 'https://www.youtube.com/embed/Zn03APUwTiA',
                'thumbnail' => 'ec20_02.jpg'
            ],
            [
                'idPosnetki' => 7,
                'naslovProjekta' => 'Mastercard Sonic Brand',
                'opisPosnetka' => 'Client: Mastercard Slovenija;
                Agency: Mayer McCann;
                Director and DOP: Miha Kačič;
                Post production: Nik Lavrič
                ',
                'videoLink' => 'https://www.youtube.com/embed/lnO1jbqcWto',
                'thumbnail' => 'mc_01.jpg'
            ],
            [
                'idPosnetki' => 8,
                'naslovProjekta' => 'Jan Plestenjak, Kvatropirci & Coto - Res je dober dan',
                'opisPosnetka' => 'Client: Jan Plestenjak;
                Production: Instant;
                Director and DOP: Vladan Janković;
                Edit: Nik Lavrič;
                Color Correction: Klemen Smolar
                ',
                'videoLink' => 'https://www.youtube.com/embed/ims8JARsIXs',
                'thumbnail' => 'janplestenjak_01.jpg'
            ],
            [
                'idPosnetki' => 9,
                'naslovProjekta' => 'Hvala fanta',
                'opisPosnetka' => 'Director: David Belina;
                Actors: Borna Miljavac Purgar, Alen Mastnak, Jan Doljak;
                Written by: Alen Mastnak, Nejc Jezernik, Tomaž Kranjc, David Belina;
                DOP: Maks Bernard;
                Post production: Nik Lavrič;
                PA: Urban Pajk;
                Grip: Alex Delay;
                Boom operator: Žan Krošl;
                Sound recorder: Alex Slokan
                ',
                'videoLink' => 'https://www.youtube.com/embed/LctgiId2-VU',
                'thumbnail' => 'hvalafanta_01.jpg'
            ],
            [
                'idPosnetki' => 10,
                'naslovProjekta' => 'Bartog - Logistic center',
                'opisPosnetka' => 'Production: Real Frame;
                DOP: Jernej Auguštin;
                Edit: Jernej Auguštin;
                Grade & logo animation: Nik Lavrič;
                ',
                'videoLink' => 'https://www.youtube.com/embed/Ba1PVhtRbb4',
                'thumbnail' => 'bartog_01.jpg'
            ],
            [
                'idPosnetki' => 11,
                'naslovProjekta' => 'Petrol IAM',
                'opisPosnetka' => 'PClient: Petrol - IAM Ljubljana;
                Director: David Belina;
                DOP: Nejc Hafner;
                1st AC: Jaka Sajovic;
                AD: Jaka Dolinar;
                Gaffer: Blaž Sluga;
                Post production: Nik Lavrič;
                BTS: Zoja Etja Pavlovski;
                Social media: Neja Rečnik
                ',
                'videoLink' => 'https://www.youtube.com/embed/ylTMJE3o_ic',
                'thumbnail' => 'petrol_01.jpg'
            ],
            [
                'idPosnetki' => 12,
                'naslovProjekta' => 'Cosylab radiotherapy products suite',
                'opisPosnetka' => 'Client: Cosylab;
                Agency: Rubikongral;
                Animation: Nik Lavrič
                ',
                'videoLink' => 'https://www.youtube.com/embed/xppDlPI6glc',
                'thumbnail' => 'cosylab_01.jpg'
            ],
        ]);
    }
}