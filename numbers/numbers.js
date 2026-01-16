// const numbers = [
//     {
//         "cardinal":{"english":"one", "latin":["ūnus", "ūna", "ūnum"]},
//         "ordinal":{"english":"first", "latinRoot":"prīm"}
//     },
//     {
//         "cardinal":{"english":"two", "latinRoot":["duo", "duae", "duo"]},
//         "ordinal":{"english":"second", "latinRoot":"secund"}
//     },
//     {
//         "cardinal":{"english":"three", "latinRoot":["trēs", "trēs", "tria"]},
//         "ordinal":{"english":"third", "latinRoot":"terti"}
//     },
//     {
//         "cardinal":{"english":"four", "latin":"quattuor"},
//         "ordinal":{"english":"fourth", "latinRoot":"quart"}
//     },
//     {
//         "cardinal":{"english":"five", "latin":"quīnque"},
//         "ordinal":{"english":"fifth", "latinRoot":"quīnt"}
//     },
//     {
//         "cardinal":{"english":"six", "latin":"sex"},
//         "ordinal":{"english":"sixth", "latinRoot":"sext"}
//     },
//     {
//         "cardinal":{"english":"seven", "latin":"septem"},
//         "ordinal":{"english":"seventh", "latinRoot":"septim"}
//     },
//     {
//         "cardinal":{"english":"eight", "latin":"octō"},
//         "ordinal":{"english":"eighth", "latinRoot":"octāv"}
//     },
//     {
//         "cardinal":{"english":"nine", "latin":"novem"},
//         "ordinal":{"english":"ninth", "latinRoot":"nōn"}
//     },
//     {
//         "cardinal":{"english":"ten", "latin":"decem"},
//         "ordinal":{"english":"tenth", "latinRoot":"decim"}
//     },
//     {
//         "cardinal":{"english":"eleven", "latin":"ūndecim"},
//         "ordinal":{"english":"eleventh", "latinRoot":"ūndecim"}
//     },
//     {
//         "cardinal":{"english":"twelve", "latin":"duodecim"},
//         "ordinal":{"english":"twelfth", "latinRoot":"duodecim"}
//     },
//     {
//         "cardinal":{"english":"thirteen", "latin":"trēdecim"},
//         "ordinal":{"english":"thirteenth", "latinRoot":["terti", "decim"]}
//     },
//     {
//         "cardinal":{"english":"fourteen", "latin":"quattordecim"},
//         "ordinal":{"english":"fourteenth", "latinRoot":["quart", "decim"]}
//     },
//     {
//         "cardinal":{"english":"fifteen", "latin":"quīndecim"},
//         "ordinal":{"english":"fifteenth", "latinRoot":["quīnt", "decim"]}
//     },
//     {
//         "cardinal":{"english":"sixteen", "latin":"sēdecim"},
//         "ordinal":{"english":"sixteenth", "latinRoot":["sext", "decim"]}
//     },
//     {
//         "cardinal":{"english":"seventeen", "latin":"septendecim"},
//         "ordinal":{"english":"seventeenth", "latinRoot":["septim", "decim"]}
//     },
//     {
//         "cardinal":{"english":"eighteen", "latin":"duodēvīgintī"},
//         "ordinal":{"english":"eighteenth", "latinRoot":"duodēvīcēsim"}
//     },
//     {
//         "cardinal":{"english":"ninteen", "latin":"ūndēvīgintī"},
//         "ordinal":{"english":"nineteenth", "latinRoot":"ūndēvīcēsim"}
//     },
//     {
//         "cardinal":{"english":"twenty", "latin":"vīgintī"},
//         "ordinal":{"english":"twentieth", "latinRoot":"vīcēsim"}
//     },
//     {
//         "cardinal":{"english":"fifty", "latin":"quīnquāgintā"},
//         "ordinal":{"english":"fiftieth", "latinRoot":"quīnquāgēsim"}
//     },
//     {
//         "cardinal":{"english":"one hundred", "latin":"centum"},
//         "ordinal":{"english":"one hundredth", "latinRoot":"centēsim"}
//     },
//     {
//         "cardinal":{"english":"five hundred", "latinRoot":["quīngentī", "quīngentae", "quīngenta"]},
//         "ordinal":{"english":"five hundredth", "latinRoot":"quīngentēsim"}
//     },
//     {
//         "cardinal":{"english":"one thousand", "latinRoot":"mille"},
//         "ordinal":{"english":"one thousandth", "latinRoot":"millēsim"}
//     },
// ];

const numbers = [
    {
        "cardinal":{"english":"one", "latin":{"required":"ūnus", "optional":", -a, -um"}},
        "ordinal":{"english":"first", "latin":{"required":"prīmus", "optional":", -a, -um"}}
    },
    {
        "cardinal":{"english":"two", "latin":{"required":"duo", "optional":", duae, duo"}},
        "ordinal":{"english":"second", "latin":{"required":"secundus", "optional":", -a, -um"}}
    },
    {
        "cardinal":{"english":"three", "latin":{"required":"trēs", "optional":", trēs, tria"}},
        "ordinal":{"english":"third", "latin":{"required":"tertius", "optional":", -a, -um"}}
    },
    {
        "cardinal":{"english":"four", "latin":{"required":"quattuor", "optional":""}},
        "ordinal":{"english":"fourth", "latin":{"required":"quartus", "optional":", -a, -um"}}
    },
    {
        "cardinal":{"english":"five", "latin":{"required":"quīnque", "optional":""}},
        "ordinal":{"english":"fifth", "latin":{"required":"quīntus", "optional":", -a, -um"}}
    },
    {
        "cardinal":{"english":"six", "latin":{"required":"sex", "optional":""}},
        "ordinal":{"english":"sixth", "latin":{"required":"sextus", "optional":", -a, -um"}}
    },
    {
        "cardinal":{"english":"seven", "latin":{"required":"septem", "optional":""}},
        "ordinal":{"english":"seventh", "latin":{"required":"septimus", "optional":", -a, -um"}}
    },
    {
        "cardinal":{"english":"eight", "latin":{"required":"octō", "optional":""}},
        "ordinal":{"english":"eighth", "latin":{"required":"octāvus", "optional":", -a, -um"}}
    },
    {
        "cardinal":{"english":"nine", "latin":{"required":"novem", "optional":""}},
        "ordinal":{"english":"ninth", "latin":{"required":"nōnus", "optional":", -a, -um"}}
    },
    {
        "cardinal":{"english":"ten", "latin":{"required":"decem", "optional":""}},
        "ordinal":{"english":"tenth", "latin":{"required":"decimus", "optional":", -a, -um"}}
    },
    {
        "cardinal":{"english":"eleven", "latin":{"required":"ūndecim", "optional":""}},
        "ordinal":{"english":"eleventh", "latin":{"required":"ūndecimus", "optional":", -a, -um"}}
    },
    {
        "cardinal":{"english":"twelve", "latin":{"required":"duodecim", "optional":""}},
        "ordinal":{"english":"twelfth", "latin":{"required":"duodecimus", "optional":", -a, -um"}}
    },
    {
        "cardinal":{"english":"thirteen", "latin":{"required":"trēdecim", "optional":""}},
        "ordinal":{"english":"thirteenth", "latin":{"required":"tertius decimus", "optional":", -a, -um"}}
    },
    {
        "cardinal":{"english":"fourteen", "latin":{"required":"quattordecim", "optional":""}},
        "ordinal":{"english":"fourteenth", "latin":{"required":"quartus decimus", "optional":", -a, -um"}}
    },
    {
        "cardinal":{"english":"fifteen", "latin":{"required":"quīndecim", "optional":""}},
        "ordinal":{"english":"fifteenth", "latin":{"required":"quīntus decimus", "optional":", -a, -um"}}
    },
    {
        "cardinal":{"english":"sixteen", "latin":{"required":"sēdecim", "optional":""}},
        "ordinal":{"english":"sixteenth", "latin":{"required":"sextus decimus", "optional":", -a, -um"}}
    },
    {
        "cardinal":{"english":"seventeen", "latin":{"required":"septendecim", "optional":""}},
        "ordinal":{"english":"seventeenth", "latin":{"required":"septimus decimus", "optional":", -a, -um"}}
    },
    {
        "cardinal":{"english":"eighteen", "latin":{"required":"duodēvīgintī", "optional":""}},
        "ordinal":{"english":"eighteenth", "latin":{"required":"duodēvīcēsimus", "optional":", -a, -um"}}
    },
    {
        "cardinal":{"english":"ninteen", "latin":{"required":"ūndēvīgintī", "optional":""}},
        "ordinal":{"english":"nineteenth", "latin":{"required":"ūndēvīcēsimus", "optional":", -a, -um"}}
    },
    {
        "cardinal":{"english":"twenty", "latin":{"required":"vīgintī", "optional":""}},
        "ordinal":{"english":"twentieth", "latin":{"required":"vīcēsimus", "optional":", -a, -um"}}
    },
    {
        "cardinal":{"english":"fifty", "latin":{"required":"quīnquāgintā", "optional":""}},
        "ordinal":{"english":"fiftieth", "latin":{"required":"quīnquāgēsimus", "optional":", -a, -um"}}
    },
    {
        "cardinal":{"english":"one hundred", "latin":{"required":"centum", "optional":""}},
        "ordinal":{"english":"one hundredth", "latin":{"required":"centēsimus", "optional":", -a, -um"}}
    },
    {
        "cardinal":{"english":"five hundred", "latin":{"required":"quīngentī", "optional":", -ae, -a"}},
        "ordinal":{"english":"five hundredth", "latin":{"required":"quīngentēsimus", "optional":", -a, -um"}}
    },
    {
        "cardinal":{"english":"one thousand", "latin":{"required":"mille", "optional":""}},
        "ordinal":{"english":"one thousandth", "latin":{"required":"millēsimus", "optional":", -a, -um"}}
    },
];

// const numbers = [
//     {
//         "english":{
//             "cardinal":"one",
//             "ordinal":"first",
//             "number":"1"
//         },
//         "latin":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         }
//     },
//     {
//         "english":{
//             "cardinal":"two",
//             "ordinal":"second",
//             "number":"2"
//         },
//         "latin":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         }
//     },
//     {
//         "english":{
//             "cardinal":"three",
//             "ordinal":"third",
//             "number":"3"
//         },
//         "latin":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         }
//     },
//     {
//         "english":{
//             "cardinal":"four",
//             "ordinal":"fourth",
//             "number":"4"
//         },
//         "latin":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         }
//     },
//     {
//         "english":{
//             "cardinal":"five",
//             "ordinal":"fifth",
//             "number":"5"
//         },
//         "latin":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         }
//     },
//     {
//         "english":{
//             "cardinal":"six",
//             "ordinal":"sixth",
//             "number":"6"
//         },
//         "latin":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         }
//     },
//     {
//         "english":{
//             "cardinal":"seven",
//             "ordinal":"seventh",
//             "number":"7"
//         },
//         "latin":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         }
//     },
//     {
//         "english":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         },
//         "latin":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         }
//     },
//     {
//         "english":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         },
//         "latin":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         }
//     },
//     {
//         "english":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         },
//         "latin":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         }
//     },
//     {
//         "english":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         },
//         "latin":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         }
//     },
//     {
//         "english":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         },
//         "latin":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         }
//     },
//     {
//         "english":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         },
//         "latin":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         }
//     },
//     {
//         "english":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         },
//         "latin":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         }
//     },
//     {
//         "english":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         },
//         "latin":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         }
//     },
//     {
//         "english":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         },
//         "latin":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         }
//     },
//     {
//         "english":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         },
//         "latin":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         }
//     },
//     {
//         "english":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         },
//         "latin":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         }
//     },
//     {
//         "english":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         },
//         "latin":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         }
//     },
//     {
//         "english":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         },
//         "latin":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         }
//     },
//     {
//         "english":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         },
//         "latin":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         }
//     },
//     {
//         "english":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         },
//         "latin":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         }
//     },
//     {
//         "english":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         },
//         "latin":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         }
//     },
//     {
//         "english":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         },
//         "latin":{
//             "cardinal":"",
//             "ordinal":"",
//             "number":""
//         }
//     }
// ];