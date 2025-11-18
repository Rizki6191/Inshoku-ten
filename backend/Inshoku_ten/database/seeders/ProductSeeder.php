<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\Category;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $washoku = Category::where('name', 'like', '%Washoku%')->first()->id;
        $nomimono = Category::where('name', 'like', '%Nomimono%')->first()->id;
        $okashi = Category::where('name', 'like', '%Okashi%')->first()->id;

        $products = [
            // 🍚 Washoku
            [
                'category_id' => $washoku,
                'name' => '寿司 (Sushi)',
                'description' => 'Traditional Japanese dish with vinegared rice and fresh seafood or vegetables.',
                'price' => 48000,
                'image' => 'sushi.jpg',
            ],
            [
                'category_id' => $washoku,
                'name' => '天ぷら (Tempura)',
                'description' => 'Lightly battered and deep-fried seafood or vegetables, crispy and golden.',
                'price' => 42000,
                'image' => 'tempura.jpg',
            ],
            [
                'category_id' => $washoku,
                'name' => 'ラーメン (Ramen)',
                'description' => 'Noodles served in savory broth, topped with meat, egg, and vegetables.',
                'price' => 38000,
                'image' => 'ramen.jpg',
            ],

            // 🍵 Nomimono
            [
                'category_id' => $nomimono,
                'name' => '抹茶 (Matcha)',
                'description' => 'Finely ground green tea powder known for its rich taste and health benefits.',
                'price' => 25000,
                'image' => 'matcha.jpg',
            ],
            [
                'category_id' => $nomimono,
                'name' => 'ラムネ (Ramune)',
                'description' => 'Japanese carbonated soft drink with a marble seal and fruity flavor.',
                'price' => 18000,
                'image' => 'ramune.jpg',
            ],
            [
                'category_id' => $nomimono,
                'name' => '日本茶 (Nihoncha)',
                'description' => 'Traditional Japanese green tea, refreshing and calming.',
                'price' => 15000,
                'image' => 'nihoncha.jpg',
            ],

            // 🍡 Okashi
            [
                'category_id' => $okashi,
                'name' => '団子 (Dango)',
                'description' => 'Sweet rice dumplings on a skewer, often served with sweet soy sauce glaze.',
                'price' => 22000,
                'image' => 'dango.jpg',
            ],
            [
                'category_id' => $okashi,
                'name' => 'たい焼き (Taiyaki)',
                'description' => 'Fish-shaped pastry filled with red bean paste or custard.',
                'price' => 20000,
                'image' => 'taiyaki.jpg',
            ],
            [
                'category_id' => $okashi,
                'name' => 'ポッキー (Pocky)',
                'description' => 'Crunchy biscuit sticks coated in chocolate, a popular Japanese snack.',
                'price' => 16000,
                'image' => 'pocky.jpg',
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
