const pieces = [
    {
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
    },{
        "type": "Slinger",
        "value": 2,
        "infighting": false,
        "action": {
            "plain": [
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
                    {move: false, capture: false}, 
                    {move: false, capture: false}, 
                    {move: false, capture: false}
                ]
            ],
            "hill": [
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
    },{
        "type": "Lancer",
        "value": 2,
        "infighting": true,
        "action": {
            "plain": [
                [
                    {move: false, capture: false}, 
                    {move: true, capture: true}, 
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
            ],
            "hill": [
                [
                    {move: false, capture: false}, 
                    {move: true, capture: true}, 
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
    },{
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
    },{
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
    },{
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
    },{
        "type": "Bishop",
        "value": 3,
        "infighting": true,
        "action": {
            "plain": [
                [
                    {move: true, capture: true}, 
                    {move: false, capture: false}, 
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
                    {move: false, capture: false}, 
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
    },{
        "type": "Tower",
        "value": 4,
        "infighting": true,
        "action": {
            "plain": [
                [
                    {move: false, capture: false}, 
                    {move: true, capture: true}, 
                    {move: false, capture: false}
                ],
                [
                    {move: true, capture: true}, 
                    {move: false, capture: false}, 
                    {move: true, capture: true}
                ],
                [
                    {move: false, capture: false}, 
                    {move: true, capture: true}, 
                    {move: false, capture: false}
                ]
            ],
            "hill": [
                [
                    {move: false, capture: false}, 
                    {move: true, capture: true}, 
                    {move: false, capture: false}
                ],
                [
                    {move: true, capture: true}, 
                    {move: false, capture: false}, 
                    {move: true, capture: true}
                ],
                [
                    {move: false, capture: false}, 
                    {move: true, capture: true}, 
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
    },{
        "type": "Royal Guard",
        "value": 4,
        "infighting": true,
        "action": {
            "plain": [
                [
                    {move: true, capture: true}, 
                    {move: true, capture: true}, 
                    {move: true, capture: true}
                ],
                [
                    {move: true, capture: true}, 
                    {move: false, capture: false}, 
                    {move: true, capture: true}
                ],
                [
                    {move: false, capture: false}, 
                    {move: true, capture: true}, 
                    {move: false, capture: false}
                ]
            ],
            "hill": [
                [
                    {move: true, capture: true}, 
                    {move: true, capture: true}, 
                    {move: true, capture: true}
                ],
                [
                    {move: true, capture: true}, 
                    {move: false, capture: false}, 
                    {move: true, capture: true}
                ],
                [
                    {move: false, capture: false}, 
                    {move: true, capture: true}, 
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
    },{
        "type": "General",
        "value": 5,
        "infighting": true,
        "action": {
            "plain": [
                [
                    {move: true, capture: true}, 
                    {move: true, capture: true}, 
                    {move: true, capture: true}
                ],
                [
                    {move: true, capture: true}, 
                    {move: false, capture: false}, 
                    {move: true, capture: true}
                ],
                [
                    {move: true, capture: true}, 
                    {move: true, capture: true}, 
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
                    {move: true, capture: true}, 
                    {move: false, capture: false}, 
                    {move: true, capture: true}
                ],
                [
                    {move: true, capture: true}, 
                    {move: true, capture: true}, 
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
    },{
        "type": "King",
        "value": 0,
        "infighting": true,
        "action": {
            "plain": [
                [
                    {move: true, capture: true}, 
                    {move: true, capture: true}, 
                    {move: true, capture: true}
                ],
                [
                    {move: true, capture: true}, 
                    {move: false, capture: false}, 
                    {move: true, capture: true}
                ],
                [
                    {move: true, capture: true}, 
                    {move: true, capture: true}, 
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
                    {move: true, capture: true}, 
                    {move: false, capture: false}, 
                    {move: true, capture: true}
                ],
                [
                    {move: true, capture: true}, 
                    {move: true, capture: true}, 
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
]

module.exports = pieces
