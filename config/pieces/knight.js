const knight = {
    "type": "Knight",
    "value": 3,
    "infighting": true,
    "action": {
        "plain": [
            [
                {move: false, capture: false}, 
                {move: true, capture: true}, 
                {move: false, capture: false}, 
                {move: true, capture: true}, 
                {move: false, capture: false}
            ],
            [
                {move: true, capture: true}, 
                {move: false, capture: false}, 
                {move: false, capture: false}, 
                {move: false, capture: false}, 
                {move: true, capture: true}
            ],
            [
                {move: false, capture: false}, 
                {move: false, capture: false}, 
                {move: false, capture: false}, 
                {move: false, capture: false}, 
                {move: false, capture: false}
            ],
            [
                {move: false, capture: false}, 
                {move: false, capture: false}, 
                {move: false, capture: true}, 
                {move: false, capture: false}, 
                {move: false, capture: false}
            ],
            [
                {move: false, capture: false}, 
                {move: false, capture: false}, 
                {move: false, capture: false}, 
                {move: false, capture: false}, 
                {move: false, capture: false}
            ]
        ],
        "hill": [
            [
                {move: false, capture: false}, 
                {move: true, capture: true}, 
                {move: false, capture: false}, 
                {move: true, capture: true}, 
                {move: false, capture: false}
            ],
            [
                {move: true, capture: true}, 
                {move: false, capture: false}, 
                {move: false, capture: false}, 
                {move: false, capture: false}, 
                {move: true, capture: true}
            ],
            [
                {move: false, capture: false}, 
                {move: false, capture: false}, 
                {move: false, capture: false}, 
                {move: false, capture: false}, 
                {move: false, capture: false}
            ],
            [
                {move: false, capture: false}, 
                {move: false, capture: false}, 
                {move: false, capture: true}, 
                {move: false, capture: false}, 
                {move: false, capture: false}
            ],
            [
                {move: false, capture: false}, 
                {move: false, capture: false}, 
                {move: false, capture: false}, 
                {move: false, capture: false}, 
                {move: false, capture: false}
            ]
        ],
        "river": [
            [
                {move: false, capture: false}, 
                {move: true, capture: false}, 
                {move: false, capture: false}
            ],
            [
                {move: false, capture: false}, 
                {move: false, capture: false}, 
                {move: false, capture: false}
            ],
            [
                {move: false, capture: false}, 
                {move: false, capture: false}, 
                {move: false, capture: false}
            ]
        ]
    }
}

module.exports = knight
