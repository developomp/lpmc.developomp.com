module.exports = {
	lintOnSave: true,
	outputDir: "./dist",
	devServer: {
		// disableHostCheck: true,
		host: "localhost",
		public: "lpmc.developomp.com",
		overlay: {
			warnings: false,
			errors: false,
		},
	},
}
