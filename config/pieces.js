const pieces = [
    {
        "name": "Pawn",
        "value": 1,
        "action": {
            "plain": [
                [{move: 0, capture: 1}, {move: 1, capture: 0}, {move: 0, capture: 1}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
            ],
            "hill": [
                [{move: 0, capture: 1}, {move: 1, capture: 0}, {move: 0, capture: 1}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
            ],
            "river": [
                [{move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
            ]
        }
    },{
        "name": "Slinger",
        "value": 2,
        "action": {
            "plain": [
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 1}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
            ],
            "hill": [
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 2}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
            ],
            "river": [
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
            ]
        }
    },{
        "name": "Lancer",
        "value": 2,
        "action": {
            "plain": [
                [{move: 0, capture: 0}, {move: 1, capture: 2}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
            ],
            "hill": [
                [{move: 0, capture: 0}, {move: 1, capture: 2}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
            ],
            "river": [
                [{move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
            ]
        }
    },{
        "name": "Archer",
        "value": 3,
        "action": {
            "plain": [
                [{move: 0, capture: 0}, {move: 0, capture: 1}, {move: 0, capture: 1}, {move: 0, capture: 1}, {move: 0, capture: 0}],
                [{move: 0, capture: 1}, {move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 1}],
                [{move: 0, capture: 1}, {move: 1, capture: 0}, {move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 1}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
            ],
            "hill": [
                [{move: 0, capture: 1}, {move: 0, capture: 2}, {move: 0, capture: 2}, {move: 0, capture: 2}, {move: 0, capture: 1}],
                [{move: 0, capture: 2}, {move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 2}],
                [{move: 0, capture: 2}, {move: 1, capture: 0}, {move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 2}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
            ],
            "river": [
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
            ]
        }
    },{
        "name": "Lord",
        "value": 3,
        "action": {
            "plain": [
                [{move: 1, capture: 1}, {move: 1, capture: 1}, {move: 1, capture: 1}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 1, capture: 1}, {move: 0, capture: 0}, {move: 1, capture: 1}]
            ],
            "hill": [
                [{move: 1, capture: 1}, {move: 1, capture: 1}, {move: 1, capture: 1}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 1, capture: 1}, {move: 0, capture: 0}, {move: 1, capture: 1}]
            ],
            "river": [
                [{move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
            ]
        }
    },{
        "name": "Knight",
        "value": 3,
        "action": {
            "plain": [
                [{move: 0, capture: 0}, {move: 1, capture: 1}, {move: 0, capture: 0}, {move: 1, capture: 1}, {move: 0, capture: 0}],
                [{move: 1, capture: 1}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 1, capture: 1}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 1}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
            ],
            "hill": [
                [{move: 0, capture: 0}, {move: 1, capture: 1}, {move: 0, capture: 0}, {move: 1, capture: 1}, {move: 0, capture: 0}],
                [{move: 1, capture: 1}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 1, capture: 1}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 1}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
            ],
            "river": [
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
            ]
        }
    },{
        "name": "Bishop",
        "value": 3,
        "action": {
            "plain": [
                [{move: 2, capture: 2}, {move: 0, capture: 0}, {move: 2, capture: 2}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 2, capture: 2}, {move: 0, capture: 0}, {move: 2, capture: 2}]
            ],
            "hill": [
                [{move: 1, capture: 1}, {move: 0, capture: 0}, {move: 1, capture: 1}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 1, capture: 1}, {move: 0, capture: 0}, {move: 1, capture: 1}]
            ],
            "river": [
                [{move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
            ]
        }
    },{
        "name": "Tower",
        "value": 4,
        "action": {
            "plain": [
                [{move: 0, capture: 0}, {move: 10, capture: 10}, {move: 0, capture: 0}],
                [{move: 10, capture: 10}, {move: 0, capture: 0}, {move: 10, capture: 10}],
                [{move: 0, capture: 0}, {move: 10, capture: 10}, {move: 0, capture: 0}]
            ],
            "hill": [
                [{move: 0, capture: 0}, {move: 1, capture: 1}, {move: 0, capture: 0}],
                [{move: 1, capture: 1}, {move: 0, capture: 0}, {move: 1, capture: 1}],
                [{move: 0, capture: 0}, {move: 1, capture: 1}, {move: 0, capture: 0}]
            ],
            "river": [
                [{move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
            ]
        }
    },{
        "name": "Royal Guard",
        "value": 4,
        "action": {
            "plain": [
                [{move: 2, capture: 2}, {move: 2, capture: 2}, {move: 2, capture: 2}],
                [{move: 2, capture: 2}, {move: 0, capture: 0}, {move: 2, capture: 2}],
                [{move: 0, capture: 0}, {move: 1, capture: 1}, {move: 0, capture: 0}]
            ],
            "hill": [
                [{move: 1, capture: 1}, {move: 1, capture: 1}, {move: 1, capture: 1}],
                [{move: 1, capture: 1}, {move: 0, capture: 0}, {move: 1, capture: 1}],
                [{move: 0, capture: 0}, {move: 1, capture: 1}, {move: 0, capture: 0}]
            ],
            "river": [
                [{move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
            ]
        }
    },{
        "name": "General",
        "value": 5,
        "action": {
            "plain": [
                [{move: 10, capture: 10}, {move: 10, capture: 10}, {move: 10, capture: 10}],
                [{move: 10, capture: 10}, {move: 0, capture: 0}, {move: 10, capture: 10}],
                [{move: 10, capture: 10}, {move: 10, capture: 10}, {move: 10, capture: 10}]
            ],
            "hill": [
                [{move: 1, capture: 1}, {move: 1, capture: 1}, {move: 1, capture: 1}],
                [{move: 1, capture: 1}, {move: 0, capture: 0}, {move: 1, capture: 1}],
                [{move: 1, capture: 1}, {move: 1, capture: 1}, {move: 1, capture: 1}]
            ],
            "river": [
                [{move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
            ]
        }
    },{
        "name": "King",
        "value": 0,
        "action": {
            "plain": [
                [{move: 1, capture: 1}, {move: 1, capture: 1}, {move: 1, capture: 1}],
                [{move: 1, capture: 1}, {move: 0, capture: 0}, {move: 1, capture: 1}],
                [{move: 1, capture: 1}, {move: 1, capture: 1}, {move: 1, capture: 1}]
            ],
            "hill": [
                [{move: 1, capture: 1}, {move: 1, capture: 1}, {move: 1, capture: 1}],
                [{move: 1, capture: 1}, {move: 0, capture: 0}, {move: 1, capture: 1}],
                [{move: 1, capture: 1}, {move: 1, capture: 1}, {move: 1, capture: 1}]
            ],
            "river": [
                [{move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
            ]
        }
    }
]

module.exports = pieces
