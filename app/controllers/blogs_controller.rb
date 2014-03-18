class BlogsController < ApplicationController

	def post
		@post_title = params[:post_title]
		@content = Faker::Lorem.paragraph
	end
end
