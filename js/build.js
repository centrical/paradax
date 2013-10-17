({
    appDir: "../",
    baseUrl: "js",
    dir: "../../build",
    paths: {
		"app": "app",
		"domReady": "lib/domReady",
		"jquery": "lib/jquery",
		"bootstrap": "lib/bootstrap",
		"Mustache": "lib/Mustache",
		"json2": "lib/json2",
		"text": "lib/text",
		"hgn": "lib/hgn",
		"hogan": "lib/hogan",
		"microdata": "lib/microdata",
		"microdataJson": "lib/microdataJson",
		"getMicrodata": "util/getMicrodata",
		"getPartials": "util/getPartials",
		"getTemplates": "util/getTemplates",
		"chooseTemplate": "util/chooseTemplate",
		"applyBootstrap": "util/applyBootstrap",
		"templates": "../mustache/templates",
		"partials": "../mustache/partials"
    },
    modules: [
      { name: "main"}
    ],
    stubModules : ['text', 'hgn'],
    pragmasOnSave : {
        // you can use this pragma to exclude compiler logic from Hogan.js in
        // case you don't need to compile any templates after build
        excludeHogan : true
    }
})
