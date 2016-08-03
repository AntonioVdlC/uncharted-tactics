const lord = {
    "type": "Lord",
    "value": 3,
    "infighting": true,
    "action": {
        "plain": [
            [
                {move: true, capture: true}, 
                {move: true, capture: true}, 
                {move: true, capture: true}
            ],
            [
                {move: false, capture: false}, 
                {move: false, capture: false}, 
                {move: false, capture: false}
            ],
            [
                {move: true, capture: true}, 
                {move: false, capture: false}, 
                {move: true, capture: true}
            ]
        ],
        "hill": [
            [
                {move: true, capture: true}, 
                {move: true, capture: true}, 
                {move: true, capture: true}
            ],
            [
                {move: false, capture: false}, 
                {move: false, capture: false}, 
                {move: false, capture: false}
            ],
            [
                {move: true, capture: true}, 
                {move: false, capture: false}, 
                {move: true, capture: true}
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

module.exports = lord
