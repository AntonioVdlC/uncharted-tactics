const pawn = {
    "type": "Pawn",
    "value": 1,
    "infighting": true,
    "action": {
        "plain": [
            [
                {move: false, capture: true}, 
                {move: true, capture: false}, 
                {move: false, capture: true}
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
        ],
        "hill": [
            [
                {move: false, capture: true}, 
                {move: true, capture: false}, 
                {move: false, capture: true}
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

module.exports = pawn
