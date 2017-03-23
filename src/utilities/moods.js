export const moods = [
	{
		image: '',
		description: 'Celebration Time',
		long_description: 'It\'s all about celebrating the small wins',
		action: '',
		action_arg: 'celebrating'
	},
	{
		image: '',
		description: 'Romatic night',
		long_description: 'Whether it\'s valentine\'s day or an anniversary, we got you covered',
		action: '',
		action_arg: 'romantic'
	},
	{
		image: '',
		description: 'Calm and Relaxing',
		long_description: 'For winding down after a long day with your cats',
		action: '',
		action_arg: 'relax'
	},
	{
		image: '',
		description: 'Classy Event',
		long_description: 'Need something to match your dress or your tux? Look no further!',
		action: '',
		action_arg: 'classy'
	},
	{
		image: '',
		description: 'House Party!',
		long_description: 'Looking to supply your entire town before prohibition kicks in? Head on over right this way!',
		action: '',
		action_arg: 'groups'
	},
	{
		image: '',
		description: 'Rooftop Party',
		long_description: 'Nothing to get you started for raising floors all night',
		action: '',
		action_arg: 'rooftop'
	},
	{
		image: '',
		description: 'Points Points Points',
		long_description: 'Drinking only to collect Air Miles and points? Go to SHELL!',
		action: '',
		action_arg: 'loyalty'
	},
	{
		image: '',
		description: 'Something Local',
		long_description: 'Support your local Ontario Craft Brewers',
		action: '',
		action_arg: 'local'
	},
	{
		image: '',
		description: 'Kosher',
		long_description: 'If you are not sure what this is, move along ',
		action: '',
		action_arg: 'kosher'
	},
	{
		image: '',
		description: 'Gimme Everything',
		long_description: 'Too tired to think ...',
		action: '',
		action_arg: 'everything'
	},
	{
		image: '',
		description: 'Value Added Promotions',
		long_description: 'Sometimes, we are all just looking for a good deal',
		action: '',
		action_arg: 'value'
	},
	{
		image: '',
		description: 'Running Out',
		long_description: 'Things almost out of your reach can get tempting',
		action: '',
		action_arg: 'running-out'
	},

]
	
export const money_status = [
	
	{
		image: '',
		description: 'Holes in my pocket',
		long_description: 'We\'ve all had those days... cheer up with some booze',
		action: '',
		action_arg: 1
	},
	{
		image: '',
		description: 'Living the Good Life',
		long_description: '\“Alcohol may be man\'s worst enemy, but the bible says love your enemy.” \n― Frank Sinatra',
		action: '',
		action_arg: 2
	},
	{
		image: '',
		description: 'Rollin\' in the Dough',
		long_description: 'So ... Why are you even here? Are your personal bartenders on strike?',
		action: '',
		action_arg: 3
	}

]

export const productQuery = {
	1 : {

		'celebrating' : {
						'order': 'regular_price_in_cents.asc',
						'q': 'champagne'
					},
		'romantic' : {
						'order': 'regular_price_in_cents.asc',
						'where': 'is_vqa,'
					},
		'classy' : {
						'order': 'regular_price_in_cents.asc',
						'where': 'wine'
					},
		'groups' : {
						'order': 'total_package_volume_in_milliliters.desc,regular_price_in_cents.asc'
					},
		'rooftop' : {
						'order': 'price_per_liter_of_alcohol_in_cents.asc,alcohol_content.asc,total_package_volume_in_milliliters.desc,regular_price_in_cents.asc'
					},
		'loyalty' : {
						'order': 'bonus_reward_miles,regular_price_in_cents.asc',
					},
		'relax' : {
						'order': 'regular_price_in_cents.asc',
						'where': 'is_seasonal'
					},
		'local' : {
						'order': 'regular_price_in_cents.asc',
						'where': 'is_ocb,'
					},
		'kosher' : {
						'order': 'regular_price_in_cents.asc',
						'where': 'is_kosher,'
					},
		'value' : {
						'order': 'regular_price_in_cents.asc',
						'where': 'has_value_added_promotion,'
					},
		'everything' : {
						'order': 'regular_price_in_cents.asc',
					},
		'running-out' : {
						'order': 'inventory_volume_in_milliliters.asc,regular_price_in_cents.asc',
					}
	},
	2 : {

		'celebrating' : {
						'q': 'champagne'
					},
		'romantic' : {
						'where': 'is_vqa,'
					},
		'classy' : {
						'where': 'wine'
					},
		'groups' : {
						'order': 'total_package_volume_in_milliliters.desc,regular_price_in_cents.asc'
					},
		'rooftop' : {
						'order': 'price_per_liter_of_alcohol_in_cents.asc,alcohol_content.asc,total_package_volume_in_milliliters.desc,regular_price_in_cents.asc'
					},
		'loyalty' : {
						'order': 'bonus_reward_miles,regular_price_in_cents.asc',
					},
		'relax' : {
						'where': 'is_seasonal'
					},
		'local' : {
						'where': 'is_ocb,'
					},
		'kosher' : {
						'where': 'is_kosher,'
					},
		'value' : {
						'where': 'has_value_added_promotion,'
					},
		'everything' : {},
		'running-out' : {
						'order': 'inventory_volume_in_milliliters.asc,regular_price_in_cents.asc',
					}
	},
	3 : {

		'celebrating' : {
						'order': 'regular_price_in_cents.desc',
						'q': 'champagne'
					},
		'romantic' : {
						'order': 'regular_price_in_cents.desc',
						'where': 'is_vqa,'
					},
		'classy' : {
						'order': 'regular_price_in_cents.desc',
						'where': 'wine'
					},
		'groups' : {
						'order': 'total_package_volume_in_milliliters.desc,regular_price_in_cents.desc'
					},
		'rooftop' : {
						'order': 'price_per_liter_of_alcohol_in_cents.desc,alcohol_content.asc,total_package_volume_in_milliliters.desc,regular_price_in_cents.desc'
					},
		'loyalty' : {
						'order': 'bonus_reward_miles,regular_price_in_cents.desc',
					},
		'relax' : {
						'order': 'regular_price_in_cents.desc',
						'where': 'is_seasonal'
					},
		'local' : {
						'order': 'regular_price_in_cents.desc',
						'where': 'is_ocb,'
					},
		'kosher' : {
						'order': 'regular_price_in_cents.desc',
						'where': 'is_kosher,'
					},
		'value' : {
						'order': 'regular_price_in_cents.desc',
						'where': 'has_value_added_promotion,'
					},
		'everything' : {
						'order': 'regular_price_in_cents.desc',
					},
		'running-out' : {
						'order': 'inventory_volume_in_milliliters.asc,regular_price_in_cents.desc',
					}
	}
}

