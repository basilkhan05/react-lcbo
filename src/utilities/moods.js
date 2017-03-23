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
		long_description: 'Need something to match your dress or your tux? Look no further...',
		action: '',
		action_arg: 'classy'
	},
	{
		image: '',
		description: 'House Party!',
		long_description: 'Looking for gallons of gallons? Head on over right this way...',
		action: '',
		action_arg: 'groups'
	},
	{
		image: '',
		description: 'Rooftop Party',
		long_description: 'Nothing to get you started for Raising Floors all night',
		action: '',
		action_arg: 'rooftop'
	},
	{
		image: '',
		description: 'Points Points Points',
		long_description: 'Drinking only to collect Air Miles and points? Go to SHELL gas station!',
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
						'where': 'is_vqa'
					},
		'groups' : {
						'order': 'regular_price_in_cents.asc',
						'where': 'is_vqa'
					},
		'rooftop' : {
						'order': 'volume_in_milliliters.desc,regular_price_in_cents.asc'
					},
		'loyalty' : {
						'order': 'regular_price_in_cents.asc',
						'where': 'is_vqa'
					},
		'relax' : {
						'order': 'regular_price_in_cents.asc',
						'where': 'is_vqa,'
					},
		'local' : {
						'order': 'regular_price_in_cents.asc',
						'where': 'is_ocb,'
					},
	}

}

