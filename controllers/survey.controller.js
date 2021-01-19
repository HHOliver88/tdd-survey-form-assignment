const Controller        = require('./controller');
const SurveyModel       = require('../models/survey.model');

class SurveyController extends Controller {

    constructor() {
        super();
    }
    
    index(req, res) {
		this.page_params.PAGE.title = "Survey Form";
        this.page_params.PAGE.view = "index";
        
		/* Custom css for index page */
        this.page_params.PAGE.assets.stylesheets.push({ file: `/public/css/custom/survey/${this.page_params.PAGE.view}.css` });
        
        res.render("layouts/survey.layout.ejs", this.page_params);
    }

    success(req, res) {
		this.page_params.PAGE.title = "Success!";
        this.page_params.PAGE.view = "success";

		/* Custom css for index page */
		this.page_params.PAGE.assets.stylesheets.push({ file: `/public/css/custom/survey/${this.page_params.PAGE.view}.css` });        
    
        res.render("layouts/survey.layout.ejs", this.page_params);
    }

    async process(req, res) {}
}
module.exports = SurveyController;