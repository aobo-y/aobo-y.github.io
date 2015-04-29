module.exports = function (grunt) {
  // Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
		    installBower: {
			    files: [
			      // includes files within path
			    	{expand: true, cwd: 'bower_components/jquery/dist', src: ['jquery.min.js'], dest: 'lib/jquery/', filter: 'isFile'},
			    	{expand: true, cwd: 'bower_components/bootstrap/dist/', src: ['js/bootstrap.min.js', 'css/bootstrap.min.css'], dest: 'lib/bootstrap/', filter: 'isFile'},
			    	{expand: true, cwd: 'bower_components/fontawesome/', src: ['css/*.min.css', 'fonts/*'], dest: 'lib/fontawesome/', filter: 'isFile'},
			    ],
		    },
		},
		uglify: {
		    options: {
		    	banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
		  	},
		  	build: {
		    	src: 'js/index.js',
		    	dest: 'js/index.min.js'
		  	}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	// Default task(s).
	grunt.registerTask('default', ['copy', 'uglify']);
}