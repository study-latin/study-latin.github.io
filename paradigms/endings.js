const endings = {
    "regular":{
        "indicative":{
            "active":{
                "present":{
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
                "imperfect":{
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
                "future":{
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
                "perfect":{
                    "format":"{2}{e}",
                    "endings":[
                        ["ī"       ],
                        ["istī"    ],
                        ["it"      ],
                        ["imus"    ],
                        ["istis"   ],
                        ["ērunt"   ]
                    ]
                },
                "pluperfect":{
                    "format":"{2}{e}",
                    "endings":[
                        ["eram"    ],
                        ["erās"    ],
                        ["erat"    ],
                        ["erāmus"  ],
                        ["erātis"  ],
                        ["erant"   ]
                    ]
                },
                "futurePerfect":{
                    "format":"{2}{e}",
                    "endings":[
                        ["erō"     ],
                        ["eris"    ],
                        ["erit"    ],
                        ["erimus"  ],
                        ["eritis"  ],
                        ["erint"   ]
                    ]
                }
            },
            "passive":{
                "present":{
                    "format":"{1}{e}",
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
                    "format":"{1}{e}",
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
                    "format":"{1}{e}",
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
                    "adjectiveFormat":["{-1}us"  , "{-1}a"   , "{-1}um"  ],
                    "format":"{a} {e}",
                    "endings":[
                        ["sum"     ],
                        ["es"      ],
                        ["est"     ],
                        ["sumus"   ],
                        ["estis"   ],
                        ["sunt"    ]
                    ]
                },
                "pluperfect":{
                    "adjectiveFormat":["{-1}us"  , "{-1}a"   , "{-1}um"  ],
                    "format":"{a} {e}",
                    "endings":[
                        ["eram"    ],
                        ["erās"    ],
                        ["erat"    ],
                        ["erāmus"  ],
                        ["erātis"  ],
                        ["erant"   ]
                    ]
                },
                "futurePerfect":{
                    "adjectiveFormat":["{-1}us"  , "{-1}a"   , "{-1}um"  ],
                    "format":"{a} {e}",
                    "endings":[
                        ["erō"     ],
                        ["eris"    ],
                        ["erit"    ],
                        ["erimus"  ],
                        ["eritis"  ],
                        ["erunt"   ]
                    ]
                }
            }
        },
        "imperative":{
            "active":{
                "present":{
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
                "future":{
                    "format":"{1}{e}",
                    "endings":[
                        [                                                          ],
                        ["āto"     , "ētō"     , "itō"     , "itō"     , "ītō"     ],
                        ["āto"     , "ēto"     , "itō"     , "itō"     , "ītō"     ],
                        [                                                          ],
                        ["ātōte"   , "ētōte"   , "itōte"   , "itōte"   , "ītōte"   ],
                        ["antō"    , "entō"    , "untō"    , "iuntō"   , "iuntō"   ]
                    ]
                }
            },
            "passive":{
                "present":{
                    "format":"{1}{e}",
                    "endings":[
                        [                                                          ],
                        ["āre"     , "ēre"     , "ere"     , "ere"     , "īre"     ],
                        [                                                          ],
                        [                                                          ],
                        ["āminī"   , "ēminī"   , "iminī"   , "iminī"   , "īminī"   ],
                        [                                                          ]
                    ]
                },
                "future":{
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
        "infinitive":{
            "active":{
                "present":{
                    "format":"{1}{e}",
                    "endings":["āre"     , "ēre"     , "ere"     , "ere"     , "īre"     ]
                },
                "future":{
                    "adjectiveFormat":["{-1}ūrus", "{-1}ūra" , "{-1}ūrum"],
                    "format":"{a} esse"
                },
                "perfect":{
                    "format":"{2}isse",
                }
            },
            "passive":{
                "present":{
                    "format":"{1}{e}",
                    "endings":["ārī"     , "ērī"     , "ī"       , "ī"       , "īrī"     ]
                },
                "future":{
                    "adjectiveFormat":["{-1}us"  , "{-1}a"   , "{-1}um"  ],
                    "format":"{a} {e}",
                    "endings":["īrī"     , "īrī"     , "īrī"     , "īrī"     , "īrī"     ]
                },
                "perfect":{
                    "adjectiveFormat":["{-1}us"  , "{-1}a"   , "{-1}um"  ],
                    "format":"{a} esse"
                }
            }
        },
        "subjunctive":{
            "active":{
                "present":{
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
                "imperfect":{
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
                "perfect":{
                    "format":"{2}{e}",
                    "endings":[
                        ["erim"    ],
                        ["eris"    ],
                        ["erit"    ],
                        ["erimis"  ],
                        ["eritis"  ],
                        ["erint"   ]
                    ]
                },
                "pluperfect":{
                    "format":"{2}{e}",
                    "endings":[
                        ["issem"   ],
                        ["issēs"   ],
                        ["isset"   ],
                        ["issēmus" ],
                        ["issētis" ],
                        ["issent"  ]
                    ]
                }
            },
            "passive":{
                "present":{
                    "format":"{1}{e}",
                    "endings":[
                        ["er"      , "ear"     , "ar"      , "iar"     , "iar"     ],
                        ["ēris"    , "eāris"   , "āris"    , "iāris"   , "iāris"   ],
                        ["ētur"    , "eātur"   , "ātur"    , "iātur"   , "iātur"   ],
                        ["ēmur"    , "eāmur"   , "āmur"    , "iāmur"   , "iāmur"   ],
                        ["ēminī"   , "eāminī"  , "āminī"   , "iāminī"  , "iāminī"  ],
                        ["entur"   , "eantur"  , "antur"   , "iantur"  , "iantur"  ]
                    ]
                },
                "imperfect":{
                    "format":"{1}{e}",
                    "endings":[
                        ["ārer"    , "ērer"    , "erer"    , "erer"    , "īrer"    ],
                        ["ārēris"  , "ērēris"  , "erēris"  , "erēris"  , "īrēris"  ],
                        ["ārētur"  , "ērētur"  , "erētur"  , "erētur"  , "īrētur"  ],
                        ["ārēmur"  , "ērēmur"  , "erēmur"  , "erēmur"  , "īrēmur"  ],
                        ["ārēminī" , "ērēminī" , "erēminī" , "erēminī" , "īrēminī" ],
                        ["ārentur" , "ērentur" , "erentur" , "erentur" , "īrentur" ]
                    ]
                },
                "perfect":{
                    "adjectiveFormat":["{-1}us"  , "{-1}a"   , "{-1}um"  ],
                    "format":"{a} {e}",
                    "endings":[
                        ["sim"     ],
                        ["sīs"     ],
                        ["sit"     ],
                        ["sīmus"   ],
                        ["sītis"   ],
                        ["sint"    ]
                    ]
                },
                "pluperfect":{
                    "adjectiveFormat":["{-1}us"  , "{-1}a"   , "{-1}um"  ],
                    "format":"{a} {e}",
                    "endings":[
                        ["essem"   ],
                        ["essēs"   ],
                        ["esset"   ],
                        ["essēmus" ],
                        ["essētis" ],
                        ["essent"  ]
                    ]
                }
            }
        },
        "participle":{
            "active":{
                "present":{
                    "adjectiveFormat":[
                        ["{1}āns"   , "{1}antis" ],
                        ["{1}ēns"   , "{1}entis" ],
                        ["{1}ēns"   , "{1}entis" ],
                        ["{1}iēns"  , "{1}ientis"],
                        ["{1}iēns"  , "{1}ientis"]
                    ]
                },
                "future":{
                    "adjectiveFormat":["{-1}ūrus", "{-1}ūra" , "{-1}ūrum"]
                }
            },
            "passive":{
                "future":{
                    "adjectiveFormat":[
                        ["{1}andus" , "{1}anda"  , "{1}andum" ],
                        ["{1}endus" , "{1}enda"  , "{1}endum" ],
                        ["{1}endus" , "{1}enda"  , "{1}endum" ],
                        ["{1}iendus", "{1}ienda" , "{1}iendum"],
                        ["{1}iendus", "{1}ienda" , "{1}iendum"]
                    ]
                },
                "perfect":{
                    "adjectiveFormat":["{-1}us"  , "{-1}a"   , "{-1}um"  ]
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
        "imperative":{
            "present":"passive",
            "future":"passive"
        },
        "infinitive":{
            "present":"passive",
            "future":"active",
            "perfect":"passive"
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
        "imperative":{
            "present":"active",
            "future":"active"
        },
        "infinitive":{
            "present":"active",
            "future":"active",
            "perfect":"passive"
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

// const pppEndings = [
//     ["us"  , "a"   , "um"  ],
//     ["ī"   , "ae"  , "ī"   ],
//     ["ō"   , "ae"  , "ō"   ],
//     ["um"  , "am"  , "um"  ],
//     ["ō"   , "ā"   , "ō"   ],
//     ["ī"   , "ae"  , "a"   ],
//     ["ōrum", "ārum", "ōrum"],
//     ["īs"  , "īs"  , "īs"  ],
//     ["ōs"  , "ās"  , "a"   ],
//     ["īs"  , "īs"  , "īs"  ]
// ];