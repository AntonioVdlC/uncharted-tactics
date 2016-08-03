const archer = {
    "type": "Archer",
    "value": 3,
    "infighting": false,
    "action": {
        "plain": [
            [
                {move: false, capture: false}, 
                {move: false, capture: true}, 
                {move: false, capture: true}, 
                {move: false, capture: true}, 
                {move: false, capture: false}
            ],
            [
                {move: false, capture: true}, 
                {move: false, capture: false}, 
                {move: true, capture: false}, 
                {move: false, capture: false}, 
                {move: false, capture: true}
            ],
            [
                {move: false, capture: true}, 
                {move: true, capture: false}, 
                {move: false, capture: false}, 
                {move: true, capture: false}, 
                {move: false, capture: true}
            ],
            [
                {move: false, capture: false}, 
                {move: false, capture: false}, 
                {move: true, capture: false}, 
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
                {move: false, capture: true}, 
                {move: false, capture: true}, 
                {move: false, capture: true}, 
                {move: false, capture: true}, 
                {move: false, capture: true}
            ],
            [
                {move: false, capture: true}, 
                {move: false, capture: false}, 
                {move: true, capture: false}, 
                {move: false, capture: false}, 
                {move: false, capture: true}
            ],
            [
                {move: false, capture: true}, 
                {move: true, capture: false}, 
                {move: false, capture: false}, 
                {move: true, capture: false}, 
                {move: false, capture: true}
            ],
            [
                {move: false, capture: false}, 
                {move: false, capture: false}, 
                {move: true, capture: false}, 
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

module.exports = archer
