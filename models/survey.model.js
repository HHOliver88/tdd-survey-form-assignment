const Mysql                 = require('mysql');
const Model 				= require('./model');
const Constants 			= require('../config/constants');

class SurveyModel extends Model {
	constructor() {
		super();
	}

	async getSurvey() {}

	async createSurvey(){}

	// add the other necessary methods
}

module.exports = SurveyModel;