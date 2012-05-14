(function() {
	var specs = [];

	describe("Backbone Episode model", function() {
		it("should expose an attribute", function() {

			var episode = new Backbone.Model({
				title : "Hollywood - Part 2"
			});
			expect(episode.get("title")).toEqual("Hollywood - Part 2");
		});
	});

})();