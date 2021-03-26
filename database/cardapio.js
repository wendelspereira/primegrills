const cardapio = {
    primes: {
        itens: [
            { id: 1, name: 'Prime Simple', description: 'Double Blend Bovina - Muçarela', price: 6.9 },
            { id: 2, name: 'Prime Fitness', img: 'http://...', description: 'Single Blend Bovina - Tomate, Alface, Cebola Grelhada, Omelete', price: 9.9 },
            { id: 3, name: 'Prime Egg', img: 'http://...', description: 'Single Blend Bovina - Muçarela, Double Egg, Cheddar, Tomate, Alface, Cebola Grelhada', price: 9.9 },
            { id: 4, name: 'Prime Itália', img: 'http://...', description: 'Single Blend Bovina - Calabresa, Presunto, Muçarela, Tomate, Alface, Cebola Grelhada', price: 10.9 },
            { id: 5, name: 'Prime Brasil', img: 'http://...', description: 'Filé de frango, Presunto, Muçarela, Tomate, Alface, Cebola Grelhada', price: 9.9 },
            { id: 6, name: 'Prime Especial Grills', img: 'http://...', description: 'Triple Blend Bovina - Purê de Batata, Muçarela, Bacon Especial, Calabresa, Single Egg, Tomate, Alface, Cebola Grelhada + Porção de Fritas', price: 19.9 },
        ],
        acomps: ['maionese', 'ketchup', 'mostarda', 'alho',
            'verde', 'maionese caseira', 'rosê', 'barbecue',
            'purê de batata', 'purê de macaxeira'
        ],
    },

    bebidas: {
        volumes: [
            { id: 1, name: 'Refrigerante de lata', price: 3.5, },
            { id: 2, name: 'Refrigerante de 1L', price: 6 },
            { id: 3, name: 'Refrigerante de 2L', price: 8.5 },
        ],
        saborMarca: ['Coca-Cola', 'Fanta', 'Sprite', 'Schin-guaraná', 'Kuat', 'Schin-cola']
    },

    petiscos: {
        itens: [
            {id: 1, type: 'pastel', name: 'Pastel de Queijo', price: 4.9 },
            {id: 1, type: 'pastel', name: 'Pastel de Carne de Sol', price: 4.9 },
            {id: 1, type: 'pastel', name: 'Pastel de Blend Bolvina', price: 4.9 },
            {id: 1, type: 'pastel', name: 'Pastel de Frango', price: 4.9 }
        ],
        acomp: ['Muçarela', 'Catupiry', 'Cheddar', 'Purê de Batata', 'Purê de Macaxeira'],
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
