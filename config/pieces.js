const pieces = [
    {
        "name": "Pawn",
        "value": 1,
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
        "name": "Slinger",
        "value": 2,
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
        "name": "Lancer",
        "value": 2,
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
        "name": "Archer",
        "value": 3,
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
        "name": "Lord",
        "value": 3,
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
        "name": "Knight",
        "value": 3,
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
        "name": "Bishop",
        "value": 3,
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
        "name": "Tower",
        "value": 4,
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
        "name": "Royal Guard",
        "value": 4,
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
        "name": "General",
        "value": 5,
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
        "name": "King",
        "value": 0,
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
