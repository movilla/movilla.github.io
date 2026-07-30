ModManager.modules.push(function(){

    return [
        {
            id:"campaign",
            needs:[ "campaign-upgradepack" ],
            provides:[ "campaign-default", "generator-campaign" ],
            label:{
                EN:"Default data for campaigns"
            },
            content:[
                {
                    type:"campaignRewards",
                    data:[
                        {
                            tags:[ "loot", "skill", "skillQuality2" ],
                            maxAmount:1,
                            description:{
                                IT:"Scegliete uno degli Eroi ed assegnategli la carta Campagna 14 della Campagna Prologo.",
                                EN:"Select 1 Hero and assign the Campaign card 14 of the Prologue Campaign.",ES:"Selecciona 1 Héroe y asígnale la carta Campaña 14 de la Campaña Prólogo."
                            }
                        },{
                            tags:[ "loot", "skill", "skillQuality2" ],
                            maxAmount:1,
                            description:{
                                IT:"Scegliete uno degli Eroi ed assegnategli la carta Campagna 16 della Campagna Prologo.",
                                EN:"Select 1 Hero and assign the Campaign card 16 of the Prologue Campaign.",ES:"Selecciona 1 Héroe y asígnale la carta Campaña 16 de la Campaña Prólogo."
                            }
                        },{
                            tags:[ "loot", "relic", "skillQuality3" ],
                            maxAmount:1,
                            description:{
                                IT:"Pesca la carta Campagna 11 della Campagna Prologo.",
                                EN:"Draw the Campaign card 11 of the Prologue Campaign.",ES:"Roba la carta Campaña 11 de la Campaña Prólogo."
                            }
                        },{
                            tags:[ "loot", "skill", "skillQuality3" ],
                            maxAmount:1,
                            description:{
                                IT:"Scegliete uno degli Eroi ed assegnategli la carta Campagna 20 della Campagna Prologo.",
                                EN:"Select 1 Hero and assign the Campaign card 20 of the Prologue Campaign.",ES:"Selecciona 1 Héroe y asígnale la carta Campaña 20 de la Campaña Prólogo."
                            }
                        },{
                            tags:[ "loot", "companion", "companionQuality2" ],
                            maxAmount:1,
                            description:{
                                IT:"Pesca la carta Campagna 12 della Campagna Prologo.",
                                EN:"Draw the Campaign card 12 of the Prologue Campaign.",ES:"Roba la carta Campaña 12 de la Campaña Prólogo."
                            }
                        },{
                            tags:[ "loot", "relic", "relicQuality1" ],
                            maxAmount:1,
                            description:{
                                IT:"Pesca la carta Campagna 3 della Campagna Prologo.",
                                EN:"Draw the Campaign card 3 of the Prologue Campaign.",ES:"Roba la carta Campaña 3 de la Campaña Prólogo."
                            }
                        },{
                            tags:[ "loot", "relic", "relicQuality1" ],
                            maxAmount:1,
                            description:{
                                IT:"Pesca la carta Campagna 2 della Campagna Prologo.",
                                EN:"Draw the Campaign card 2 of the Prologue Campaign.",ES:"Roba la carta Campaña 2 de la Campaña Prólogo."
                            }
                        },{
                            tags:[ "loot", "relic", "relicQuality2" ],
                            maxAmount:1,
                            description:{
                                IT:"Pesca la carta Campagna 4 della Campagna Prologo.",
                                EN:"Draw the Campaign card 4 of the Prologue Campaign.",ES:"Roba la carta Campaña 4 de la Campaña Prólogo."
                            }
                        },{
                            tags:[ "loot", "relic", "relicQuality2" ],
                            maxAmount:1,
                            description:{
                                IT:"Pesca la carta Campagna 18 della Campagna Prologo.",
                                EN:"Draw the Campaign card 18 of the Prologue Campaign.",ES:"Roba la carta Campaña 18 de la Campaña Prólogo."
                            }
                        },{
                            tags:[ "loot", "relic", "relicQuality2" ],
                            maxAmount:1,
                            description:{
                                IT:"Pesca la carta Campagna 1 della Campagna Prologo.",
                                EN:"Draw the Campaign card 1 of the Prologue Campaign.",ES:"Roba la carta Campaña 1 de la Campaña Prólogo."
                            }
                        },{
                            tags:[ "loot", "relic", "relicQuality3" ],
                            maxAmount:1,
                            description:{
                                IT:"Pesca la carta Campagna 24 della Campagna Prologo.",
                                EN:"Draw the Campaign card 24 of the Prologue Campaign.",ES:"Roba la carta Campaña 24 de la Campaña Prólogo."
                            }
                        },{
                            tags:[ "loot", "relic", "relicQuality3" ],
                            maxAmount:1,
                            description:{
                                IT:"Pesca la carta Campagna 6 della Campagna Prologo.",
                                EN:"Draw the Campaign card 6 of the Prologue Campaign.",ES:"Roba la carta Campaña 6 de la Campaña Prólogo."
                            }
                        }
                    ]
                }
            ]
        }
    ];

});