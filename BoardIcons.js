/* Coded by Nicolas of ZNR and HNZ, original http://z5.ifrm.com/5920/164/0/f5035318/buttons.js */
/* <![CDATA[ */
function newmarker(forumname,newposts,nonew) {
$(".c_forum strong a:contains("+forumname+")").closest('td').prev().children('img').attr('src',nonew);
$(".c_forum strong a:contains("+forumname+")").closest('td').prev().children('a').children('img').attr('src',newposts);
}
newmarker('Announcements','http://z5.ifrm.com/5920/164/0/f5037379/ForumAnnouncementsNew.png','http://z5.ifrm.com/5920/164/0/f5037380/ForumAnnouncementsRead.png');
newmarker('City Gates','http://z5.ifrm.com/5920/164/0/f5037425/ForumGatesNew.png','http://z5.ifrm.com/5920/164/0/f5037426/ForumGatesRead.png');
newmarker('Help Desk','http://z5.ifrm.com/5920/164/0/f5037434/ForumHelpNew.png','http://z5.ifrm.com/5920/164/0/f5037435/ForumHelpRead.png');
newmarker("Suggestions",'http://z5.ifrm.com/5920/164/0/f5037485/ForumSuggestNew.png','http://z5.ifrm.com/5920/164/0/f5037486/ForumSuggestRead.png');
newmarker("Golden Sunrise Awards","http://b3.ifrm.com/5920/164/0/f7000115/ForumAwardsNew.png","http://b3.ifrm.com/5920/164/0/f7000116/ForumAwardsRead.png");
newmarker('Administration','http://z5.ifrm.com/5920/164/0/f5037373/ForumAdminNew.png','http://z5.ifrm.com/5920/164/0/f5037374/ForumAdminRead.png');
newmarker('Summer Fun with Golden Sunrise','http://b3.ifrm.com/5920/164/0/f7000590/ForumEventNew.png','http://b3.ifrm.com/5920/164/0/f7000591/ForumEventRead.png');

newmarker('Off-Topic Discussion','http://z5.ifrm.com/5920/164/0/f5037431/ForumGDNew.png','http://z5.ifrm.com/5920/164/0/f5037432/ForumGDRead.png');
newmarker('The Tavern','http://z5.ifrm.com/5920/164/0/f5037488/ForumTavernNew.png','http://z5.ifrm.com/5920/164/0/f5037489/ForumTavernRead.png');
newmarker('The Senate','http://z5.ifrm.com/5920/164/0/f5037482/ForumSenateNew.png','http://z5.ifrm.com/5920/164/0/f5037483/ForumSenateRead.png');
newmarker('Entertainment','http://z5.ifrm.com/5920/164/0/f5037416/ForumEntertainNew.png','http://z5.ifrm.com/5920/164/0/f5037417/ForumEntertainRead.png');
newmarker('Randomness','http://z5.ifrm.com/5920/164/0/f5037473/ForumPunchAntNew.png','http://z5.ifrm.com/5920/164/0/f5037474/ForumPunchAntRead.png');

newmarker('Creativity','http://z5.ifrm.com/5920/164/0/f5037406/ForumCreativeNew.png','http://z5.ifrm.com/5920/164/0/f5037407/ForumCreativeRead.png');
newmarker('Character Codex','http://z5.ifrm.com/5920/164/0/f5037370/ForumAdeptsArchiveNew.png','http://z5.ifrm.com/5920/164/0/f5037371/ForumAdeptsArchiveRead.png');
newmarker('Author Avatars','http://z5.ifrm.com/5920/164/0/f5037385/ForumAuthorAdeptNew.png','http://z5.ifrm.com/5920/164/0/f5037386/ForumAuthorAdeptRead.png');
newmarker('General Characters','http://z5.ifrm.com/5920/164/0/f5037394/ForumCharacterAdeptNew.png','http://z5.ifrm.com/5920/164/0/f5037395/ForumCharacterAdeptRead.png');
newmarker('Silly Characters','http://z5.ifrm.com/5920/164/0/f5037467/ForumParodyAdeptNew.png','http://z5.ifrm.com/5920/164/0/f5037468/ForumParodyAdeptRead.png');
newmarker('The Bad Art Competition','http://z5.ifrm.com/5920/164/0/f5037388/ForumBadArtNew.png','http://z5.ifrm.com/5920/164/0/f5037389/ForumBadArtRead.png');

newmarker('Games Hall','http://z5.ifrm.com/5920/164/0/f5037422/ForumGamesNew.png','http://z5.ifrm.com/5920/164/0/f5037423/ForumGamesRead.png');
newmarker('Roleplays','http://z5.ifrm.com/5920/164/0/f5037479/ForumRoleplayNew.png','http://z5.ifrm.com/5920/164/0/f5037480/ForumRoleplayRead.png');

newmarker("Clan Registration and Badges",'http://z5.ifrm.com/5920/164/0/f5037476/ForumRegistryNew.png','http://z5.ifrm.com/5920/164/0/f5037477/ForumRegistryRead.png');
newmarker("Venus Clan Board",'http://b3.ifrm.com/5920/164/0/f7000862/VenusClanRead.png','http://b3.ifrm.com/5920/164/0/f7000866/VenusClanNew.png');
newmarker("Mars Clan Board",'http://b3.ifrm.com/5920/164/0/f7000864/MarsClanNew.png','http://b3.ifrm.com/5920/164/0/f7000860/MarsClanRead.png');
newmarker("Jupiter Clan Board",'http://b3.ifrm.com/5920/164/0/f7000915/JupiterClanNew.png','http://b3.ifrm.com/5920/164/0/f7000861/JupiterClanRead.png');
newmarker("Mercury Clan Board",'http://b3.ifrm.com/5920/164/0/f7000863/MercuryClanNew.png','http://b3.ifrm.com/5920/164/0/f7000859/MercuryClanRead.png');
newmarker('The Alliance Competition','http://z5.ifrm.com/5920/164/0/f5037400/ForumColloseoNew.png','http://z5.ifrm.com/5920/164/0/f5037401/ForumColloseoRead.png');
newmarker("The World Index",'http://z5.ifrm.com/5920/164/0/f5037503/ForumWorldIndexNew.png','http://z5.ifrm.com/5920/164/0/f5037504/ForumWorldIndexRead.png');

newmarker('The Sun Sagas','http://z5.ifrm.com/5920/164/0/f5037428/ForumGBANew.png','http://z5.ifrm.com/5920/164/0/f5037429/ForumGBARead.png');
newmarker('Dark Dawn and Beyond','http://z5.ifrm.com/5920/164/0/f5037413/ForumDDNew.png','http://z5.ifrm.com/5920/164/0/f5037414/ForumDDRead.png');
newmarker('Other Camelot Games','http://z5.ifrm.com/5920/164/0/f5037391/ForumCamelotNew.png','http://z5.ifrm.com/5920/164/0/f5037392/ForumCamelotRead.png');

newmarker('Archive','http://z5.ifrm.com/5920/164/0/f5037382/ForumArchivesNew.png','http://z5.ifrm.com/5920/164/0/f5037383/ForumArchivesRead.png');

/* ]]> */
