export const moods = [
	{
		image: '',
		description: 'Celebrating tonight',
		long_description: 'Celebrating tonight',
		action: '',
		action_arg: 'celebrating'
	},
	{
		image: '',
		description: 'Romatic night',
		long_description: 'Romatic night with my partner',
		action: '',
		action_arg: 'romantic'
	},
	{
		image: '',
		description: 'Winding down after a long day',
		long_description: 'I am drinking only to collect Air Miles',
		action: '',
		action_arg: 'relax'
	},
	{
		image: '',
		description: 'Classy Event',
		long_description: 'Need something for a classy event',
		action: '',
		action_arg: 'classy'
	},
	{
		image: '',
		description: 'Girls night out',
		long_description: 'Girls night out',
		action: '',
		action_arg: 'girls'
	},
	{
		image: '',
		description: 'Hanging out with ma Bois',
		long_description: 'Guys',
		action: '',
		action_arg: 'guys'
	},
	{
		image: '',
		description: 'After a Long Day at work',
		long_description: 'Something after a day that seemed to last forever',
		action: '',
		action_arg: 'longday'
	},
	{
		image: '',
		description: 'Rooftop Party',
		long_description: 'Raising Floors all night tonight',
		action: '',
		action_arg: 'rooftop'
	},
	{
		image: '',
		description: 'Points Points Points',
		long_description: 'I am drinking only to collect Air Miles',
		action: '',
		action_arg: 'loyalty'
	},
	{
		image: '',
		description: 'Points Points Points',
		long_description: 'I am drinking only to collect Air Miles',
		action: '',
		action_arg: 'local'
	},

]
	
export const money_status = [
	
	{
		image: '',
		description: 'I got holes in my pocket',
		long_description: '',
		action: '',
		action_arg: 1
	},
	{
		image: '',
		description: 'Living the Good Life',
		long_description: '',
		action: '',
		action_arg: 2
	},
	{
		image: '',
		description: 'Rollin\' in the Dough',
		long_description: '',
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
		'girls' : {
						'order': 'regular_price_in_cents.asc',
						'where': 'is_vqa'
					},
		'guys' : {
						'order': 'regular_price_in_cents.asc',
						'where': 'is_vqa'
					},
		'girls' : {
						'order': 'regular_price_in_cents.asc',
						'where': 'is_vqa'
					},
		'longday' : {
						'order': 'regular_price_in_cents.asc',
						'where': 'is_vqa'
					},
		'rooftop' : {
						'order': 'regular_price_in_cents.asc',
						'where': 'is_vqa'
					},
		'loyalty' : {
						'order': 'regular_price_in_cents.asc',
						'where': 'is_vqa'
					},
		'relax' : {
						'order': 'regular_price_in_cents.asc',
						'where': 'is_vqa,'
					},
		'relax' : {
						'order': 'regular_price_in_cents.asc',
						'where': 'is_ocb,'
					},
	}

}

