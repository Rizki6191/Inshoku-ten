<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            ['name' => '和食 (Washoku) - Traditional Food'],
            ['name' => '飲み物 (Nomimono) - Beverages'],
            ['name' => 'お菓子 (Okashi) - Snacks'],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
