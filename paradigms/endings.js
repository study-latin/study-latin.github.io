const verbEndings = {
    "regular":{
        "indicative":{
            "present":{
                "active":{
                    "format":"{1}{e}",
                    "endings":[
                        ["ō"       , "eō"      , "ō"       , "iō"      , "iō"      ],
                        ["ās"      , "ēs"      , "is"      , "is"      , "īs"      ],
                        ["at"      , "et"      , "it"      , "it"      , "it"      ],
                        ["āmus"    , "ēmus"    , "imus"    , "imus"    , "īmus"    ],
                        ["ātis"    , "ētis"    , "itis"    , "itis"    , "ītis"    ],
                        ["ant"     , "ent"     , "unt"     , "iunt"    , "iunt"    ]
                    ]
                },
                "passive":{
                    "format":"{1}{e}",
                    "endings":[
                        ["or"      , "eor"     , "or"      , "ior"     , "ior"     ],
                        ["āris"    , "ēris"    , "eris"    , "eris"    , "īris"    ],
                        ["ātur"    , "ētur"    , "itur"    , "itur"    , "ītur"    ],
                        ["āmur"    , "ēmur"    , "imur"    , "imur"    , "īmur"    ],
                        ["āminī"   , "ēminī"   , "iminī"   , "iminī"   , "īminī"   ],
                        ["antur"   , "entur"   , "untur"   , "iuntur"  , "iuntur"  ]
                    ]
                }
            },
            "imperfect":{
                "active":{
                    "format":"{1}{e}",
                    "endings":[
                        ["ābam"    , "ēbam"    , "ēbam"    , "iēbam"   , "iēbam"   ],
                        ["ābās"    , "ēbās"    , "ēbās"    , "iēbās"   , "iēbās"   ],
                        ["ābat"    , "ēbat"    , "ēbat"    , "iēbat"   , "iēbat"   ],
                        ["ābāmus"  , "ēbāmus"  , "ēbāmus"  , "iēbāmus" , "iēbāmus" ],
                        ["ābātis"  , "ēbātis"  , "ēbātis"  , "iēbātis" , "iēbātis" ],
                        ["ābant"   , "ēbant"   , "ēbant"   , "iēbant"  , "iēbant"  ]
                    ]
                },
                "passive":{
                    "format":"{1}{e}",
                    "endings":[
                        ["ābar"    , "ēbar"    , "ēbar"    , "iēbar"   , "iēbar"   ],
                        ["ābāris"  , "ēbāris"  , "ēbāris"  , "iēbāris" , "iēbāris" ],
                        ["ābātur"  , "ēbātur"  , "ēbātur"  , "iēbātur" , "iēbātur" ],
                        ["ābāmur"  , "ēbāmur"  , "ēbāmur"  , "iēbāmur" , "iēbāmur" ],
                        ["ābāminī" , "ēbāminī" , "ēbāminī" , "iēbāminī", "iēbāminī"],
                        ["ābantur" , "ēbantur" , "ēbantur" , "iēbantur", "iēbantur"]
                    ]
                }
            },
            "future":{
                "active":{
                    "format":"{1}{e}",
                    "endings":[
                        ["ābō"     , "ēbō"     , "am"      , "iam"     , "iam"     ],
                        ["ābis"    , "ēbis"    , "ēs"      , "iēs"     , "iēs"     ],
                        ["ābit"    , "ēbit"    , "et"      , "iet"     , "iet"     ],
                        ["ābimus"  , "ēbimus"  , "ēmus"    , "iēmus"   , "iēmus"   ],
                        ["ābitis"  , "ēbitis"  , "ētis"    , "iētis"   , "iētis"   ],
                        ["ābunt"   , "ēbunt"   , "ent"     , "ient"    , "ient"    ]
                    ]
                },
                "passive":{
                    "format":"{1}{e}",
                    "endings":[
                        ["ābor"    , "ēbor"    , "ar"      , "iar"     , "iar"     ],
                        ["āberis"  , "ēberis"  , "ēris"    , "iēris"   , "iēris"   ],
                        ["ābitur"  , "ēbitur"  , "ētur"    , "iētur"   , "iētur"   ],
                        ["ābimur"  , "ēbimur"  , "ēmur"    , "iēmur"   , "iēmur"   ],
                        ["ābiminī" , "ēbiminī" , "ēminī"   , "iēminī"  , "iēminī"  ],
                        ["ābuntur" , "ēbuntur" , "entur"   , "ientur"  , "ientur"  ]
                    ]
                }
            },
            "perfect":{
                "active":{
                    "format":"{2}{e}",
                    "endings":[
                        ["ī"       , "ī"       , "ī"       , "ī"       , "ī"       ],
                        ["istī"    , "istī"    , "istī"    , "istī"    , "istī"    ],
                        ["it"      , "it"      , "it"      , "it"      , "it"      ],
                        ["imus"    , "imus"    , "imus"    , "imus"    , "imus"    ],
                        ["istis"   , "istis"   , "istis"   , "istis"   , "istis"   ],
                        ["ērunt"   , "ērunt"   , "ērunt"   , "ērunt"   , "ērunt"   ]
                    ]
                },
                "passive":{
                    "adjectiveFormat":[
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ]
                    ],
                    "format":"{a} {e}",
                    "endings":[
                        ["sum"     , "sum"     , "sum"     , "sum"     , "sum"     ],
                        ["es"      , "es"      , "es"      , "es"      , "es"      ],
                        ["est"     , "est"     , "est"     , "est"     , "est"     ],
                        ["sumus"   , "sumus"   , "sumus"   , "sumus"   , "sumus"   ],
                        ["estis"   , "estis"   , "estis"   , "estis"   , "estis"   ],
                        ["sunt"    , "sunt"    , "sunt"    , "sunt"    , "sunt"    ]
                    ]
                }
            },
            "pluperfect":{
                "active":{
                    "format":"{2}{e}",
                    "endings":[
                        ["eram"    , "eram"    , "eram"    , "eram"    , "eram"    ],
                        ["erās"    , "erās"    , "erās"    , "erās"    , "erās"    ],
                        ["erat"    , "erat"    , "erat"    , "erat"    , "erat"    ],
                        ["erāmus"  , "erāmus"  , "erāmus"  , "erāmus"  , "erāmus"  ],
                        ["erātis"  , "erātis"  , "erātis"  , "erātis"  , "erātis"  ],
                        ["erant"   , "erant"   , "erant"   , "erant"   , "erant"   ]
                    ]
                },
                "passive":{
                    "adjectiveFormat":[
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ]
                    ],
                    "format":"{a} {e}",
                    "endings":[
                        ["eram"    , "eram"    , "eram"    , "eram"    , "eram"    ],
                        ["erās"    , "erās"    , "erās"    , "erās"    , "erās"    ],
                        ["erat"    , "erat"    , "erat"    , "erat"    , "erat"    ],
                        ["erāmus"  , "erāmus"  , "erāmus"  , "erāmus"  , "erāmus"  ],
                        ["erātis"  , "erātis"  , "erātis"  , "erātis"  , "erātis"  ],
                        ["erant"   , "erant"   , "erant"   , "erant"   , "erant"   ]
                    ]
                }
            },
            "futurePerfect":{
                "active":{
                    "format":"{2}{e}",
                    "endings":[
                        ["erō"     , "erō"     , "erō"     , "erō"     , "erō"     ],
                        ["eris"    , "eris"    , "eris"    , "eris"    , "eris"    ],
                        ["erit"    , "erit"    , "erit"    , "erit"    , "erit"    ],
                        ["erimus"  , "erimus"  , "erimus"  , "erimus"  , "erimus"  ],
                        ["eritis"  , "eritis"  , "eritis"  , "eritis"  , "eritis"  ],
                        ["erint"   , "erint"   , "erint"   , "erint"   , "erint"   ]
                    ]
                },
                "passive":{
                    "adjectiveFormat":[
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ]
                    ],
                    "format":"{a} {e}",
                    "endings":[
                        ["erō"     , "erō"     , "erō"     , "erō"     , "erō"     ],
                        ["eris"    , "eris"    , "eris"    , "eris"    , "eris"    ],
                        ["erit"    , "erit"    , "erit"    , "erit"    , "erit"    ],
                        ["erimus"  , "erimus"  , "erimus"  , "erimus"  , "erimus"  ],
                        ["eritis"  , "eritis"  , "eritis"  , "eritis"  , "eritis"  ],
                        ["erunt"   , "erunt"   , "erunt"   , "erunt"   , "erunt"   ]
                    ]
                }
            }
        },
        "infinitive":{
            "present":{
                "active":{
                    "format":"{1}{e}",
                    "endings":["āre"     , "ēre"     , "ere"     , "ere"     , "īre"     ]
                },
                "passive":{
                    "format":"{1}{e}",
                    "endings":["ārī"     , "ērī"     , "ī"       , "ī"       , "īrī"     ]
                }
            },
            "future":{
                "active":{
                    "adjectiveFormat":[
                        ["{-1}ūrus" , "{-1}ūra"  , "{-1}ūrum" ],
                        ["{-1}ūrus" , "{-1}ūra"  , "{-1}ūrum" ],
                        ["{-1}ūrus" , "{-1}ūra"  , "{-1}ūrum" ],
                        ["{-1}ūrus" , "{-1}ūra"  , "{-1}ūrum" ],
                        ["{-1}ūrus" , "{-1}ūra"  , "{-1}ūrum" ]
                    ],
                    "format":"{a} esse"
                },
                "passive":{
                    "adjectiveFormat":[
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ]
                    ],
                    "format":"{a} īrī",
                }
            },
            "perfect":{
                "active":{
                    "format":"{2}isse"
                },
                "passive":{
                    "adjectiveFormat":[
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ]
                    ],
                    "format":"{a} esse"
                }
            }
        },
        "imperative":{
            "present":{
                "active":{
                    "format":"{1}{e}",
                    "endings":[
                        [                                                          ],
                        ["ā"       , "ē"       , "e"       , "e"       , "ī"       ],
                        [                                                          ],
                        [                                                          ],
                        ["āte"     , "ēte"     , "ite"     , "ite"     , "īte"     ],
                        [                                                          ]
                    ]
                },
                "passive":{
                    "format":"{1}{e}",
                    "endings":[
                        [                                                          ],
                        ["āre"     , "ēre"     , "ere"     , "ere"     , "īre"     ],
                        [                                                          ],
                        [                                                          ],
                        ["āminī"   , "ēminī"   , "iminī"   , "iminī"   , "īminī"   ],
                        [                                                          ]
                    ]
                }
            },
            "future":{
                "active":{
                    "format":"{1}{e}",
                    "endings":[
                        [                                                          ],
                        ["āto"     , "ētō"     , "itō"     , "itō"     , "ītō"     ],
                        ["āto"     , "ēto"     , "itō"     , "itō"     , "ītō"     ],
                        [                                                          ],
                        ["ātōte"   , "ētōte"   , "itōte"   , "itōte"   , "ītōte"   ],
                        ["antō"    , "entō"    , "untō"    , "iuntō"   , "iuntō"   ]
                    ]
                },
                "passive":{
                    "format":"{1}{e}",
                    "endings":[
                        [                                                          ],
                        ["ātor"    , "ētor"    , "itor"    , "itor"    , "ītor"    ],
                        ["ātor"    , "ētor"    , "itor"    , "itor"    , "ītor"    ],
                        [                                                          ],
                        ["āminor"  , "ēminor"  , "iminor"  , "iminor"  , "īminor"  ],
                        ["antor"   , "entor"   , "untor"   , "iuntor"  , "iuntor"  ]
                    ]
                }
            }
        },
        "subjunctive":{
            "present":{
                "active":{
                    "format":"{1}{e}",
                    "endings":[
                        ["em"      , "eam"     , "am"      , "iam"     , "iam"     ],
                        ["ēs"      , "eās"     , "ās"      , "iās"     , "iās"     ],
                        ["et"      , "eat"     , "at"      , "iat"     , "iat"     ],
                        ["ēmus"    , "eāmus"   , "āmus"    , "iāmus"   , "iāmus"   ],
                        ["ētis"    , "eātis"   , "ātis"    , "iātis"   , "iātis"   ],
                        ["ent"     , "eant"    , "ant"     , "iant"    , "iant"    ]
                    ]
                },
                "passive":{
                    "format":"{1}{e}",
                    "endings":[
                        ["er"      , "ear"     , "ar"      , "iar"     , "iar"     ],
                        ["ēris"    , "eāris"   , "āris"    , "iāris"   , "iāris"   ],
                        ["ētur"    , "eātur"   , "ātur"    , "iātur"   , "iātur"   ],
                        ["ēmur"    , "eāmur"   , "āmur"    , "iāmur"   , "iāmur"   ],
                        ["ēminī"   , "eāminī"  , "āminī"   , "iāminī"  , "iāminī"  ],
                        ["entur"   , "eantur"  , "antur"   , "iantur"  , "iantur"  ]
                    ]
                }
            },
            "imperfect":{
                "active":{
                    "format":"{1}{e}",
                    "endings":[
                        ["ārem"    , "ērem"    , "erem"    , "erem"    , "īrem"    ],
                        ["ārēs"    , "ērēs"    , "erēs"    , "erēs"    , "īrēs"    ],
                        ["āret"    , "ēret"    , "eret"    , "eret"    , "īret"    ],
                        ["ārēmus"  , "ērēmus"  , "erēmus"  , "erēmus"  , "īrēmus"  ],
                        ["ārētis"  , "ērētis"  , "erētis"  , "erētis"  , "īrētis"  ],
                        ["ārent"   , "ērent"   , "erent"   , "erent"   , "īrent"   ]
                    ]
                },
                "passive":{
                    "format":"{1}{e}",
                    "endings":[
                        ["ārer"    , "ērer"    , "erer"    , "erer"    , "īrer"    ],
                        ["ārēris"  , "ērēris"  , "erēris"  , "erēris"  , "īrēris"  ],
                        ["ārētur"  , "ērētur"  , "erētur"  , "erētur"  , "īrētur"  ],
                        ["ārēmur"  , "ērēmur"  , "erēmur"  , "erēmur"  , "īrēmur"  ],
                        ["ārēminī" , "ērēminī" , "erēminī" , "erēminī" , "īrēminī" ],
                        ["ārentur" , "ērentur" , "erentur" , "erentur" , "īrentur" ]
                    ]
                }
            },
            "perfect":{
                "active":{
                    "format":"{2}{e}",
                    "endings":[
                        ["erim"    , "erim"    , "erim"    , "erim"    , "erim"    ],
                        ["eris"    , "eris"    , "eris"    , "eris"    , "eris"    ],
                        ["erit"    , "erit"    , "erit"    , "erit"    , "erit"    ],
                        ["erimis"  , "erimis"  , "erimis"  , "erimis"  , "erimis"  ],
                        ["eritis"  , "eritis"  , "eritis"  , "eritis"  , "eritis"  ],
                        ["erint"   , "erint"   , "erint"   , "erint"   , "erint"   ]
                    ]
                },
                "passive":{
                    "adjectiveFormat":[
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ]
                    ],
                    "format":"{a} {e}",
                    "endings":[
                        ["sim"     , "sim"     , "sim"     , "sim"     , "sim"     ],
                        ["sīs"     , "sīs"     , "sīs"     , "sīs"     , "sīs"     ],
                        ["sit"     , "sit"     , "sit"     , "sit"     , "sit"     ],
                        ["sīmus"   , "sīmus"   , "sīmus"   , "sīmus"   , "sīmus"   ],
                        ["sītis"   , "sītis"   , "sītis"   , "sītis"   , "sītis"   ],
                        ["sint"    , "sint"    , "sint"    , "sint"    , "sint"    ]
                    ]
                }
            },
            "pluperfect":{
                "active":{
                    "format":"{2}{e}",
                    "endings":[
                        ["issem"   , "issem"   , "issem"   , "issem"   , "issem"   ],
                        ["issēs"   , "issēs"   , "issēs"   , "issēs"   , "issēs"   ],
                        ["isset"   , "isset"   , "isset"   , "isset"   , "isset"   ],
                        ["issēmus" , "issēmus" , "issēmus" , "issēmus" , "issēmus" ],
                        ["issētis" , "issētis" , "issētis" , "issētis" , "issētis" ],
                        ["issent"  , "issent"  , "issent"  , "issent"  , "issent"  ]
                    ]
                },
                "passive":{
                    "adjectiveFormat":[
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"    , "{-1}um"   ]
                    ],
                    "format":"{a} {e}",
                    "endings":[
                        ["essem"   , "essem"   , "essem"   , "essem"   , "essem"   ],
                        ["essēs"   , "essēs"   , "essēs"   , "essēs"   , "essēs"   ],
                        ["esset"   , "esset"   , "esset"   , "esset"   , "esset"   ],
                        ["essēmus" , "essēmus" , "essēmus" , "essēmus" , "essēmus" ],
                        ["essētis" , "essētis" , "essētis" , "essētis" , "essētis" ],
                        ["essent"  , "essent"  , "essent"  , "essent"  , "essent"  ]
                    ]
                }
            }
        },
        "participle":{
            "present":{
                "active":{
                    "adjectiveFormat":[
                        ["{1}āns"   , "{1}antis" ],
                        ["{1}ēns"   , "{1}entis" ],
                        ["{1}ēns"   , "{1}entis" ],
                        ["{1}iēns"  , "{1}ientis"],
                        ["{1}iēns"  , "{1}ientis"]
                    ]
                }
            },
            "future":{
                "active":{
                    "adjectiveFormat":[
                        ["{-1}ūrus" , "{-1}ūra"  , "{-1}ūrum" ],
                        ["{-1}ūrus" , "{-1}ūra"  , "{-1}ūrum" ],
                        ["{-1}ūrus" , "{-1}ūra"  , "{-1}ūrum" ],
                        ["{-1}ūrus" , "{-1}ūra"  , "{-1}ūrum" ],
                        ["{-1}ūrus" , "{-1}ūra"  , "{-1}ūrum" ]
                    ]
                },
                "passive":{
                    "adjectiveFormat":[
                        ["{1}andus" , "{1}anda"  , "{1}andum" ],
                        ["{1}endus" , "{1}enda"  , "{1}endum" ],
                        ["{1}endus" , "{1}enda"  , "{1}endum" ],
                        ["{1}iendus", "{1}ienda" , "{1}iendum"],
                        ["{1}iendus", "{1}ienda" , "{1}iendum"]
                    ]
                }
            },
            "perfect":{
                "passive":{
                    "adjectiveFormat":[
                        ["{-1}us"   , "{-1}a"   ,  "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"   ,  "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"   ,  "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"   ,  "{-1}um"   ],
                        ["{-1}us"   , "{-1}a"   ,  "{-1}um"   ]
                    ]
                }
            }
        }
    },
    "deponent":{
        "indicative":{
            "present":"passive",
            "imperfect":"passive",
            "future":"passive",
            "perfect":"passive",
            "pluperfect":"passive",
            "futurePerfect":"passive"
        },
        "infinitive":{
            "present":"passive",
            "future":"active",
            "perfect":"passive"
        },
        "imperative":{
            "present":"passive",
            "future":"passive"
        },
        "subjunctive":{
            "present":"passive",
            "imperfect":"passive",
            "perfect":"passive",
            "pluperfect":"passive",
        },
        "participle":{
            "present":"active",
            "future":"active",
            "perfect":"passive"
        }
    },
    "semiDeponent":{
        "indicative":{
            "present":"active",
            "imperfect":"active",
            "future":"active",
            "perfect":"passive",
            "pluperfect":"passive",
            "futurePerfect":"passive"
        },
        "infinitive":{
            "present":"active",
            "future":"active",
            "perfect":"passive"
        },
        "imperative":{
            "present":"active",
            "future":"active"
        },
        "subjunctive":{
            "present":"active",
            "imperfect":"active",
            "perfect":"passive",
            "pluperfect":"passive",
        },
        "participle":{
            "present":"active",
            "future":"active",
            "perfect":"passive"
        }
    }
}