ModManager.modules.push(function(){

    return [
        {

            id:"quests-default",
            needs:[ ],
            provides:[ "quests-default" ],
            label:{
                EN:"MD2 quest generator default data"
            },
            content:[
                {
                    type:"globalLabels",
                    data:{
                        objectives:{
                            IT:"Obiettivi della missione",
                            EN:"Quest objectives",ES:"Objetivos de la misión"
                        },
                        specialRules:{
                            IT:"Regole speciali",
                            EN:"Quest special rules",ES:"Reglas especiales de la misión"
                        },
                        challenges:{
                            IT:"Sfide",
                            EN:"Challenges",ES:"Desafíos"
                        },
                        challengesExplanation:{
                            IT:"Se sei in cerca di pericolo e gloria puoi affrontare questa avventura seguendo una o pi&ugrave; di queste regole aggiuntive:",
                            EN:"If you are seeking danger and glory you can tackle this adventure by following one or more of these additional rules:",ES:"Si buscas peligro y gloria, puedes afrontar esta aventura siguiendo una o más de estas reglas adicionales:"
                        },
                        requiredTiles:{
                            IT:"Tessere richieste",
                            EN:"Tiles needed",ES:"Losetas necesarias"
                        },
                        upTo:{
                            IT:"Fino a",
                            EN:"Up to",ES:"Hasta"
                        },
                        lootRatio:{
                            IT:"I segnalini Bottino vanno collocati in base al numero di Eroi:",
                            EN:"Loot tokens are placed according to the number of Heroes:",ES:"Los marcadores de Botín se colocan según el número de Héroes:"
                        },
                        questHeader:{
                            IT:"Avventura One-Shot:",
                            EN:"One-Shot Quest:",ES:"Aventura Individual:"
                        },
                        questFooter:{
                            IT:"Massive Randomness 2 &dash; Avventura One-Shot",
                            EN:"Massive Randomness 2 &dash; One Shot Quest",ES:"Massive Randomness 2 &dash; Aventura Individual"
                        },
                        showHiddenText:{
                            IT:"Mostra testo nascosto",
                            EN:"Show hidden text",ES:"Mostrar texto oculto"
                        },
                        massiveDarkness1:{
                            EN:"from Massive Darkness 1",ES:"de Massive Darkness 1",
                            IT:"da Massive Darkness 1"
                        }
                    }
                },{
                    type:"specialRules",
                    data:{
                        noLydian:[
                            {
                                priority:10,
                                type:"rule",
                                name:{
                                    IT:"Sonno di Lyidan",
                                    EN:"Lyidan's Sleep",ES:"El Sueño de Lyidan"
                                },
                                explanation:{
                                    IT:"Rimuovere le carte di Lyidan da tutti i mazzi dei Mostri Erranti.",
                                    EN:"Remove Lyidan cards from all Roaming Monster decks.",ES:"Retira las cartas de Lyidan de todos los mazos de Monstruos Errantes."
                                }
                            }
                        ]
                    }
                }
            ]
        },{

            id:"quests-default",
            needs:[ ],
            provides:[ "quests-default", "quest-default-zombicide" ],
            label:{
                EN:"MD2 quest generator default data (Zombicide rules)"
            },
            content:[
                {
                    type:"specialRules",
                    data:{
                        zombicideTiles:[
                            {
                                priority:9,
                                type:"rule",
                                name:{
                                    IT:"Cross-over con Zombicide",
                                    EN:"Zombicide Cross-over",ES:"Cruce con Zombicide"
                                },
                                explanation:{
                                    IT:"Le tessere di Zombicide (indicate con <b>[Z]</b>) sono da considerarsi divise in 3&times;3 Zone come le tessere di Massive Darkness. Gli edifici sono da equivalenti alle Camere di Massive Darkness 2 ed i muri sui bordi di una tessera o tra una Zona di edificio ed una Zona di strada sono da considerarsi sempre chiusi, a meno che non vi sia un segnalino Porta. Le tessere di Zombicide sono ambientate all'esterno, per cui le Zone di strada sono considerate Zone di Luce e le Zone degli edifici sono considerate Zone d'Ombra.",
                                    EN:"The Zombicide tiles (indicated with <b>[Z]</b>) are to be considered split into 3&times;3 Zones like the Massive Darkness tiles. The buildings are equivalent to Massive Darkness 2 Chambers and the walls on tile borders or between a building Zone and a street Zone are always considered closed unless there is a door token. Zombicide tiles are set outdoors, so the street Zones are considered Light Zones and the building Zones are considered Shadow Zones.",ES:"Las losetas de Zombicide (indicadas con <b>[Z]</b>) deben considerarse divididas en 3&times;3 Zonas, igual que las losetas de Massive Darkness. Los edificios equivalen a las Cámaras de Massive Darkness 2, y los muros en los bordes de una loseta o entre una Zona de edificio y una Zona de calle se consideran siempre cerrados, a menos que haya un marcador de Puerta. Las losetas de Zombicide están ambientadas en el exterior, por lo que las Zonas de calle se consideran Zonas de Luz y las Zonas de edificios se consideran Zonas de Sombra."
                                }
                            }
                        ],
                        zombicideHedges:[
                            {
                                priority:9,
                                type:"rule",
                                name:{
                                    IT:"Ostacoli",
                                    EN:"Obstacles",ES:"Obstáculos"
                                },
                                explanation:{
                                    IT:"Gli ostacoli (siepi, ponti, etc.) stampati sulle tessere possono essere attraversate normalmente ma interrompono le Linee di Vista di Eroi e Nemici.",
                                    EN:"Obstacles (hedges, brodges, etc.) printed on tiles can be crossed normally but interrupt Lines of Sight of Heroes and Enemies.",ES:"Los obstáculos (setos, puentes, etc.) impresos en las losetas pueden cruzarse con normalidad, pero interrumpen las Líneas de Visión de Héroes y Enemigos."
                                }
                            }
                        ],
                        zombicideWater:[
                            {
                                priority:9,
                                type:"rule",
                                name:{
                                    IT:"Le Zone Allagate",
                                    EN:"The Waterholes",ES:"Las Zonas Anegadas"
                                },
                                explanation:{
                                    IT:"Nemici ed Eroi si muovono regolarmente attraverso le Zone Allagate ma devono spendere 1 PM in pi&ugrave; per uscire da una Zona Allagata attraverso un cornicione.",
                                    EN:"Enemies and Heroes move through Waterholes regularly but must spend 1 extra MP to leave a Waterhole through a Ledge.",ES:"Enemigos y Héroes se mueven con normalidad por las Zonas Anegadas, pero deben gastar 1 PM adicional para salir de una Zona Anegada a través de una cornisa."
                                }
                            }
                        ],
                        zombicideSolidWalls:[
                            {
                                priority:9,
                                type:"rule",
                                name:{
                                    IT:"I Bastioni",
                                    EN:"The Ramparts",ES:"Los Bastiones"
                                },
                                explanation:{
                                    IT:"Le tessere delle torri contengono sia Zone degli edifici che Zone di strada, delimitate dai bastioni:<ul>"+
                                        "<li>I bastioni non possono essere attraversati, ma non bloccano le Linee di Vista.</li>"+
                                        "<li>&Egrave; possibile tirare attraverso i bastioni.</li>"+
                                        "<li>Un Eroe o un Nemico nella Zona di una torre pu&ograve; vedere al di sopra di un edificio, fino alle Zone oltre di esso. Analogamente, qualsiasi Eroe o Nemico in una di quelle Zone possiede Linea di Vista fino all'Eroe o al Nemico sulla torre.</li>"+
                                        "<li>Un Eroe pu&ograve; tirare dalla Zona di una torre al di sopra di una Zona di un edificio. La Zona dell'edificio attraversata dal tiro conta ai fini di determinare la gittata dell'arma o dell'incantesimo, ma non &egrave; raggiunta da una Linea di Vista.</li>"+
                                        "<li>Non &egrave; possibile tracciare Linee di Vista tra le Zone delle torri delimitate dai bastioni e le zone degli edifici adiacenti a esse, nemmeno se c'&egrave; una porta aperta.</li>"+
                                        "</ul>",
                                    EN:"Tower tiles feature both building and street Zones, bordered by ramparts:<ul>"+
                                        "<li>Ramparts can't be crossed but don't block Lines of Sight</li>"+
                                        "<li>Ramparts can be shot through.</li>"+
                                        "<li>A Hero or Enemy in a tower Zone can see over a building to Zones beyond it. Likewise, any Hero or Enemy in one of these Zones has a Line of Sight to the Hero or Enemy on the tower.</li>"+
                                        "<li>A Hero can shoot from a tower Zone, over a building Zone. The building Zone that is shot through counts towards the weapon or spell's Range, but there is no Line of Sight to it.</li>"+
                                        "<li>Lines of Sight can't be drawn between tower Zones bordered with ramparts and building Zones next to them, even with an open door.</li>"+
                                        "</ul>",ES:"Las losetas de torre contienen tanto Zonas de edificio como Zonas de calle, delimitadas por bastiones:<ul><li>Los bastiones no pueden cruzarse, pero no bloquean las Líneas de Visión.</li><li>Es posible disparar a través de los bastiones.</li><li>Un Héroe o Enemigo en la Zona de una torre puede ver por encima de un edificio, hasta las Zonas más allá de él. Del mismo modo, cualquier Héroe o Enemigo en una de esas Zonas tiene Línea de Visión hasta el Héroe o Enemigo situado en la torre.</li><li>Un Héroe puede disparar desde la Zona de una torre por encima de una Zona de edificio. La Zona de edificio atravesada por el disparo cuenta a efectos del alcance del arma o hechizo, pero no está alcanzada por una Línea de Visión.</li><li>No es posible trazar Líneas de Visión entre las Zonas de torre delimitadas por bastiones y las Zonas de edificio adyacentes a ellas, ni siquiera si hay una puerta abierta.</li></ul>"
                                }
                            }
                        ]
                    }
                }
            ]
        }
    ]

});