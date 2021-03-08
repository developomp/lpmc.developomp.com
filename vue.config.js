module.exports = {
	lintOnSave: true,
	outputDir: "./dist",
	devServer: {
		// disableHostCheck: true,
		host: "localhost",
		public: "mc.developomp.com",
		overlay: {
			warnings: false,
			errors: false,
		},
	},
}
