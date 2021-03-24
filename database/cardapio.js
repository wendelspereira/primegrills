const menu = {
    PrimeGrill: {

        primes: [
            { name: 'Prime Simple', description: 'Double Blend Bovina - Muçarela', price: 6.9 },
            { name: 'Prime Fitness', description: 'Single Blend Bovina - Tomate, Alface, Cebola Grelhada, Omelete', price: 9.9 },
            { name: 'Prime Egg', description: 'Single Blend Bovina - Muçarela, Double Egg, Cheddar, Tomate, Alface, Cebola Grelhada', price: 9.9 },
            { name: 'Prime Itália', description: 'Single Blend Bovina - Calabresa, Presunto, Muçarela, Tomate, Alface, Cebola Grelhada', price: 10.9 },
            { name: 'Prime Brasil', description: 'Filé de frango, Presunto, Muçarela, Tomate, Alface, Cebola Grelhada', price: 9.9 },
            { name: 'Prime Especial Grills', description: 'Triple Blend Bovina - Purê de Batata, Muçarela, Bacon Especial, Calabresa, Single Egg, Tomate, Alface, Cebola Grelhada + Porção de Fritas', price: 19.9 },
        ],
        
        sideDish: {
            sauce: ['maionese', 'ketchup', 'mostarda', 'alho',
                'verde', 'maionese caseira', 'rosê', 'barbecue',
                'purê de batata', 'purê de macaxeira'],
            drink: [
                { item: 'refrigerante de lata', flavors: ['coca', 'fanta', 'guaraná'], price: 3.5 },
                { item: 'refrigerante de 1L', flavors: ['coca', 'fanta', 'guaraná'], price: 6 },
                { item: 'refrigerante de 2L', flavors: ['coca', 'fanta', 'guaraná'], price: 8.5 },
                { item: 'refrigerante de 2L', flavors: ['coca', 'fanta', 'guaraná'], price: 8.5 },
            ],
        },

        pasteis: {
            sideDish: ['Muçarela', 'Catupiry', 'Cheddar', 'Purê de Batata', 'Purê de Macaxeira'],
            items: [
                { name: 'Frango', price: 4.9 },
                { name: 'Blend Bovina', price: 4.9 },
                { name: 'Queijo', price: 4.9 },
            ]
        },
        
        portions: {
            items: {
                coxinhas: [
                    { name: 'single', price: 9.9 },
                    { name: 'family', price: 19.9 },
                ],
                bataraRecheada: [
                    {
                        name: 'single', description: 'Calabresa, Bacon, Cheddar, Catupiry',
                        description: 'Calabresa, Bacon, Cheddar, Catupiry', price: 6.9
                    },
                    {
                        name: 'family', description: 'Calabresa, Bacon, Cheddar, Catupiry',
                        description: 'Calabresa, Bacon, Cheddar, Catupiry', price: 9.9
                    },

                ]
            }
        }
    },

    Sobremesa: {
        items: {
            acai: {
                items: [
                    { name: 'copo-500ml', price: 10, sideDishAmount: 0 },
                    { name: 'bandeija', price: 12, sideDishAmount: 0 },
                    { name: 'barca', price: 25, sideDishAmount: 0 },
                ],
                sideDish: [
                    'Granola', 'Lascas de Chocolate', 'Amendoim', 'M&M',
                    'Leite em Pó', 'Farinha Láctea', 'Jujuba', 'Paçoca',
                    'Marshmallow', 'Cereja', 'Tubitos', 'Beijinho', 'Brigadeiro',
                    'Bis', 'Bombom', 'Nutella', 'Oreo'
                ],
                fruits: ['Morango', 'Banana', 'Kiwi'],
            },

            milkShake: {
                flavors: [
                    { flavor: 'Chocolate', price: 8, sideDishAmount: 2 },
                    { flavor: 'Morango', price: 8, sideDishAmount: 2 },
                    { flavor: 'Ninho', price: 8, sideDishAmount: 2 },
                ],
                sideDish: [
                    'Lascas de Chocolate', 'Amendoim', 'M&M',
                    'Leite em Pó', 'Farinha Láctea', 'Paçoca',
                    'Tubitos', 'Brigadeiro', 'Bis', 'Bombom', 'Oreo'
                ],
            }
        }
    }
}
