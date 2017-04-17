if(window.location.href.indexOf('topic') == 32 || window.location.href.indexOf('single') == 32){

    var addBadge = createAddRewardFunction("badge");
    var createBadge = createCreateRewardFunction("badge");

//  Badges are defined in the order they are to be displayed.  They are separated by group for easy lookup.
//  Commented lines in places of badges are for badges that are likely to exist in the near future, but have
//  not yet been made and/or needed.

    var createRewardBadges = function()
    {
//  Staff Badges.  Admins, Moderators, Ambassadors, then other positions if needed. 

        createBadge("StaffJupiter", "http://b3.ifrm.com/5920/164/0/f7000134/StaffECJupiter.png", "Jupiter Administrator", false);
        createBadge("StaffVenus", "http://b3.ifrm.com/5920/164/0/f7000135/StaffLDVenus.png", "Venus Administrator", false);
        createBadge("StaffMercury", "http://b3.ifrm.com/5920/164/0/f7000232/StaffLDMercury.png", "Mercury Administrator", false);
		createBadge("StaffMars", "http://b3.ifrm.com/5920/164/0/f7000137/StaffWMMars.png", "Mars Administrator", false);
		createBadge("StaffUnaligned", "http://b3.ifrm.com/5920/164/0/f7000136/StaffREUnaligned.png", "Unaligned Administrator", false);
    
        createBadge("StaffAmbassadorAU", "http://b3.ifrm.com/5920/164/0/f7000207/StaffAmbassadorAU.png", "Ambassador - Part of Aeiou Universe's Staff", false);
        createBadge("StaffAmbassadorGSAR", "http://b3.ifrm.com/5920/164/0/f7000229/StaffAmbassadorGSAR.png", "Ambassador - Part of Golden Sun Adept's Refuge's Staff", false);
        createBadge("StaffAmbassadorGSHC", "http://b3.ifrm.com/5920/164/0/f7000266/StaffAmbassadorGSHC.png", "Ambassador - Part of Golden Sun Hacking Community's Staff", false);
        createBadge("StaffAmbassadorGSL", "http://b3.ifrm.com/5920/164/0/f7000394/StaffAmbassadorGSL.png", "Ambassador - Part of Golden Sun Land's Staff", false);
        createBadge("StaffAmbassadorToK", "http://b3.ifrm.com/5920/164/0/f7000393/StaffAmbassadorToK.png", "Ambassador - Part of Temple of Kraden's Staff", false);

//StaffOther

//  Alliance badges.  Sorted Venus, Mars, Jupiter, then Mercury.  Sorted then by rank.  Custom Ranks sorted alphabetically after Rank 5.

        createBadge("AllianceRankVenus1", "http://b3.ifrm.com/5920/164/0/f7000150/AllianceRankVenus1.png", "Initiate", false);
        createBadge("AllianceRankVenus2", "http://b3.ifrm.com/5920/164/0/f7000151/AllianceRankVenus2.png", "Citizen", false);
        createBadge("AllianceRankVenus3", "http://b3.ifrm.com/5920/164/0/f7000152/AllianceRankVenus3.png", "Warrior", false);
        createBadge("AllianceRankVenus4", "http://b3.ifrm.com/5920/164/0/f7000154/AllianceRankVenus4.png", "Elite", false);
        createBadge("AllianceRankVenus5", "http://b3.ifrm.com/5920/164/0/f7000155/AllianceRankVenus5.png", "Nobility", false);
		
        createBadge("AllianceRankVenusQuartz", "http://b3.ifrm.com/5920/164/0/f7000156/AllianceRankVenusQuartz.png", "Machinist", false);

        createBadge("AllianceRankMars1", "http://b3.ifrm.com/5920/164/0/f7000144/AllianceRankMars1.png", "Kindred Ash", false);
        createBadge("AllianceRankMars2", "http://b3.ifrm.com/5920/164/0/f7000145/AllianceRankMars2.png", "Flaming Crusader", false);
        createBadge("AllianceRankMars3", "http://b3.ifrm.com/5920/164/0/f7000146/AllianceRankMars3.png", "Obsidian Warlord", false);
        createBadge("AllianceRankMars4", "http://b3.ifrm.com/5920/164/0/f7000147/AllianceRankMars4.png", "Starfire Sentinel", false);
        createBadge("AllianceRankMars5", "http://b3.ifrm.com/5920/164/0/f7000148/AllianceRankMars5.png", "Deus Inferno", false);
		
        createBadge("AllianceRankMarsCatman", "http://b3.ifrm.com/5920/164/0/f7000233/AllianceRankMarsCatman.png", "Catman", false);

        createBadge("AllianceRankJupiter1", "http://b3.ifrm.com/5920/164/0/f7000138/AllianceRankJupiter1.png", "Scribe", false);
        createBadge("AllianceRankJupiter2", "http://b3.ifrm.com/5920/164/0/f7000139/AllianceRankJupiter2.png", "Apprentice", false);
        createBadge("AllianceRankJupiter3", "http://b3.ifrm.com/5920/164/0/f7000140/AllianceRankJupiter3.png", "Alchemist", false);
        createBadge("AllianceRankJupiter4", "http://b3.ifrm.com/5920/164/0/f7000141/AllianceRankJupiter4.png", "Thaumaturge", false);
        createBadge("AllianceRankJupiter5", "http://b3.ifrm.com/5920/164/0/f7000142/AllianceRankJupiter5.png", "Master", false);
		
        createBadge("AllianceRankJupiterRolina","http://b3.ifrm.com/5920/164/0/f7000143/AllianceRankJupiterRolina.png", "Fulminous Witch", false);

        createBadge("AllianceRankMercury1", "http://b3.ifrm.com/5920/164/0/f7000157/AllianceRankMercury1.png", "Acolyte", false);
        createBadge("AllianceRankMercury2", "http://b3.ifrm.com/5920/164/0/f7000158/AllianceRankMercury2.png", "Cleric", false);
        createBadge("AllianceRankMercury3", "http://b3.ifrm.com/5920/164/0/f7000159/AllianceRankMercury3.png", "Clergy", false);
        createBadge("AllianceRankMercury4", "http://b3.ifrm.com/5920/164/0/f7000160/AllianceRankMercury4.png", "Angel", false);
        createBadge("AllianceRankMercury5", "http://b3.ifrm.com/5920/164/0/f7000161/AllianceRankMercury5.png", "Archangel", false);

//  Character badges.  Order is Element, Fundament, Build, then Class.  Class badges sorted alphabetically.

        createBadge("CharacterElementVenus", "http://b3.ifrm.com/5920/164/0/f7000162/CharacterElementVenus.png", "Venus Aligned", false);
        createBadge("CharacterElementMars", "http://b3.ifrm.com/5920/164/0/f7000163/CharacterElementMars.png", "Mars Aligned", false);
        createBadge("CharacterElementJupiter", "http://b3.ifrm.com/5920/164/0/f7000164/CharacterElementJupiter.png", "Jupiter Aligned", false);
        createBadge("CharacterElementMercury", "http://b3.ifrm.com/5920/164/0/f7000165/CharacterElementMercury.png", "Mercury Aligned", false);

        createBadge("CharacterFundamentSolar", "http://b3.ifrm.com/5920/164/0/f7000169/CharacterFundamentSolar.png", "Solar Affinity", false);
        createBadge("CharacterFundamentStellar", "http://b3.ifrm.com/5920/164/0/f7000170/CharacterFundamentStellar.png", "Stellar Affinity", false);
        createBadge("CharacterFundamentLunar", "http://b3.ifrm.com/5920/164/0/f7000171/CharacterFundamentLunar.png", "Lunar Affinity", false);

        createBadge("CharacterBuildFreelancer", "http://b3.ifrm.com/5920/164/0/f7000166/CharacterBuildFreelancer.png", "Freelancer", false);
        createBadge("CharacterBuildWarrior", "http://b3.ifrm.com/5920/164/0/f7000167/CharacterBuildWarrior.png", "Warrior", false);
        createBadge("CharacterBuildCaster", "http://b3.ifrm.com/5920/164/0/f7000168/CharacterBuildCaster.png", "Caster", false);

        createBadge("CharacterClassAlyra", "http://b3.ifrm.com/5920/164/0/f7000283/CharacterClassAlyra.png", "Igniter", false);
        createBadge("CharacterClassCatman", "http://b3.ifrm.com/5920/164/0/f7000208/CharacterClassCatman.png", "Ultimate", false);
        createBadge("CharacterClassDelfes", "http://b3.ifrm.com/5920/164/0/f7000215/CharacterClassDelfes.png", "Bolt Striker", false);
        createBadge("CharacterClassDeltan", "http://b3.ifrm.com/5920/164/0/f7000216/CharacterClassDeltan.png", "Judicer", false);
        createBadge("CharacterClassEvelyn", "http://b3.ifrm.com/5920/164/0/f7000209/CharacterClassEvelyn.png", "Inquisitor", false);
        createBadge("CharacterClassFrei", "http://b3.ifrm.com/5920/164/0/f7000288/CharacterClassFrei.png", "Shokyaku", false);
        createBadge("CharacterClassGoblin", "http://b3.ifrm.com/5920/164/0/f7000217/CharacterClassGoblin.png", "Scholar", false);
        createBadge("CharacterClassHaven", "http://b3.ifrm.com/5920/164/0/f7000227/CharacterClassHaven.png", "Vagabond", false);
        createBadge("CharacterClassKoP", "http://b3.ifrm.com/5920/164/0/f7000289/CharacterClassKoP.png", "Rock Star", false);
        createBadge("CharacterClassMarida", "http://b3.ifrm.com/5920/164/0/f7000210/CharacterClassMarida.png", "Warlock", false);
        createBadge("CharacterClassMiva", "http://b3.ifrm.com/5920/164/0/f7000218/CharacterClassMiva.png", "Engineer", false);
        createBadge("CharacterClassNedben", "http://b3.ifrm.com/5920/164/0/f7000219/CharacterClassNedben.png", "Crypt Lord", false);
        createBadge("CharacterClassNeshi", "http://b3.ifrm.com/5920/164/0/f7000228/CharacterClassNeshi.png", "Adventurer", false);
        createBadge("CharacterClassQuartz", "http://b3.ifrm.com/5920/164/0/f7000220/CharacterClassQuartz.png", "Machinist", false);
        createBadge("CharacterClassRobertJoe", "http://b3.ifrm.com/5920/164/0/f7000211/CharacterClassRobertJoe.png", "Engineer", false);
        createBadge("CharacterClassRolina", "http://b3.ifrm.com/5920/164/0/f7000212/CharacterClassRolina.png", "Fulminarch", false);
        createBadge("CharacterClassSagie", "http://b3.ifrm.com/5920/164/0/f7000221/CharacterClassSagie.png", "Herbalist", false);
        createBadge("CharacterClassShadowfyst", "http://b3.ifrm.com/5920/164/0/f7000222/CharacterClassShadowfyst.png", "Merchant", false);
        createBadge("CharacterClassTich", "http://b3.ifrm.com/5920/164/0/f7000223/CharacterClassTich.png", "Dragoon", false);
        createBadge("CharacterClassWishmaster", "http://b3.ifrm.com/5920/164/0/f7000224/CharacterClassWishmaster.png", "Rogue", false);    

//  Activity badges.  Based on Posts, then Recruitment, then Simple Creative, then Complex Creative  
//  Post based.  Sorted:  Top Poster, Topic Maker, Seasonal Maker

        createBadge("ActivityTopGold", "http://z5.ifrm.com/5920/164/0/f5037113/ActivityTopGold.png", "Top three posters", true);
        createBadge("ActivityTopSilver", "http://z5.ifrm.com/5920/164/0/f5037112/ActivityTopSilver.png", "Top six posters", true);
        createBadge("ActivityTopBronze", "http://z5.ifrm.com/5920/164/0/f5037111/ActivityTopBronze.png", "Top ten posters", true);

        createBadge("ActivityTopicMaker005", "http://z5.ifrm.com/5920/164/0/f5037051/ActivityTopicMaker005.png", "Created 5 successful topics since joining!", true);
        createBadge("ActivityTopicMaker010", "http://z5.ifrm.com/5920/164/0/f5037052/ActivityTopicMaker010.png", "Created 10 successful topics since joining!", true);
        createBadge("ActivityTopicMaker015", "http://z5.ifrm.com/5920/164/0/f5037053/ActivityTopicMaker015.png", "Created 15 successful topics since joining!", true);
        createBadge("ActivityTopicMaker020", "http://z5.ifrm.com/5920/164/0/f5037054/ActivityTopicMaker020.png", "Created 20 successful topics since joining!", true);
        createBadge("ActivityTopicMaker025", "http://z5.ifrm.com/5920/164/0/f5037055/ActivityTopicMaker025.png", "Created 25 successful topics since joining!", true);
        createBadge("ActivityTopicMaker030", "http://z5.ifrm.com/5920/164/0/f5037056/ActivityTopicMaker030.png", "Created 30 successful topics since joining!", true);
        createBadge("ActivityTopicMaker035", "http://z5.ifrm.com/5920/164/0/f5037057/ActivityTopicMaker035.png", "Created 35 successful topics since joining!", true);
        createBadge("ActivityTopicMaker040", "http://z5.ifrm.com/5920/164/0/f5037058/ActivityTopicMaker040.png", "Created 40 successful topics since joining!", true);
        createBadge("ActivityTopicMaker045", "http://z5.ifrm.com/5920/164/0/f5037059/ActivityTopicMaker045.png", "Created 45 successful topics since joining!", true);
        createBadge("ActivityTopicMaker050", "http://z5.ifrm.com/5920/164/0/f5037060/ActivityTopicMaker050.png", "Created 50 successful topics since joining!", true);
        createBadge("ActivityTopicMaker055", "http://z5.ifrm.com/5920/164/0/f5037061/ActivityTopicMaker055.png", "Created 55 successful topics since joining!", true);
        createBadge("ActivityTopicMaker060", "http://z5.ifrm.com/5920/164/0/f5037062/ActivityTopicMaker060.png", "Created 60 successful topics since joining!", true);
        createBadge("ActivityTopicMaker065", "http://z5.ifrm.com/5920/164/0/f5037063/ActivityTopicMaker065.png", "Created 65 successful topics since joining!", true);
        createBadge("ActivityTopicMaker070", "http://z5.ifrm.com/5920/164/0/f5037064/ActivityTopicMaker070.png", "Created 70 successful topics since joining!", true);
        createBadge("ActivityTopicMaker075", "http://z5.ifrm.com/5920/164/0/f5037065/ActivityTopicMaker075.png", "Created 75 successful topics since joining!", true);
        createBadge("ActivityTopicMaker080", "http://z5.ifrm.com/5920/164/0/f5037066/ActivityTopicMaker080.png", "Created 80 successful topics since joining!", true);
        createBadge("ActivityTopicMaker085", "http://z5.ifrm.com/5920/164/0/f5037067/ActivityTopicMaker085.png", "Created 85 successful topics since joining!", true);
        createBadge("ActivityTopicMaker090", "http://z5.ifrm.com/5920/164/0/f5037068/ActivityTopicMaker090.png", "Created 90 successful topics since joining!", true);
        createBadge("ActivityTopicMaker095", "http://z5.ifrm.com/5920/164/0/f5037069/ActivityTopicMaker095.png", "Created 95 successful topics since joining!", true);
        createBadge("ActivityTopicMaker100", "http://z5.ifrm.com/5920/164/0/f5037070/ActivityTopicMaker100.png", "Created 100 successful topics since joining!", true);
        createBadge("ActivityTopicMaker105", "http://z5.ifrm.com/5920/164/0/f5037071/ActivityTopicMaker105.png", "Created 105 successful topics since joining!", true);
        createBadge("ActivityTopicMaker110", "http://z5.ifrm.com/5920/164/0/f5037072/ActivityTopicMaker110.png", "Created 110 successful topics since joining!", true);
        createBadge("ActivityTopicMaker115", "http://z5.ifrm.com/5920/164/0/f5037073/ActivityTopicMaker115.png", "Created 115 successful topics since joining!", true);
        createBadge("ActivityTopicMaker120", "http://z5.ifrm.com/5920/164/0/f5037074/ActivityTopicMaker120.png", "Created 120 successful topics since joining!", true);
        createBadge("ActivityTopicMaker125", "http://z5.ifrm.com/5920/164/0/f5037075/ActivityTopicMaker125.png", "Created 125 successful topics since joining!", true);
        createBadge("ActivityTopicMaker130", "http://z5.ifrm.com/5920/164/0/f5037076/ActivityTopicMaker130.png", "Created 130 successful topics since joining!", true);
        createBadge("ActivityTopicMaker135", "http://z5.ifrm.com/5920/164/0/f5037077/ActivityTopicMaker135.png", "Created 135 successful topics since joining!", true);
        createBadge("ActivityTopicMaker140", "http://z5.ifrm.com/5920/164/0/f5037078/ActivityTopicMaker140.png", "Created 140 successful topics since joining!", true);
        createBadge("ActivityTopicMaker145", "http://z5.ifrm.com/5920/164/0/f5037079/ActivityTopicMaker145.png", "Created 145 successful topics since joining!", true);
        createBadge("ActivityTopicMaker150", "http://z5.ifrm.com/5920/164/0/f5037080/ActivityTopicMaker150.png", "Created 150 successful topics since joining!", true);
        createBadge("ActivityTopicMaker155", "http://z5.ifrm.com/5920/164/0/f5037081/ActivityTopicMaker155.png", "Created 155 successful topics since joining!", true);
        createBadge("ActivityTopicMaker160", "http://z5.ifrm.com/5920/164/0/f5037082/ActivityTopicMaker160.png", "Created 160 successful topics since joining!", true);
        createBadge("ActivityTopicMaker165", "http://z5.ifrm.com/5920/164/0/f5037083/ActivityTopicMaker165.png", "Created 165 successful topics since joining!", true);
        createBadge("ActivityTopicMaker170", "http://z5.ifrm.com/5920/164/0/f5037084/ActivityTopicMaker170.png", "Created 170 successful topics since joining!", true);
        createBadge("ActivityTopicMaker175", "http://z5.ifrm.com/5920/164/0/f5037085/ActivityTopicMaker175.png", "Created 175 successful topics since joining!", true);
        createBadge("ActivityTopicMaker180", "http://z5.ifrm.com/5920/164/0/f5037086/ActivityTopicMaker180.png", "Created 180 successful topics since joining!", true);
        createBadge("ActivityTopicMaker185", "http://z5.ifrm.com/5920/164/0/f5037087/ActivityTopicMaker185.png", "Created 185 successful topics since joining!", true);
        createBadge("ActivityTopicMaker190", "http://z5.ifrm.com/5920/164/0/f5037088/ActivityTopicMaker190.png", "Created 190 successful topics since joining!", true);
        createBadge("ActivityTopicMaker195", "http://z5.ifrm.com/5920/164/0/f5037089/ActivityTopicMaker195.png", "Created 195 successful topics since joining!", true);
        createBadge("ActivityTopicMaker200", "http://z5.ifrm.com/5920/164/0/f5037090/ActivityTopicMaker200.png", "Created 200 successful topics since joining!", true);
        createBadge("ActivityTopicMaker205", "http://z5.ifrm.com/5920/164/0/f5037091/ActivityTopicMaker205.png", "Created 205 successful topics since joining!", true);
        createBadge("ActivityTopicMaker210", "http://z5.ifrm.com/5920/164/0/f5037092/ActivityTopicMaker210.png", "Created 210 successful topics since joining!", true);

        createBadge("ActivitySeasonMaker05", "http://z5.ifrm.com/5920/164/0/f5037093/ActivitySeasonMaker05.png", "Created 5 successful topics since the start of the season!", true);
        createBadge("ActivitySeasonMaker10", "http://z5.ifrm.com/5920/164/0/f5037094/ActivitySeasonMaker10.png", "Created 10 successful topics since the start of the season!", true);
        createBadge("ActivitySeasonMaker15", "http://z5.ifrm.com/5920/164/0/f5037095/ActivitySeasonMaker15.png", "Created 15 successful topics since the start of the season!", true);
        createBadge("ActivitySeasonMaker20", "http://z5.ifrm.com/5920/164/0/f5037096/ActivitySeasonMaker20.png", "Created 20 successful topics since the start of the season!", true);
        createBadge("ActivitySeasonMaker25", "http://z5.ifrm.com/5920/164/0/f5037097/ActivitySeasonMaker25.png", "Created 25 successful topics since the start of the season!", true);
        createBadge("ActivitySeasonMaker30", "http://z5.ifrm.com/5920/164/0/f5037098/ActivitySeasonMaker30.png", "Created 30 successful topics since the start of the season!", true);
        createBadge("ActivitySeasonMaker35", "http://z5.ifrm.com/5920/164/0/f5037099/ActivitySeasonMaker35.png", "Created 35 successful topics since the start of the season!", true);
        createBadge("ActivitySeasonMaker40", "http://z5.ifrm.com/5920/164/0/f5037100/ActivitySeasonMaker40.png", "Created 40 successful topics since the start of the season!", true);
        createBadge("ActivitySeasonMaker45", "http://z5.ifrm.com/5920/164/0/f5037101/ActivitySeasonMaker45.png", "Created 45 successful topics since the start of the season!", true);
        createBadge("ActivitySeasonMaker50", "http://z5.ifrm.com/5920/164/0/f5037102/ActivitySeasonMaker50.png", "Created 50 successful topics since the start of the season!", true);

//  Recruitment badges

        createBadge("ActivityRecruiter01", "http://b3.ifrm.com/5920/164/0/f7000203/ActivityRecruiter01.png", "Recruited a new member to the forums!", true);
        createBadge("ActivityRecruiter05", "http://b3.ifrm.com/5920/164/0/f7000204/ActivityRecruiter05.png", "Recruited 5 new members to the forums!", true);
        createBadge("ActivityRecruiter10", "http://b3.ifrm.com/5920/164/0/f7000205/ActivityRecruiter10.png", "Recruited 10 new members to the forums!", true);
        createBadge("ActivityRecruiter15", "http://b3.ifrm.com/5920/164/0/f7000206/ActivityRecruiter15.png", "Recruited 15 new members to the forums!", true);   

//  Simple Creative badges.  Sorted:  Artist, Writer, Musician

        createBadge("ActivityArtist01", "http://z5.ifrm.com/5920/164/0/f5037103/ActivityArtist.png", "Submitted a piece of visual art!", true);
        createBadge("ActivityArtist05", "http://z5.ifrm.com/5920/164/0/f5037104/ActivityArtist05.png", "Submitted 5 pieces of visual art!", true);
        createBadge("ActivityArtist10", "http://z5.ifrm.com/5920/164/0/f5037105/ActivityArtist10.png", "Submitted 10 pieces of visual art!", true);
        createBadge("ActivityArtist15", "http://z5.ifrm.com/5920/164/0/f5037106/ActivityArtist15.png", "Submitted 15 pieces of visual art!", true);
        createBadge("ActivityArtist20", "http://z5.ifrm.com/5920/164/0/f5037107/ActivityArtist20.png", "Submitted 20 pieces of visual art!", true);
        createBadge("ActivityArtist25", "http://z5.ifrm.com/5920/164/0/f5037108/ActivityArtist25.png", "Submitted 25 pieces of visual art!", true);
        createBadge("ActivityArtist30", "http://z5.ifrm.com/5920/164/0/f5037109/ActivityArtist30.png", "Submitted 30 pieces of visual art!", true);
        createBadge("ActivityArtist35", "http://z5.ifrm.com/5920/164/0/f5037110/ActivityArtist35.png", "Submitted 35 pieces of visual art!", true);

        createBadge("ActivityWriter01", "http://z5.ifrm.com/5920/164/0/f5037114/ActivityWriter.png", "Submitted a piece of creative writing!", true);
        createBadge("ActivityWriter05", "http://z5.ifrm.com/5920/164/0/f5037115/ActivityWriter05.png", "Submitted 5 pieces of creative writing!", true);
        createBadge("ActivityWriter10", "http://z5.ifrm.com/5920/164/0/f5037116/ActivityWriter10.png", "Submitted 10 pieces of creative writing!", true);
        createBadge("ActivityWriter15", "http://z5.ifrm.com/5920/164/0/f5037117/ActivityWriter15.png", "Submitted 15 pieces of creative writing!", true);
        createBadge("ActivityWriter20", "http://z5.ifrm.com/5920/164/0/f5037119/ActivityWriter20.png", "Submitted 20 pieces of creative writing!", true);
        createBadge("ActivityWriter25", "http://z5.ifrm.com/5920/164/0/f5037120/ActivityWriter25.png", "Submitted 25 pieces of creative writing!", true);
        createBadge("ActivityWriter30", "http://z5.ifrm.com/5920/164/0/f5037121/ActivityWriter30.png", "Submitted 30 pieces of creative writing!", true);
        createBadge("ActivityWriter35", "http://z5.ifrm.com/5920/164/0/f5037122/ActivityWriter35.png", "Submitted 35 pieces of creative writing!", true);

        createBadge("ActivityMusician01", "http://b3.ifrm.com/5920/164/0/f7000199/ActivityMusician01.png", "Submitted a piece of musical composition!", true);
        createBadge("ActivityMusician05", "http://b3.ifrm.com/5920/164/0/f7000200/ActivityMusician05.png", "Submitted 5 pieces of musical composition!", true);
        createBadge("ActivityMusician10", "http://b3.ifrm.com/5920/164/0/f7000201/ActivityMusician10.png", "Submitted 10 pieces of musical composition!", true);
        createBadge("ActivityMusician15", "http://b3.ifrm.com/5920/164/0/f7000202/ActivityMusician15.png", "Submitted 15 pieces of musical composition!", true);

//  Complex Creative.  Sorted Armsmith, Arcanist, Charagenesis

        createBadge("ActivityArmsmith01", "http://b3.ifrm.com/5920/164/0/f7000183/ActivityArmsmith01.png", "Created a piece of equipment that was accepted into the archive!")
        createBadge("ActivityArmsmith05", "http://b3.ifrm.com/5920/164/0/f7000184/ActivityArmsmith05.png", "Created 5 pieces of equipment that were accepted into the archive!", true);
        createBadge("ActivityArmsmith10", "http://b3.ifrm.com/5920/164/0/f7000185/ActivityArmsmith10.png", "Created 10 pieces of equipment that were accepted into the archive!", true);
        createBadge("ActivityArmsmith15", "http://b3.ifrm.com/5920/164/0/f7000186/ActivityArmsmith15.png", "Created 15 pieces of equipment that were accepted into the archive!", true);
        createBadge("ActivityArmsmith20", "http://b3.ifrm.com/5920/164/0/f7000187/ActivityArmsmith20.png", "Created 20 pieces of equipment that were accepted into the archive!", true);
        createBadge("ActivityArmsmith25", "http://b3.ifrm.com/5920/164/0/f7000188/ActivityArmsmith25.png", "Created 25 pieces of equipment that were accepted into the archive!", true);
        createBadge("ActivityArmsmith30", "http://b3.ifrm.com/5920/164/0/f7000190/ActivityArmsmith30.png", "Created 30 pieces of equipment that were accepted into the archive!", true);
        createBadge("ActivityArmsmith35", "http://b3.ifrm.com/5920/164/0/f7000191/ActivityArmsmith35.png", "Created 35 pieces of equipment that were accepted into the archive!", true);
        createBadge("ActivityArmsmith40", "http://b3.ifrm.com/5920/164/0/f7000192/ActivityArmsmith40.png", "Created 40 pieces of equipment that were accepted into the archive!", true);
        createBadge("ActivityArmsmith45", "http://b3.ifrm.com/5920/164/0/f7000193/ActivityArmsmith45.png", "Created 45 pieces of equipment that were accepted into the archive!", true);
        createBadge("ActivityArmsmith50", "http://b3.ifrm.com/5920/164/0/f7000194/ActivityArmsmith50.png", "Created 50 pieces of equipment that were accepted into the archive!", true);

        createBadge("ActivityArcanist01", "http://b3.ifrm.com/5920/164/0/f7000172/ActivityArcanist01.png", "Created a spell set that was accepted into the archive!", true);
        createBadge("ActivityArcanist05", "http://b3.ifrm.com/5920/164/0/f7000173/ActivityArcanist05.png", "Created 5 spell sets that were accepted into the archive!", true);
        createBadge("ActivityArcanist10", "http://b3.ifrm.com/5920/164/0/f7000174/ActivityArcanist10.png", "Created 10 spell sets that were accepted into the archive!", true);
        createBadge("ActivityArcanist15", "http://b3.ifrm.com/5920/164/0/f7000175/ActivityArcanist15.png", "Created 15 spell sets that were accepted into the archive!", true);
        createBadge("ActivityArcanist20", "http://b3.ifrm.com/5920/164/0/f7000176/ActivityArcanist20.png", "Created 20 spell sets that were accepted into the archive!", true);
        createBadge("ActivityArcanist25", "http://b3.ifrm.com/5920/164/0/f7000177/ActivityArcanist25.png", "Created 25 spell sets that were accepted into the archive!", true);
        createBadge("ActivityArcanist30", "http://b3.ifrm.com/5920/164/0/f7000178/ActivityArcanist30.png", "Created 30 spell sets that were accepted into the archive!", true);
        createBadge("ActivityArcanist35", "http://b3.ifrm.com/5920/164/0/f7000179/ActivityArcanist35.png", "Created 35 spell sets that were accepted into the archive!", true);
        createBadge("ActivityArcanist40", "http://b3.ifrm.com/5920/164/0/f7000180/ActivityArcanist40.png", "Created 40 spell sets that were accepted into the archive!", true);
        createBadge("ActivityArcanist45", "http://b3.ifrm.com/5920/164/0/f7000181/ActivityArcanist45.png", "Created 45 spell sets that were accepted into the archive!", true);
        createBadge("ActivityArcanist50", "http://b3.ifrm.com/5920/164/0/f7000182/ActivityArcanist50.png", "Created 50 spell sets that were accepted into the archive!", true);

        createBadge("ActivityCharagenesis01", "http://b3.ifrm.com/5920/164/0/f7000195/ActivityCharagenesis01.png", "Created a fully fleshed out character in the Adept's Codex!", true);
        createBadge("ActivityCharagenesis05", "http://b3.ifrm.com/5920/164/0/f7000196/ActivityCharagenesis05.png", "Created 5 fully fleshed out characters in the Adept's Codex!", true);
        createBadge("ActivityCharagenesis10", "http://b3.ifrm.com/5920/164/0/f7000197/ActivityCharagenesis10.png", "Created 10 fully fleshed out characters in the Adept's Codex!", true);
        createBadge("ActivityCharagenesis15", "http://b3.ifrm.com/5920/164/0/f7000198/ActivityCharagenesis15.png", "Created 15 fully fleshed out characters in the Adept's Codex!", true);   

//  Game badges.  Sorted in order of game creation. 

        createBadge("GameCarcassonne", "http://z5.ifrm.com/5920/164/0/f5037294/GameCarcassonne.png", "Carcassonne Player", true);
        createBadge("GameCarcassonneWin", "http://z5.ifrm.com/5920/164/0/f5037295/GameCarcassonneWin.png", "Carcassonne Winner", true);
        createBadge("GameCarcassonneHost", "http://z5.ifrm.com/5920/164/0/f5037296/GameCarcassonneHost.png", "Carcassonne Host", true);

        createBadge("GamePandemic", "http://z5.ifrm.com/5920/164/0/f5037283/GamePandemic.png", "Pandemic Player", true);
        createBadge("GamePandemicHost", "http://z5.ifrm.com/5920/164/0/f5037284/GamePandemicHost.png", "Pandemic Host", true);

        createBadge("GameRisk", "http://z5.ifrm.com/5920/164/0/f5037286/GameRisk.png", "Weyard Risk Player", true);
        createBadge("GameRiskWin", "http://z5.ifrm.com/5920/164/0/f5037288/GameRiskWin.png", "Weyard Risk Winner", true);
        createBadge("GameRiskHost", "http://z5.ifrm.com/5920/164/0/f5037287/GameRiskHost.png", "Weyard Risk Host", true);

        createBadge("GameMexStand", " 	http://z5.ifrm.com/5920/164/0/f5037280/GameMexStand.png", "Mexican Standoff Player", true);
        createBadge("GameMexStandWin", "http://z5.ifrm.com/5920/164/0/f5037282/GameMexStandWin.png", "Mexican Standoff Winner", true);
        createBadge("GameMexStandHost", "http://z5.ifrm.com/5920/164/0/f5037281/GameMexStandHost.png", "Mexican Standoff Host", true);

        createBadge("GameClue", "http://z5.ifrm.com/5920/164/0/f5037275/GameClue.png", "Golden Sun Clue Player", true);
        createBadge("GameClueHost", "http://z5.ifrm.com/5920/164/0/f5037276/GameClueHost.png", "Golden Sun Clue Host", true);

        createBadge("GameScrabble", "http://z5.ifrm.com/5920/164/0/f5037289/GameScrabble.png", "Scrabble Player", true);
        createBadge("GameScrabbleWin", "http://z5.ifrm.com/5920/164/0/f5037291/GameScrabbleWin.png", "Scrabble Winner", true);
        createBadge("GameScrabbleHost", "http://z5.ifrm.com/5920/164/0/f5037290/GameScrabbleHost.png", "Scrabble Host", true);

        createBadge("GameCatan", "http://z5.ifrm.com/5920/164/0/f5037272/GameCatan.png", "Settlers of Catan Player", true);
        createBadge("GameCatanWin", "http://z5.ifrm.com/5920/164/0/f5037274/GameCatanWin.png", "Settlers of Catan Winner", true);
        createBadge("GameCatanHost", "http://z5.ifrm.com/5920/164/0/f5037273/GameCatanHost.png", "Settlers of Catan Host", true);

        createBadge("GameInfluence", "http://z5.ifrm.com/5920/164/0/f5037277/GameInfluence.png", "Influence Player", true);
        createBadge("GameInfluenceWin", "http://z5.ifrm.com/5920/164/0/f5037279/GameInfluenceWin.png", "Influence Winner", true);
        createBadge("GameInfluenceHost", "http://z5.ifrm.com/5920/164/0/f5037278/GameInfluenceHost.png", "Influence Host", true);

        createBadge("GameMachiKoro", "http://z5.ifrm.com/5920/164/0/f5037297/GameMachiKoro.png", "Machi Koro Player", true);
        createBadge("GameMachiKoroWin", "http://z5.ifrm.com/5920/164/0/f5037298/GameMachiKoroWin.png", "Machi Koro Winner", true);
        createBadge("GameMachiKoroHost", "http://z5.ifrm.com/5920/164/0/f5037299/GameMachiKoroHost.png", "Machi Koro Host", true);
	
	    createBadge("GameWerewolf", "http://b3.ifrm.com/5920/164/0/f7000065/GameWerewolf.png", "Werewolf Player", true);
        createBadge("GameWerewolfWin", "http://b3.ifrm.com/5920/164/0/f7000067/GameWerewolfWin.png", "Werewolf Winner", true);
	    createBadge("GameWerewolfHost", "http://b3.ifrm.com/5920/164/0/f7000066/GameWerewolfHost.png", "Werewolf Host", true);

//  Club badges.  Sorted alphabetically

        createBadge("ClubBadArtist", "http://z5.ifrm.com/5920/164/0/f5037123/ClubBadArtist.png", "Bad Artist Club Member", true);
        createBadge("ClubDnD", "http://z5.ifrm.com/5920/164/0/f5037124/ClubDnD.png", "Tabletop Gamers Member", true);
        createBadge("ClubDnDHost", "http://z5.ifrm.com/5920/164/0/f5037125/ClubDnDHost.png", "Tabletop Gamers DM", true);
        createBadge("ClubDnDRound", "http://b3.ifrm.com/5920/164/0/f7000399/ClubDnDRound.png", "Tabletop Gamers Round Robin player", true);
        //createBadge("ClubPokeLeague", "http://z5.ifrm.com/5920/164/0/f5037126/ClubPokeLeague.png", "Alba League Participant", true);
        //createBadge("ClubPokeLeagueAH", "http://z5.ifrm.com/5920/164/0/f5037154/ClubPokeLeagueAHHost.png", "Autumn Highlands Gym Leader", true);
        //createBadge("ClubPokeLeagueSC", "http://z5.ifrm.com/5920/164/0/f5037127/ClubPokeLeagueSCHost.png", "Spring Coast Gym Leader", true);
        //createBadge("ClubPokeLeagueSV", "http://z5.ifrm.com/5920/164/0/f5037128/ClubPokeLeagueSVHost.png", "Summer Valley Gym Leader", true);
        //createBadge("ClubPokeLeagueWM", "http://z5.ifrm.com/5920/164/0/f5037129/ClubPokeLeagueWMHost.png", "Winter Mountains Gym Leader", true);

//  Event badges.  Sorted Holiday, then Event.  Holidays sorted in calendar order

        createBadge("EventValentine2017", "http://b3.ifrm.com/5920/164/0/f7000398/EventValentine2017.png", "Participated in Valentines Activities 2017", true);

        createBadge("EventHalloween2014", "http://z5.ifrm.com/5920/164/0/f5037132/EventHalloween2014.png", "Dressed up for Halloween 2014", true);
        createBadge("EventHalloween2015", "http://z5.ifrm.com/5920/164/0/f5037133/EventHalloween2015.png", "Dressed up for Halloween 2015", true);
        createBadge("EventHalloween2016", "http://z5.ifrm.com/5920/164/0/f5037134/EventHalloween2016.png", "Dressed up for Halloween 2016", true);
        createBadge("EventHalloween2017", "http://b3.ifrm.com/5920/164/0/f7000396/EventHalloween2017.png", "Dressed up for Halloween 2017", true);

        createBadge("EventSanta2014", "http://z5.ifrm.com/5920/164/0/f5037135/EventSanta2014.png", "Participated in Christmas Activities 2014", true);
        createBadge("EventSanta2015", "http://z5.ifrm.com/5920/164/0/f5037136/EventSanta2015.png", "Participated in Christmas Activities 2015", true);
        createBadge("EventSanta2016", "http://z5.ifrm.com/5920/164/0/f5037137/EventSanta2016.png", "Participated in Christmas Activities 2016", true);
        createBadge("EventSanta2017", "http://b3.ifrm.com/5920/164/0/f7000397/EventSanta2017.png", "Participated in Christmas Activities 2017", true);
        
        createBadge("EventDefender2015", "http://z5.ifrm.com/5920/164/0/f5037130/EventDefender2015.png", "Defended the forum from the Doom Dragon!", true);
        createBadge("EventDefender2016", "http://z5.ifrm.com/5920/164/0/f5037131/EventDefender2016.png", "Defended their idea of fun when Darkness Descended!", true);
        createBadge("EventDefender2017", "http://b3.ifrm.com/5920/164/0/f7000395/EventDefender2017.png", "Faced the eldritch horrors!", true);
    }

//  Members are assigned badges below.  Members are sorted alphabettically, badges sorted in badge order established above.
//  Event badges are granted for each year they are participated in, but the only the latest iteration of an event is shown, 
//  all previous years are commented out.  Next to TopicMaker, SeasonMaker, Artist, Writer, Musician, Armsmith, Arcanist, 
//  Charagenesis, and Recruiter badges, a tally is kept in comments for how many they have produced.  Only those that have been
//  Reported in the badges topic contribute to the count.     

    var addBadges = function()
    {
//  A
        addBadge("Alyra", "CharacterElementMars", "2016/12/17");
        addBadge("Alyra", "CharacterFundamentStellar", "2016/12/17");
        addBadge("Alyra", "CharacterBuildCaster", "2016/12/17");
        addBadge("Alyra", "CharacterClassAlyra", "2016/12/17");

        addBadge("Artisan", "ActivityTopicMaker005", "2015/03/23");
        addBadge("Artisan", "ActivityArtist01", "2016/11/17"); // 1 Submission
        addBadge("Artisan", "ActivityWriter01", "2016/10/30"); // 1 Submission
		addBadge("Artisan", "EventHalloween2014", "2014/10/31");
		addBadge("Artisan", "EventHalloween2015", "2015/10/31");
        addBadge("Artisan", "EventHalloween2016", "2016/10/31");
		addBadge("Artisan", "EventSanta2014", "2014/12/25");
		addBadge("Artisan", "EventSanta2015", "2015/12/25");
        addBadge("Artisan", "EventSanta2016", "2016/12/25");
		addBadge("Artisan", "EventDefender2015", "2015/03/23");
        addBadge("Artisan", "EventDefender2016", "2016/12/03");

        addBadge("Ashtoro", "ActivityTopBronze", "2015/07/14");
        addBadge("Ashtoro", "ActivityTopicMaker005", "2015/03/05");
        addBadge("Ashtoro", "GameCarcassonne", "2014/05/31");
        addBadge("Ashtoro", "GamePandemic", "2014/07/15");
        addBadge("Ashtoro", "GameRiskWin", "2014/09/12");
        addBadge("Ashtoro", "GameClue", "2014/12/03");
        addBadge("Ashtoro", "GameScrabbleWin", "2015/03/27");
        addBadge("Ashtoro", "GameCatan", "2015/04/07");
        addBadge("Ashtoro", "GameInfluence", "2015/04/16");
		addBadge("Ashtoro", "EventDefender2015", "2015/03/23");
        addBadge("Ashtoro", "EventDefender2016", "2016/12/03");

//  B

        addBadge("BloodDuster", "ActivityTopicMaker005", "2015/01/05");

//  C
    
        addBadge("Catman", "StaffMars", "2016/12/03");
        addBadge("Catman", "AllianceRankMarsCatman", "2016/06/25");
        addBadge("Catman", "CharacterElementMars", "2016/12/10");
        addBadge("Catman", "CharacterFundamentSolar", "2016/12/10");
        addBadge("Catman", "CharacterBuildFreelancer", "2016/12/10");
        addBadge("Catman", "CharacterClassCatman", "2016/12/10");
        addBadge("Catman", "ActivityTopSilver", "2015/06/20");
        addBadge("Catman", "ActivityTopicMaker085", "2016/06/29");
        addBadge("Catman", "ActivityArtist01", "2016/07/14"); // 1 Submission
        addBadge("Catman", "ActivityWriter01", "2016/08/20"); // 2 Submissions
        addBadge("Catman", "GamePandemic", "2014/07/15");
        addBadge("Catman", "GameRisk", "2014/09/12");
        addBadge("Catman", "GameMexStandHost", "2014/11/16");
        addBadge("Catman", "GameClue", "2014/12/03");
        addBadge("Catman", "GameInfluenceHost", "2015/04/16");
	    addBadge("Catman", "GameWerewolf", "2015/09/22");
        addBadge("Catman", "ClubBadArtist", "2016/06/11");
        addBadge("Catman", "ClubDnDRound", "2016/06/11");
        addBadge("Catman", "EventValentine2017", "2017/02/14");
		addBadge("Catman", "EventHalloween2014", "2014/10/31");
		addBadge("Catman", "EventHalloween2015", "2015/10/31");
        addBadge("Catman", "EventHalloween2016", "2016/10/31");
		addBadge("Catman", "EventSanta2014", "2014/12/25");
		addBadge("Catman", "EventSanta2015", "2015/12/25");
        addBadge("Catman", "EventSanta2016", "2016/12/25");
		addBadge("Catman", "EventDefender2015", "2015/03/23");
        addBadge("Catman", "EventDefender2016", "2016/12/03");
    
        addBadge("cipher", "ActivityTopGold", "2015/03/31");
        addBadge("cipher", "ActivityTopicMaker010", "2015/03/27");
        addBadge("cipher", "GameMexStand", "2016/07/11");
        addBadge("cipher", "GameMachiKoro", "2014/05/31");
        addBadge("cipher", "ClubBadArtist", "2016/06/11");
        addBadge("cipher", "EventValentine2017", "2017/02/14");
		addBadge("cipher", "EventHalloween2014", "2014/10/31");
        addBadge("cipher", "EventHalloween2015", "2015/10/31");
		addBadge("cipher", "EventSanta2014", "2014/12/25");
        addBadge("cipher", "EventSanta2015", "2015/12/25");
		addBadge("cipher", "EventDefender2015", "2015/03/23");
        addBadge("cipher", "EventDefender2016", "2016/12/03");

        addBadge("Clawford", "EventDefender2015", "2015/03/23");

//  D

        addBadge("Dave","StaffAmbassadorGSAR", "2016/12/12");

        addBadge("Delfes", "AllianceRankJupiter3", "2016/06/25");
        addBadge("Delfes", "CharacterElementJupiter", "2016/12/10");
        addBadge("Delfes", "CharacterFundamentLunar", "2016/12/10");
        addBadge("Delfes", "CharacterBuildWarrior", "2016/12/10");
        addBadge("Delfes", "CharacterClassDelfes", "2016/12/10");
        addBadge("Delfes", "ActivityArtist01", "2016/07/30"); // 2 Submissions
        addBadge("Delfes", "ClubDnD", "2016/06/11");
        addBadge("Delfes", "EventValentine2017", "2017/02/14");
        addBadge("Delfes", "EventHalloween2016", "2016/10/31");
        addBadge("Delfes", "EventDefender2016", "2016/12/03");
    
        addBadge("DeltanTD", "AllianceRankMars1", "2016/06/25");
        addBadge("DeltanTD", "CharacterElementVenus", "2016/12/10");
        addBadge("DeltanTD", "CharacterFundamentLunar", "2016/12/10");
        addBadge("DeltanTD", "CharacterBuildWarrior", "2016/12/10");
        addBadge("DeltanTD", "CharacterClassDeltan", "2016/12/10");
        addBadge("DeltanTD", "ActivityWriter01", "2016/10/30"); // 2 Submissions
	    addBadge("DeltanTD", "GameWerewolf", "2015/09/22");
        addBadge("DeltanTD", "EventDefender2016", "2016/12/03");

        addBadge("Diego, the mentor", "ActivityTopBronze", "2016/07/01");
        addBadge("Diego, the mentor", "GameClue", "2014/12/03");
    
        addBadge("Diem", "ActivityTopicMaker010", "2014/06/19");
        addBadge("Diem", "GameCarcassonne", "2014/05/31");
        addBadge("Diem", "GameInfluence", "2015/04/16");
        addBadge("Diem", "EventHalloween2014", "2014/10/31");
		addBadge("Diem", "EventSanta2014", "2014/12/25");
        addBadge("Diem", "EventSanta2015", "2015/12/25");

        addBadge("Dragomir", "ActivityTopicMaker010", "2015/07/05");
		addBadge("Dragomir", "EventHalloween2014", "2014/10/31");
        addBadge("Dragomir", "EventHalloween2015", "2015/10/31");
		addBadge("Dragomir", "EventSanta2014", "2014/12/25");
		addBadge("Dragomir", "EventSanta2015", "2015/12/25");
        addBadge("Dragomir", "EventSanta2016", "2016/12/25");

//  E

        addBadge("EchoReaver", "EventSanta2014", "2014/12/25");

//  F

        addBadge("Fantoma", "EventHalloween2016", "2016/10/31");

        addBadge("Formina", "GameCatan", "2015/04/07");

        addBadge("Frei Zheng", "CharacterElementMars", "2016/12/19");
        addBadge("Frei Zheng", "CharacterFundamentStellar", "2016/12/19");
        addBadge("Frei Zheng", "CharacterBuildWarrior", "2016/12/19");
        addBadge("Frei Zheng", "CharacterClassFrei", "2016/12/19");

        addBadge("FrozenWrath", "ClubDnD", "2016/06/11");
		addBadge("FrozenWrath", "EventSanta2014", "2014/12/25");
        addBadge("FrozenWrath", "EventSanta2015", "2015/12/25");
        addBadge("FrozenWrath", "EventDefender2015", "2015/03/23");

//  G
        addBadge("Gnarlymaple", "EventValentine2017", "2017/02/14");
//  H

        addBadge("Harly", "ActivityTopBronze", "2014/05/11");
        addBadge("Harly", "ActivityTopicMaker020", "2016/06/29");
        addBadge("Harly", "GamePandemicHost", "2014/07/15");
        addBadge("Harly", "GameRisk", "2014/09/12");
        addBadge("Harly", "GameMexStandWin", "2016/07/11");
        addBadge("Harly", "GameClue", "2014/12/03");
        addBadge("Harly", "GameScrabble", "2015/03/27");
        addBadge("Harly", "GameCatan", "2015/04/07");
        addBadge("Harly", "GameInfluence", "2015/04/16");
    	addBadge("Harly", "GameWerewolfWin", "2015/09/22");
        addBadge("Harly", "ClubBadArtist", "2016/06/11");
        addBadge("Harly", "ClubDnD", "2016/06/11");
        addBadge("Harly", "EventHalloween2014", "2014/10/31");
        addBadge("Harly", "EventSanta2014", "2014/12/25");
        addBadge("Harly", "EventDefender2015", "2015/03/23");

    	addBadge("HistoriaMonado2", "ActivityWriter01", "2016/08/06"); // 1 Submission
        addBadge("HistoriaMonado2", "GameWerewolf", "2015/09/22");

//  I

        addBadge("Ignatius", "StaffAmbassadorGSAR", "2016/12/12");
        addBadge("Ignatius", "EventDefender2016", "2016/12/18");

        addBadge("InquisitorEvelyn", "CharacterElementMercury", "2016/12/10");
        addBadge("InquisitorEvelyn", "CharacterFundamentSolar", "2016/12/10");
        addBadge("InquisitorEvelyn", "CharacterBuildCaster", "2016/12/10");
        addBadge("InquisitorEvelyn", "CharacterClassEvelyn", "2016/12/10");
    
        addBadge("Iridana", "GameCarcassonne", "2014/05/31");
        addBadge("Iridana", "GameCatan", "2015/04/07");
        addBadge("Iridana", "EventHalloween2014", "2014/10/31");

//  J
//  K

        addBadge("Kirigishi", "StaffAmbassadorGSAR", "2016/12/12");

        addBadge("KnightOfPurgatory", "AllianceRankVenus3", "2016/06/25");
        addBadge("KnightOfPurgatory", "CharacterElementMars", "2016/12/12");
        addBadge("KnightOfPurgatory", "CharacterFundamentStellar", "2016/12/12");
        addBadge("KnightOfPurgatory", "CharacterBuildWarrior", "2016/12/12");
        addBadge("KnightOfPurgatory", "CharacterClassKoP", "2016/12/12");
        addBadge("KnightOfPurgatory", "GameMexStand", "2016/07/11");
        addBadge("KnightOfPurgatory", "ClubBadArtist", "2016/06/11");
        addBadge("KnightOfPurgatory", "EventValentine2017", "2017/02/14");
        addBadge("KnightOfPurgatory", "EventHalloween2016", "2016/10/31");
        addBadge("KnightOfPurgatory", "EventDefender2016", "2016/12/03");

//  L

        addBadge("Lord Earth", "ActivityTopBronze", "2016/06/26");

//  M

        addBadge("Misery", "ActivityArtist01", "2016/07/30"); // 2 Submissions
        addBadge("Misery", "EventDefender2015", "2015/03/23");

        addBadge("Miva", "AllianceRankVenus5", "2016/06/27");
        addBadge("Miva", "CharacterElementVenus", "2016/12/10");
        addBadge("Miva", "CharacterFundamentSolar", "2016/12/10");
        addBadge("Miva", "CharacterBuildCaster", "2016/12/10");
        addBadge("Miva", "CharacterClassMiva", "2016/12/10");
        addBadge("Miva", "ActivityTopSilver", "2015/03/31");
        addBadge("Miva", "ActivityTopicMaker125", "2016/09/19");
        addBadge("Miva", "ActivityArtist05", "2016/08/20"); // 9 Submissions
        addBadge("Miva", "GameCarcassonneHost", "2014/05/31");
        addBadge("Miva", "GameRiskHost", "2014/09/12");
        addBadge("Miva", "GameClue", "2014/12/03");
        addBadge("Miva", "GameScrabbleHost", "2015/03/27");
        addBadge("Miva", "GameCatanWin", "2015/04/07");
        addBadge("Miva", "GameMachiKoroHost", "2016/04/01");
        addBadge("Miva", "ClubBadArtist", "2016/06/11");
        addBadge("Miva", "ClubDnD", "2016/06/11");
        addBadge("Miva", "EventValentine2017", "2017/02/14");
		addBadge("Miva", "EventHalloween2014", "2014/10/31");
        addBadge("Miva", "EventHalloween2015", "2015/10/31");
		addBadge("Miva", "EventSanta2014", "2014/12/25");
		addBadge("Miva", "EventSanta2015", "2015/12/25");
        addBadge("Miva", "EventSanta2016", "2016/12/25");
		addBadge("Miva", "EventDefender2015", "2015/03/23");
        addBadge("Miva", "EventDefender2016", "2016/12/03");

//  N

        addBadge("Nedben", "StaffAmbassadorAU", "2016/07/18");
        addBadge("Nedben", "CharacterElementMercury", "2016/12/10");
        addBadge("Nedben", "CharacterFundamentStellar", "2016/12/10");
        addBadge("Nedben", "CharacterBuildCaster", "2016/12/10");
        addBadge("Nedben", "CharacterClassNedben", "2016/12/10");
        addBadge("Nedben", "ActivityWriter10", "2017/01/03"); // 11 submissions
        addBadge("Nedben", "EventValentine2017", "2017/02/14");
        addBadge("Nedben", "EventHalloween2016", "2016/10/31");
        addBadge("Nedben", "EventDefender2016", "2016/12/03");
	     
        addBadge("Neshi", "StaffMercury", "2016/12/03");
        addBadge("Neshi", "AllianceRankMercury4", "2016/12/16");
        addBadge("Neshi", "CharacterElementMercury", "2016/12/10");
        addBadge("Neshi", "CharacterFundamentStellar", "2016/12/10");
        addBadge("Neshi", "CharacterBuildWarrior", "2016/12/10");
        addBadge("Neshi", "CharacterClassNeshi", "2016/12/10");
        addBadge("Neshi", "ActivityTopicMaker040", "2015/08/21");
        addBadge("Neshi", "ActivityArtist20", "2015/08/20"); // 24 Submissions
        addBadge("Neshi", "ClubBadArtist", "2016/06/11");
        addBadge("Neshi", "EventValentine2017", "2017/02/14");
		addBadge("Neshi", "EventHalloween2014", "2014/10/31");
		addBadge("Neshi", "EventHalloween2015", "2015/10/31");
        addBadge("Neshi", "EventHalloween2016", "2016/10/31");
		addBadge("Neshi", "EventSanta2014", "2014/12/25");
		addBadge("Neshi", "EventSanta2015", "2015/12/25");
        addBadge("Neshi", "EventSanta2016", "2016/12/25");
		addBadge("Neshi", "EventDefender2015", "2015/03/23");
        addBadge("Neshi", "EventDefender2016", "2016/12/03");

        addBadge("Nikki", "ActivityTopicMaker010", "2015/03/23");
        addBadge("Nikki", "EventHalloween2014", "2014/10/31");
        addBadge("Nikki", "EventHalloween2015", "2015/10/31");
//      addBadge("Nikki", "EventSanta2014", "2014/12/25");
        addBadge("Nikki", "EventSanta2015", "2015/12/25");
        addBadge("Nikki", "EventDefender2015", "2015/03/23");

        addBadge("Nostalgic Nerd", "ActivityTopicMaker010", "2015/01/15");

//  O 
//  P 

        addBadge("Purple Quartz", "AllianceRankVenusQuartz", "2016/12/12");
        addBadge("Purple Quartz", "CharacterElementVenus", "2016/12/12");
        addBadge("Purple Quartz", "CharacterFundamentSolar", "2016/12/12");
        addBadge("Purple Quartz", "CharacterBuildCaster", "2016/12/12");
        addBadge("Purple Quartz", "CharacterClassQuartz", "2016/12/10");
        addBadge("Purple Quartz", "ActivityTopicMaker005", "2016/06/29");
        addBadge("Purple Quartz", "ActivityArtist01", "2016/07/06"); // 1 Submission 
        addBadge("Purple Quartz", "ActivityWriter01", "2016/08/20"); // 2 Submissions
        addBadge("Purple Quartz", "GameMexStand", "2016/07/11");
    	addBadge("Purple Quartz", "GameWerewolfWin", "2015/09/22");
        addBadge("Purple Quartz", "ClubBadArtist", "2016/06/11");
        addBadge("Purple Quartz", "ClubDnD", "2016/06/11");
        addBadge("Purple Quartz", "EventHalloween2016", "2016/10/31");
        addBadge("Purple Quartz", "EventDefender2016", "2016/12/03");

//  Q 
//  R 

        addBadge("RedliwLedah", "ActivityTopSilver", "2015/01/06");
        addBadge("RedliwLedah", "ActivityTopicMaker005", "2015/06/05");
        addBadge("RedliwLedah", "EventHalloween2014", "2014/10/31");
        addBadge("RedliwLedah", "EventSanta2014", "2014/12/25");
        addBadge("RedliwLedah", "EventDefender2015", "2015/03/23");

        addBadge("Reversal", "ActivityTopicMaker005", "2015/01/01");
        addBadge("Reversal", "GameClue", "2014/12/03");
		addBadge("Reversal", "EventHalloween2014", "2014/10/31");
        addBadge("Reversal", "EventHalloween2015", "2015/10/31");
		addBadge("Reversal", "EventSanta2014", "2014/12/25");
        addBadge("Reversal", "EventSanta2015", "2015/12/25");

        addBadge("Robert Joe", "StaffUnaligned", "2016/12/03");
        addBadge("Robert Joe", "CharacterElementJupiter", "2016/12/10");
        addBadge("Robert Joe", "CharacterFundamentSolar", "2016/12/10");
        addBadge("Robert Joe", "CharacterBuildWarrior", "2016/12/10");
        addBadge("Robert Joe", "CharacterClassRobertJoe", "2016/12/10");
        addBadge("Robert Joe", "ClubDnDRound", "2016/06/11");
        addBadge("Robert Joe", "EventDefender2016", "2016/12/03");

//  S 

        addBadge("Safe Haven", "AllianceRankMercury3", "2016/12/12");
        addBadge("Safe Haven", "CharacterElementJupiter", "2016/12/12");
        addBadge("Safe Haven", "CharacterFundamentSolar", "2016/12/12");
        addBadge("Safe Haven", "CharacterBuildCaster", "2016/12/12");
        addBadge("Safe Haven", "CharacterClassHaven", "2016/12/10");
        addBadge("Safe Haven", "ActivityTopicMaker010", "2016/06/29");
        addBadge("Safe Haven", "ClubBadArtist", "2016/06/11");
        addBadge("Safe Haven", "EventValentine2017", "2017/02/14");
        addBadge("Safe Haven", "EventDefender2016", "2016/12/03");

        addBadge("Sagie", "AllianceRankMercury5", "2016/06/25");
        addBadge("Sagie", "CharacterElementVenus", "2016/12/10");
        addBadge("Sagie", "CharacterFundamentLunar", "2016/12/10");
        addBadge("Sagie", "CharacterBuildCaster", "2016/12/10");
        addBadge("Sagie", "CharacterClassSagie", "2016/12/10");
        addBadge("Sagie", "ActivityTopGold", "2014/09/18");
        addBadge("Sagie", "ActivityTopicMaker140", "2016/06/29");
        addBadge("Sagie", "GameCarcassonneWin", "2014/05/31");
        addBadge("Sagie", "GamePandemic", "2014/07/15");
        addBadge("Sagie", "GameClue", "2014/12/03");
        addBadge("Sagie", "GameScrabble", "2015/03/27");
        addBadge("Sagie", "GameCatanHost", "2015/04/07");
        addBadge("Sagie", "GameMachiKoroWin", "2014/05/31");
    	addBadge("Sagie", "GameWerewolfWin", "2015/09/22");
        addBadge("Sagie", "ClubBadArtist", "2016/06/11");
		addBadge("Sagie", "EventHalloween2014", "2014/10/31");
        addBadge("Sagie", "EventHalloween2015", "2015/10/31");
		addBadge("Sagie", "EventSanta2014", "2014/12/25");
        addBadge("Sagie", "EventSanta2015", "2015/12/25");
        addBadge("Sagie", "EventDefender2015", "2015/03/23");

        addBadge("Saturos", "StaffAmbassadorToK", "2016/12/12");

        addBadge("Saucy Goblin", "AllianceRankMars2", "2016/06/26");
        addBadge("Saucy Goblin", "CharacterElementJupiter", "2016/12/10");
        addBadge("Saucy Goblin", "CharacterFundamentSolar", "2016/12/10");
        addBadge("Saucy Goblin", "CharacterBuildCaster", "2016/12/10");
        addBadge("Saucy Goblin", "CharacterClassGoblin", "2016/12/10");
        addBadge("Saucy Goblin", "ActivityArtist05", "2016/07/14"); // 6 Submissions
        addBadge("Saucy Goblin", "ActivityWriter01", "2016/07/14"); // 1 Submission
	    addBadge("Saucy Goblin", "GameWerewolfWin", "2015/09/22");
        addBadge("Saucy Goblin", "ClubBadArtist", "2016/06/11");
        addBadge("Saucy Goblin", "ClubDnDRound", "2016/06/11");
        addBadge("Saucy Goblin", "EventValentine2017", "2017/02/14");
        addBadge("Saucy Goblin", "EventHalloween2016", "2016/10/31");
        addBadge("Saucy Goblin", "EventSanta2016", "2016/12/25");
        addBadge("Saucy Goblin", "EventDefender2016", "2016/12/03");

        addBadge("Shadowfyst997", "StaffVenus", "2016/12/16");        
        addBadge("Shadowfyst997", "AllianceRankVenus4", "2016/06/26");
        addBadge("Shadowfyst997", "CharacterElementVenus", "2016/12/10");
        addBadge("Shadowfyst997", "CharacterFundamentStellar", "2016/12/10");
        addBadge("Shadowfyst997", "CharacterBuildCaster", "2016/12/10");
        addBadge("Shadowfyst997", "CharacterClassShadowfyst", "2016/12/10");
        addBadge("Shadowfyst997", "ActivityTopicMaker005", "2016/07/12");
        addBadge("Shadowfyst997", "ActivityWriter01", "2016/10/30"); // 1 Submission
        addBadge("Shadowfyst997", "GamePandemic", "2014/07/15");
        addBadge("Shadowfyst997", "GameRisk", "2014/09/12");
        addBadge("Shadowfyst997", "GameMexStand", "2016/07/11");
        addBadge("Shadowfyst997", "GameClueHost", "2014/12/03");
        addBadge("Shadowfyst997", "GameScrabble", "2015/03/27");
        addBadge("Shadowfyst997", "GameCatan", "2015/04/07");
	    addBadge("Shadowfyst997", "GameWerewolfHost", "2015/09/22");
        addBadge("Shadowfyst997", "ClubDnDHost", "2016/06/11");
        addBadge("Shadowfyst997", "ClubDnDRound", "2016/06/11");
		addBadge("Shadowfyst997", "EventHalloween2014", "2014/10/31");
		addBadge("Shadowfyst997", "EventHalloween2015", "2015/10/31");
        addBadge("Shadowfyst997", "EventHalloween2016", "2016/10/31");
		addBadge("Shadowfyst997", "EventSanta2014", "2014/12/25");
		addBadge("Shadowfyst997", "EventSanta2015", "2015/12/25");
        addBadge("Shadowfyst997", "EventSanta2016", "2016/12/25");
        addBadge("Shadowfyst997", "EventDefender2016", "2016/12/03");

        addBadge("Silva", "ActivityTopGold", "2014/10/29");
        addBadge("Silva", "EventSanta2014", "2014/12/25");
        addBadge("Silva", "EventDefender2015", "2015/03/23");

//  T 

		addBadge("td260", "EventSanta2014", "2014/12/25");
        addBadge("td260", "EventSanta2015", "2015/12/25");
        addBadge("td260", "EventDefender2015", "2015/03/23");

        addBadge("TiamaJaybird", "ClubBadArtist", "2016/07/03");
        addBadge("TiamaJaybird", "ClubDnD", "2016/07/03");
        addBadge("TiamaJaybird", "EventHalloween2016", "2016/10/31");
    
        addBadge("Tichondrian", "AllianceRankMercury4", "2016/06/26");
        addBadge("Tichondrian", "CharacterElementMercury", "2016/12/10");
        addBadge("Tichondrian", "CharacterFundamentStellar", "2016/12/10");
        addBadge("Tichondrian", "CharacterBuildCaster", "2016/12/10");
        addBadge("Tichondrian", "CharacterClassTich", "2016/12/10");
        addBadge("Tichondrian", "ActivityTopicMaker005", "2015/02/19");
        addBadge("Tichondrian", "EventValentine2017", "2017/02/14");
        addBadge("Tichondrian", "EventHalloween2016", "2016/10/31");
		addBadge("Tichondrian", "EventDefender2015", "2015/03/23");
        addBadge("Tichondrian", "EventDefender2016", "2016/12/03");

        addBadge("Tinfect", "StaffAmbassadorAU", "2016/12/12");

        addBadge("TK", "EventDefender2015", "2015/03/23");

//  U 
//  V 
//  W 

        addBadge("WarlockMarida", "CharacterElementMars", "2016/12/10");
        addBadge("WarlockMarida", "CharacterFundamentStellar", "2016/12/10");
        addBadge("WarlockMarida", "CharacterBuildCaster", "2016/12/10");
        addBadge("WarlockMarida", "CharacterClassMarida", "2016/12/10");

        addBadge("What?", "StaffAmbassadorGSAR", "2016/12/12");

        addBadge("WISHMASTER", "AllianceRankMars1", "2016/06/25");
        addBadge("WISHMASTER", "CharacterElementMercury", "2016/12/10");
        addBadge("WISHMASTER", "CharacterFundamentStellar", "2016/12/10");
        addBadge("WISHMASTER", "CharacterBuildFreelancer", "2016/12/10");
        addBadge("WISHMASTER", "CharacterClassWishmaster", "2016/12/10");
        addBadge("WISHMASTER", "ClubDnDRound", "2016/06/11");
        addBadge("WISHMASTER", "EventValentine2017", "2017/02/14");

//		addBadge("WitchRolina", "AllianceRankJupiterRolina", "2016/06/25");
        addBadge("WitchRolina", "CharacterElementJupiter", "2016/12/10");
        addBadge("WitchRolina", "CharacterFundamentLunar", "2016/12/10");
        addBadge("WitchRolina", "CharacterBuildCaster", "2016/12/10");
        addBadge("WitchRolina", "CharacterClassRolina", "2016/12/10");
        addBadge("WitchRolina", "ActivityTopicMaker010", "2015/06/18");
        addBadge("WitchRolina", "ActivityArtist01", "2016/10/07"); // 1 Submission
        addBadge("WitchRolina", "ActivityWriter05", "2015/06/18"); // 8 Submissions
        addBadge("WitchRolina", "EventValentine2017", "2017/02/14");
		addBadge("WitchRolina", "EventHalloween2014", "2014/10/31");
		addBadge("WitchRolina", "EventHalloween2015", "2015/10/31");
        addBadge("WitchRolina", "EventHalloween2016", "2016/10/31");
		addBadge("WitchRolina", "EventSanta2014", "2014/12/25");
		addBadge("WitchRolina", "EventSanta2015", "2015/12/25");
        addBadge("WitchRolina", "EventSanta2016", "2016/12/25");
		addBadge("WitchRolina", "EventDefender2015", "2015/03/23");
        addBadge("WitchRolina", "EventDefender2016", "2016/12/03");

//  X 

        addBadge("XxLTxX", "GameMachiKoro", "2014/05/31");

//  Y 
//  Z 

        addBadge("Zeige", "ActivityTopicMaker005", "2015/08/22");

        addBadge("ZFallen", "StaffAmbassadorGSL", "2017/01/01");
    }
}