module.exports = {
	lintOnSave: true,
	outputDir: "./dist/client",
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
