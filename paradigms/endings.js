const verbEndings = {
    "active":{
        "present":{
            "stem":2,
            "requiresAgreement":false,
            "endings":[
                ["ō"       , "eō"      , "ō"       , "iō"      , "iō"      ],
                ["ās"      , "ēs"      , "is"      , "is"      , "īs"      ],
                ["at"      , "et"      , "it"      , "it"      , "it"      ],
                ["āmus"    , "ēmus"    , "imus"    , "imus"    , "īmus"    ],
                ["ātis"    , "ētis"    , "itis"    , "itis"    , "ītis"    ],
                ["ant"     , "ent"     , "unt"     , "iunt"    , "iunt"    ]
            ]
        },
        "imperfect":{
            "stem":2,
            "requiresAgreement":false,
            "endings":[
                ["ābam"    , "ēbam"    , "ēbam"    , "iēbam"   , "iēbam"   ],
                ["ābās"    , "ēbās"    , "ēbās"    , "iēbās"   , "iēbās"   ],
                ["ābat"    , "ēbat"    , "ēbat"    , "iēbat"   , "iēbat"   ],
                ["ābāmus"  , "ēbāmus"  , "ēbāmus"  , "iēbāmus" , "iēbāmus" ],
                ["ābātis"  , "ēbātis"  , "ēbātis"  , "iēbātis" , "iēbātis" ],
                ["ābant"   , "ēbant"   , "ēbant"   , "iēbant"  , "iēbant"  ]
            ]
        },
        "future":{
            "stem":2,
            "requiresAgreement":false,
            "endings":[
                ["ābō"     , "ēbō"     , "am"      , "iam"     , "iam"     ],
                ["ābis"    , "ēbis"    , "ēs"      , "iēs"     , "iēs"     ],
                ["ābit"    , "ēbit"    , "et"      , "iet"     , "iet"     ],
                ["ābimus"  , "ēbimus"  , "ēmus"    , "iēmus"   , "iēmus"   ],
                ["ābitis"  , "ēbitis"  , "ētis"    , "iētis"   , "iētis"   ],
                ["ābunt"   , "ēbunt"   , "ent"     , "ient"    , "ient"    ]
            ]
        },
        "perfect":{
            "stem":3,
            "requiresAgreement":false,
            "endings":[
                ["ī"       , "ī"       , "ī"       , "ī"       , "ī"       ],
                ["istī"    , "istī"    , "istī"    , "istī"    , "istī"    ],
                ["it"      , "it"      , "it"      , "it"      , "it"      ],
                ["imus"    , "imus"    , "imus"    , "imus"    , "imus"    ],
                ["istis"   , "istis"   , "istis"   , "istis"   , "istis"   ],
                ["ērunt"   , "ērunt"   , "ērunt"   , "ērunt"   , "ērunt"   ]
            ]
        },
        "pluperfect":{
            "stem":3,
            "requiresAgreement":false,
            "endings":[
                ["eram"    , "eram"    , "eram"    , "eram"    , "eram"    ],
                ["erās"    , "erās"    , "erās"    , "erās"    , "erās"    ],
                ["erat"    , "erat"    , "erat"    , "erat"    , "erat"    ],
                ["erāmus"  , "erāmus"  , "erāmus"  , "erāmus"  , "erāmus"  ],
                ["erātis"  , "erātis"  , "erātis"  , "erātis"  , "erātis"  ],
                ["erant"   , "erant"   , "erant"   , "erant"   , "erant"   ]
            ]
        },
        "future perfect":{
            "stem":3,
            "requiresAgreement":false,
            "endings":[
                ["erō"     , "erō"     , "erō"     , "erō"     , "erō"     ],
                ["eris"    , "eris"    , "eris"    , "eris"    , "eris"    ],
                ["erit"    , "erit"    , "erit"    , "erit"    , "erit"    ],
                ["erimus"  , "erimus"  , "erimus"  , "erimus"  , "erimus"  ],
                ["eritis"  , "eritis"  , "eritis"  , "eritis"  , "eritis"  ],
                ["erint"   , "erint"   , "erint"   , "erint"   , "erint"   ]
            ]
        },
        "imperative":{
            "stem":2,
            "requiresAgreement":false,
            "endings":[
                ["ā"       , "ē"       , "e"       , "e"       , "ī"       ],
                ["āte"     , "ēte"     , "ite"     , "ite"     , "īte"     ]
            ]
        }
    },
    "passive":{
        "present":{
            "stem":2,
            "requiresAgreement":false,
            "endings":[
                ["or"      , "eor"     , "or"      , "ior"     , "ior"     ],
                ["āris"    , "ēris"    , "eris"    , "eris"    , "īris"    ],
                ["ātur"    , "ētur"    , "itur"    , "itur"    , "ītur"    ],
                ["āmur"    , "ēmur"    , "imur"    , "imur"    , "īmur"    ],
                ["āminī"   , "ēminī"   , "iminī"   , "iminī"   , "īminī"   ],
                ["antur"   , "entur"   , "untur"   , "iuntur"  , "iuntur"  ]
            ]
        },
        "imperfect":{
            "stem":2,
            "requiresAgreement":false,
            "endings":[
                ["ābar"    , "ēbar"    , "ēbar"    , "iēbar"   , "iēbar"   ],
                ["ābāris"  , "ēbāris"  , "ēbāris"  , "iēbāris" , "iēbāris" ],
                ["ābātur"  , "ēbātur"  , "ēbātur"  , "iēbātur" , "iēbātur" ],
                ["ābāmur"  , "ēbāmur"  , "ēbāmur"  , "iēbāmur" , "iēbāmur" ],
                ["ābāminī" , "ēbāminī" , "ēbāminī" , "iēbāminī", "iēbāminī"],
                ["ābantur" , "ēbantur" , "ēbantur" , "iēbantur", "iēbantur"]
            ]
        },
        "future":{
            "stem":2,
            "requiresAgreement":false,
            "endings":[
                ["ābor"    , "ēbor"    , "ar"      , "iar"     , "iar"     ],
                ["āberis"  , "ēberis"  , "ēris"    , "iēris"   , "iēris"   ],
                ["ābitur"  , "ēbitur"  , "ētur"    , "iētur"   , "iētur"   ],
                ["ābimur"  , "ēbimur"  , "ēmur"    , "iēmur"   , "iēmur"   ],
                ["ābiminī" , "ēbiminī" , "ēminī"   , "iēminī"  , "iēminī"  ],
                ["ābuntur" , "ēbuntur" , "entur"   , "ientur"  , "ientur"  ]
            ]
        },
        "perfect":{
            "stem":4,
            "requiresAgreement":true,
            "endings":[
                [" sum"    , " sum"    , " sum"    , " sum"    , " sum"    ],
                [" es"     , " es"     , " es"     , " es"     , " es"     ],
                [" est"    , " est"    , " est"    , " est"    , " est"    ],
                [" sumus"  , " sumus"  , " sumus"  , " sumus"  , " sumus"  ],
                [" estis"  , " estis"  , " estis"  , " estis"  , " estis"  ],
                [" sunt"   , " sunt"   , " sunt"   , " sunt"   , " sunt"   ],
            ]
        },
        "pluperfect":{
            "stem":4,
            "requiresAgreement":true,
            "endings":[
                [" eram"   , " eram"   , " eram"   , " eram"   , " eram"   ],
                [" erās"   , " erās"   , " erās"   , " erās"   , " erās"   ],
                [" erat"   , " erat"   , " erat"   , " erat"   , " erat"   ],
                [" erāmus" , " erāmus" , " erāmus" , " erāmus" , " erāmus" ],
                [" erātis" , " erātis" , " erātis" , " erātis" , " erātis" ],
                [" erant"  , " erant"  , " erant"  , " erant"  , " erant"  ],
            ]
        },
        "future perfect":{
            "stem":4,
            "requiresAgreement":true,
            "endings":[
                [" erō"    , " erō"    , " erō"    , " erō"    , " erō"    ],
                [" eris"   , " eris"   , " eris"   , " eris"   , " eris"   ],
                [" erit"   , " erit"   , " erit"   , " erit"   , " erit"   ],
                [" erimus" , " erimus" , " erimus" , " erimus" , " erimus" ],
                [" eritis" , " eritis" , " eritis" , " eritis" , " eritis" ],
                [" erunt"  , " erunt"  , " erunt"  , " erunt"  , " erunt"  ]
            ]
        },
        "imperative":{
            "stem":2,
            "requiresAgreement":false,
            "endings":[
                ["āre"     , "ēre"     , "ere"     , "ere"     , "īre"     ],
                ["āminī"   , "ēminī"   , "iminī"   , "iminī"   , "īminī"   ]
            ]
        }
    }
};
const pppEndings = [
    ["us"  , "a"   , "um"  ],
    ["ī"   , "ae"  , "ī"   ],
    ["ō"   , "ae"  , "ō"   ],
    ["um"  , "am"  , "um"  ],
    ["ō"   , "ā"   , "ō"   ],
    ["ī"   , "ae"  , "a"   ],
    ["ōrum", "ārum", "ōrum"],
    ["īs"  , "īs"  , "īs"  ],
    ["ōs"  , "ās"  , "a"   ],
    ["īs"  , "īs"  , "īs"  ]
];