const tables = {
    // "Active present verb endings":{
    //     "rows":["1st person s.", "2nd person s.", "3rd person s.", "1st person p.", "2nd person p.", "3rd person p."],
    //     "columns":["1st conj.", "2nd conj.", "3rd conj.", "3rd -io conj.", "4th conj."],
    //     "data":[
    //         ["ō",         "eō",        "ō",         "iō",            "iō"  ],
    //         ["ās",        "ēs",        "is",        "is",            "īs"  ],
    //         ["at",        "et",        "it",        "it",            "it"  ],
    //         ["āmus",      "ēmus",      "imus",      "imus",          "īmus"],
    //         ["ātis",      "ētis",      "itis",      "itis",          "ītis"],
    //         ["ant",       "ent",       "unt",       "iunt",          "iunt"]
    //     ]
    // },
    // "Active imperfect verb endings":[
    //     ["",              "1st conj.", "2nd conj.", "3rd conj.", "3rd -io conj.", "4th conj."],
    //     ["1st person s.", "ābam",      "ēbam",      "ēbam",      "iēbam",         "iēbam"],
    //     ["2nd person s.", "ābās",      "ēbās",      "ēbās",      "iēbās",         "iēbās"],
    //     ["3rd person s.", "ābat",      "ēbat",      "ēbat",      "iēbat",         "iēbat"],
    //     ["1st person p.", "ābāmus",    "ēbāmus",    "ēbāmus",    "iēbāmus",       "iēbāmus"],
    //     ["2nd person p.", "ābātis",    "ēbātis",    "ēbātis",    "iēbātis",       "iēbātis"],
    //     ["3rd person p.", "ābant",     "ēbant",     "ēbant",     "iēbant",        "iēbant"]
    // ],
    // "Active future verb endings":[
    //     ["",              "1st conj.", "2nd conj.", "3rd conj.", "3rd -io conj.", "4th conj."],
    //     ["1st person s.", "ābō",       "ēbō",       "am",        "iam",           "iam"],
    //     ["2nd person s.", "ābis",      "ēbis",      "ēs",        "iēs",           "iēs"],
    //     ["3rd person s.", "ābit",      "ēbit",      "et",        "iet",           "iet"],
    //     ["1st person p.", "ābimus",    "ēbimus",    "ēmus",      "iēmus",         "iēmus"],
    //     ["2nd person p.", "ābitis",    "ēbitis",    "ētis",      "iētis",         "iētis"],
    //     ["3rd person p.", "ābunt",     "ēbunt",     "ent",       "ient",          "ient"]
    // ],
    // "Active perfect verb endings":[
    //     ["",              "All conj."],
    //     ["1st person s.", "ī"],
    //     ["2nd person s.", "istī"],
    //     ["3rd person s.", "it"],
    //     ["1st person p.", "imus"],
    //     ["2nd person p.", "istis"],
    //     ["3rd person p.", "ērunt"]
    // ],
    // "Active pluperfect verb endings":[
    //     ["",              "All conj."],
    //     ["1st person s.", "eram"],
    //     ["2nd person s.", "erās"],
    //     ["3rd person s.", "erat"],
    //     ["1st person p.", "erāmus"],
    //     ["2nd person p.", "erātis"],
    //     ["3rd person p.", "erant"]
    // ],
    // "Active future perfect verb endings":[
    //     ["",              "All conj."],
    //     ["1st person s.", "erō"],
    //     ["2nd person s.", "eris"],
    //     ["3rd person s.", "erit"],
    //     ["1st person p.", "erimus"],
    //     ["2nd person p.", "eritis"],
    //     ["3rd person p.", "erint"]
    // ],
    // "Passive present verb endings":[
    //     ["",              "1st conj.", "2nd conj.", "3rd conj.", "3rd -io conj.", "4th conj."],
    //     ["1st person s.", "or",        "eor",       "or",        "ior",           "ior"],
    //     ["2nd person s.", "āris",      "ēris",      "eris",      "eris",          "īris"],
    //     ["3rd person s.", "ātur",      "ētur",      "itur",      "itur",          "ītur"],
    //     ["1st person p.", "āmur",      "ēmur",      "imur",      "imur",          "īmur"],
    //     ["2nd person p.", "āminī",     "ēminī",     "iminī",     "iminī",         "īminī"],
    //     ["3rd person p.", "antur",     "entur",     "untur",     "iuntur",        "iuntur"]
    // ],
    // "Passive imperfect verb endings":[
    //     ["",              "1st conj.", "2nd conj.", "3rd conj.", "3rd -io conj.", "4th conj."],
    //     ["1st person s.", "ābar",      "ēbar",      "ēbar",      "iēbar",         "iēbar"],
    //     ["2nd person s.", "ābāris",    "ēbāris",    "ēbāris",    "iēbāris",       "iēbāris"],
    //     ["3rd person s.", "ābātur",    "ēbātur",    "ēbātur",    "iēbātur",       "iēbātur"],
    //     ["1st person p.", "ābāmur",    "ēbāmur",    "ēbāmur",    "iēbāmur",       "iēbāmur"],
    //     ["2nd person p.", "ābāminī",   "ēbāminī",   "ēbāminī",   "iēbāminī",      "iēbāminī"],
    //     ["3rd person p.", "ābantur",   "ēbantur",   "ēbantur",   "iēbantur",      "iēbantur"]
    // ],
    // "Passive future verb endings":[
    //     ["",              "1st conj.", "2nd conj.", "3rd conj.", "3rd -io conj.", "4th conj."],
    //     ["1st person s.", "ābor",      "ēbor",      "ar",        "iar",           "iar"],
    //     ["2nd person s.", "āberis",    "ēberis",    "ēris",      "iēris",         "iēris"],
    //     ["3rd person s.", "ābitur",    "ēbitur",    "ētur",      "iētur",         "iētur"],
    //     ["1st person p.", "ābimur",    "ēbimur",    "ēmur",      "iēmur",         "iēmur"],
    //     ["2nd person p.", "ābiminī",   "ēbiminī",   "ēminī",     "iēminī",        "iēminī"],
    //     ["3rd person p.", "ābuntur",   "ēbuntur",   "entur",     "ientur",        "ientur"]
    // ],
    "Comparative adjective endings (-us, -a, -um, -is, -is, -e, -er, -a, -um, or -er, -is, -e)":{
        "rows":["Nom. s.", "Gen. s.", "Dat. s.", "Acc. s.", "Abl. s,", "Nom. p.", "Gen. p.", "Dat. p.", "Acc. p.", "Abl. p."],
        "columns":["M. + F.", "N."],
        "data":[
            ["ior",     "ius"],
            ["iōris",   "iōris"],
            ["iōrī",    "iōrī"],
            ["iōrem",   "ius"],
            ["iōre",    "iōre"],
            ["iōrēs",   "iōra"],
            ["iōrum",   "iōrum"],
            ["iōribus", "iōribus"],
            ["iōrēs",   "iōra"],
            ["iōribus", "iōribus"]
        ]
    },
    "Irregular comparative adjectives":{
        "rows":["Good", "Bad", "Great", "Small", "Much", "Many"],
        "columns":["M. + F.", "N."],
        "data":[
            ["melior",  "melius"],
            ["peior",   "peius"],
            ["maior",   "maius"],
            ["minor",   "minus"],
            ["plūs",    "plūs"],
            ["plūrēs",  "plūra"]
        ]
    },
    "Superlative adjective endings (-us, -a, -um or -is, -is, -e)":{
        "rows":["Nom. s.", "Gen. s.", "Dat. s.", "Acc. s.", "Abl. s,", "Nom. p.", "Gen. p.", "Dat. p.", "Acc. p.", "Abl. p."],
        "columns":["M.", "F.", "N."],
        "data":[
            ["us",   "a",    "um"],
            ["ī",    "ae",   "ī"],
            ["ō",    "ae",   "ō"],
            ["um",   "am",   "um"],
            ["ō",    "ā",    "ō"],
            ["ī",    "ae",   "a"],
            ["ōrum", "ārum", "ōrum"],
            ["īs",   "īs",   "īs"],
            ["ōs",   "ās",   "ōs"],
            ["īs",   "īs",   "īs"]
        ]
    },
    "Superlative adjective endings (-er, -a, -um or -er, -is, -e)":{
        "rows":["Nom. s.", "Gen. s.", "Dat. s.", "Acc. s.", "Abl. s,", "Nom. p.", "Gen. p.", "Dat. p.", "Acc. p.", "Abl. p."],
        "columns":["M.", "F.", "N."],
        "data":[
            ["rimus",   "rima",    "rimum"],
            ["rimī",    "rimae",   "rimī"],
            ["rimō",    "rimae",   "rimō"],
            ["rimum",   "rimam",   "rimum"],
            ["rimō",    "rimā",    "rimō"],
            ["rimī",    "rimae",   "rima"],
            ["rimōrum", "rimārum", "rimōrum"],
            ["rimīs",   "rimīs",   "rimīs"],
            ["rimōs",   "rimās",   "rima"],
            ["rimīs",   "rimīs",   "rimīs"]
        ]
    },
    "Irregular superlative adjectives":{
        "rows":["Good", "Bad", "Great", "Small", "Much", "Many", "Easy", "Difficult", "Similar", "Dissimilar", "Slender", "Humble"],
        "columns":["M.", "F.", "N."],
        "data":[
            ["optimus",       "optima",       "optimum"],
            ["pessimus",      "pessima",      "pessimum"],
            ["maximus",       "maxima",       "maximum"],
            ["minimus",       "minima",       "minimum"],
            ["plurimus",      "plurima",      "plurimum"],
            ["plūrimī",       "plūrimae",     "plūrima"],
            ["facillimus",    "facillima",    "facillimum"],
            ["difficillimus", "difficillima", "difficillimum"],
            ["simillimus",    "simillima",    "simillimum"],
            ["dissimillimus", "dissimillima", "dissimillimum"],
            ["gracillimus",   "gracillima",   "gracillimum"],
            ["humillimus",    "humillima",    "humillimum"]
        ]
    },
    "Irregular positive adverbs":{
        "rows":["Boldly", "Easily", "Well", "Badly", "Greatly", "A little", "A lot", "For a long time", "Often", "Late"],
        "columns":["Pos."],
        "data":[
            ["audacter"],
            ["facile"],
            ["bene"],
            ["male"],
            ["magnopere"],
            ["paulum"],
            ["multum"],
            ["diū"],
            ["saepe"],
            ["sērō"]
        ]
    },
    "Irregular comparative adverbs":{
        "rows":["Greatly", "A lot", "For a long time", "Often", "Late"],
        "columns":["Comp."],
        "data":[
            ["magis"],
            ["plūs"],
            ["diūtius"],
            ["saepius"],
            ["sērius"]
        ]
    },
    "Irregular superlative adverbs":{
        "rows":["A lot", "For a long time", "Often", "Late"],
        "columns":["Sup."],
        "data":[
            ["pluriumum"],
            ["diūtissimē"],
            ["saepissimē"],
            ["sērissimē"]
        ]
    },
    "Is, ea, id":{
        "rows":["Nom. s.", "Gen. s.", "Dat. s.", "Acc. s.", "Abl. s,", "Nom. p.", "Gen. p.", "Dat. p.", "Acc. p.", "Abl. p."],
        "columns":["M.", "F.", "N."],
        "data":[
            ["is",    "ea",     "id"],
            ["eius",  "eius",   "eius"],
            ["eī",    "eī",     "eī"],
            ["eum",   "eam",    "id"],
            ["eō",    "eā",     "eō"],
            ["ei",    "eae",    "ea"],
            ["eōrum", "eārum",  "eōrum"],
            ["eīs",   "eīs",    "eīs"],
            ["eōs",   "eās",    "ea"],
            ["eīs",   "eīs",    "eīs"]
        ]
    },
    "Īdem, eadem, idem":{
        "rows":["Nom. s.", "Gen. s.", "Dat. s.", "Acc. s.", "Abl. s,", "Nom. p.", "Gen. p.", "Dat. p.", "Acc. p.", "Abl. p."],
        "columns":["M.", "F.", "N."],
        "data":[
            ["īdem",     "eadem",    "idem"],
            ["eiusdem",  "eiusdem",  "eiusdem"],
            ["eīdem",    "eīdem",    "eīdem"],
            ["eundem",   "eandem",   "idem"],
            ["eōdem",    "eādem",    "eōdem"],
            ["eīdem",    "eaedem",   "eadem"],
            ["eōrundem", "eārundem", "eōrundem"],
            ["eīsdem",   "eīsdem",   "eīsdem"],
            ["eōsdem",   "eāsdem",   "eadem"],
            ["eīsdem",   "eīsdem",   "eīsdem"]
        ]
    },
    "Quī, quae, quod":{
        "rows":["Nom. s.", "Gen. s.", "Dat. s.", "Acc. s.", "Abl. s,", "Nom. p.", "Gen. p.", "Dat. p.", "Acc. p.", "Abl. p."],
        "columns":["M.", "F.", "N."],
        "data":[
            ["quī",    "quae",   "quod"],
            ["cuius",  "cuius",  "cuius"],
            ["cui",    "cui",    "cui"],
            ["quem",   "quam",   "quod"],
            ["quō",    "quā",    "quō"],
            ["quī",    "quae",   "quae"],
            ["quōrum", "quārum", "quōrum"],
            ["quibus", "quibus", "quibus"],
            ["quōs",   "quās",   "quōs"],
            ["quibus", "quibus", "quibus"]
        ]
    },
    "Quīdam, quaedam, quoddam":{
        "rows":["Nom. s.", "Gen. s.", "Dat. s.", "Acc. s.", "Abl. s,", "Nom. p.", "Gen. p.", "Dat. p.", "Acc. p.", "Abl. p."],
        "columns":["M.", "F.", "N."],
        "data":[
            ["quīdam",    "quaedam",   "quoddam"],
            ["cuiusdam",  "cuiusdam",  "cuiusdam"],
            ["cuidam",    "cuidam",    "cuidam"],
            ["quendam",   "quandam",   "quoddam"],
            ["quōdam",    "quādam",    "quōdam"],
            ["quīdam",    "quaedam",   "quaedam"],
            ["quōrundam", "quārundam", "quōrundam"],
            ["quibusdam", "quibusdam", "quibusdam"],
            ["quōsdam",   "quāsdam",   "quaedam"],
            ["quibusdam", "quibusdam", "quibusdam"]
        ]
    },
    "Quis, quis, quid":{
        "rows":["Nom. s.", "Gen. s.", "Dat. s.", "Acc. s.", "Abl. s,", "Nom. p.", "Gen. p.", "Dat. p.", "Acc. p.", "Abl. p."],
        "columns":["M.", "F.", "N."],
        "data":[
            ["quis",   "quis",   "quid"],
            ["cuius",  "cuius",  "cuius"],
            ["cui",    "cui",    "cui"],
            ["quem",   "quem",   "quid"],
            ["quō",    "quō",    "quō"],
            ["quī",    "quae",   "quae"],
            ["quōrum", "quārum", "quōrum"],
            ["quibus", "quibus", "quibus"],
            ["quōs",   "quās",   "quōs"],
            ["quibus", "quibus", "quibus"]
        ]
    },
    "Ipse, ipsa, ipsum":{
        "rows":["Nom. s.", "Gen. s.", "Dat. s.", "Acc. s.", "Abl. s,", "Nom. p.", "Gen. p.", "Dat. p.", "Acc. p.", "Abl. p."],
        "columns":["M.", "F.", "N."],
        "data":[
            ["ipse",    "ipsa",    "ipsum"],
            ["ipsīus",  "ipsīus",  "ipsīus"],
            ["ipsī",    "ipsī",    "ipsī"],
            ["ipsum",   "ipsam",   "ipsum"],
            ["ipsō",    "ipsā"   , "ipsō"],
            ["ipsī",    "ipsae",   "ipsa"],
            ["ipsōrum", "ipsārum", "ipsōrum"],
            ["ipsīs",   "ipsīs",   "ipsīs"],
            ["ipsōs",   "ipsās",   "ipsōs"],
            ["ipsīs",   "ipsīs",   "ipsīs"]
        ]
    }
};