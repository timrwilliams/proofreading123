class HomeController < ApplicationController
  def index
  end
  
  def faq
  end

	def prices
  end

  def contact
  end

  def order
  end

  def echo
    @msg = params[:msg]
    render "home/echo", :layout => false
  end
end
