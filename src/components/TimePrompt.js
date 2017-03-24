import React from 'react'
import { Header, Icon } from 'semantic-ui-react'


const d = new Date();
const dayoftheweek = new Array(7);
dayoftheweek[0] =  "Sunday";
dayoftheweek[1] = "Monday";
dayoftheweek[2] = "Tuesday";
dayoftheweek[3] = "Wednesday";
dayoftheweek[4] = "Thursday";
dayoftheweek[5] = "Friday";
dayoftheweek[6] = "Saturday";

const n = dayoftheweek[d.getDay()];
const today = new Date()
const current_hour = today.getHours()
const t = (current_hour) => {
	if (current_hour < 4) {
	  return'late night'
	} else if (current_hour < 12) {
	  	return 'morning'
	} else if (current_hour < 15) {
		return 'afternoon'
	} else if (current_hour < 19) {
		return 'evening'
	} else {
		return 'night'
	}
}

const TimePrompt = () => (
  <Header as='h2'>
  <Icon name='clock' size='large' />
  	It is {n} {t(current_hour)}... Drink Responsibly
  </Header>
)

export default TimePrompt