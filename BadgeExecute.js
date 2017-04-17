if(window.location.href.indexOf('topic') == 32 || window.location.href.indexOf('single') == 32){
	$(document).ready(function() {

		createRewardType("award");
		createRewardType("badge");

		createRewardBadges();
		addBadges();

		createRewardAwards();
		addAwards();

		printRewards();

	});
}
