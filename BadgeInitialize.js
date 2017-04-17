if(window.location.href.indexOf('topic') == 32 || window.location.href.indexOf('single') == 32){
	var rewards = {};

	var assignedRewards ={};

	var rewardType = [];

	var createRewardType = function(name) {
		rewardType.push(name);
		rewards[name] = {};
		assignedRewards[name] = {};
	}

	var createReward = (function() {
		var total = 0;
		
		return function(name, image, description, type, showInProfile) {
			if(rewards.hasOwnProperty(type))
			{
				rewards[type][name] = {
					image: image,
					order: total,
					description: description,
					showInProfile: showInProfile
				};
				
				total++;
			}
		};
	})();

	var createCreateRewardFunction = function(rewardType) {
		return function(name, image, description, showInProfile) {
			createReward(name, image, description, rewardType, showInProfile);
		}
	};

	var orderBadges = function(badgeList, type) {
		if(rewards.hasOwnProperty(type))
		{
			return badgeList.sort(function(a, b) {
				return rewards[type][a].order - rewards[type][b].order;
			}); 
		}
		else
		{
			return [];
		}
	};

	var addReward = function(type, person, reward, dateAwarded) {
		if(assignedRewards.hasOwnProperty(type))
		{
			if(assignedRewards[type].hasOwnProperty(person))
			{
				assignedRewards[type][person].push(reward);
			}
			else
			{
				assignedRewards[type][person] = [reward];
			}
		}
	};



	var createAddRewardFunction = function(rewardType)
	{
		return function(person, reward, dateAwarded) {
			addReward(rewardType, person, reward, dateAwarded);
		}    
	}

	var printRewardType = function(rewardSet, assignedRewardSet, name)
	{
		console.log("Printing reward type: " + name);
		if(/topic|announcement/.test(location.href)) {
			for(var member in assignedRewardSet)
			{
				var memberRewards = orderBadges(assignedRewardSet[member], name);
				
				var tr = $('tr:contains(' + member + ')');

				console.log("Printing " + name + "s for " + member);
				console.log(tr);

				tr.each(function(){
					var $this = $(this);

					if($this.find('a.member').text() === member)
					{
						$this.next().find('.c_user .user_info').after('<dl class="user-' + name + '"></dl>');
						
						memberRewards.forEach(function(reward) {
							console.log("Printing on " + name + "...");
							console.log(reward);
							var $img = $("<img>").attr("src", rewardSet[reward].image).attr("title", rewardSet[reward].description).attr("alt", rewardSet[reward].description);

							$this.next().find('.user-' + name).append($img);
						});
					}
				});
			}
		}
	};

	var printRewards = function() {
		rewardType.forEach(function(reward) {
			if(rewards.hasOwnProperty(reward) && assignedRewards.hasOwnProperty(reward))
			{
				printRewardType(rewards[reward], assignedRewards[reward], reward);
			}
		});
	};

	$(document).ready(function() {
		printRewards();
	})
};
