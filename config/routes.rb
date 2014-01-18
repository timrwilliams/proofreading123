Proofreading123::Application.routes.draw do
  root :to => "home#index"
  devise_for :users, :controllers => {:registrations => "registrations"}
  resources :users
  match "/prices" => 'home#prices', :via => :get
  match "/faq" => 'home#faq', :via => :get
	match "/order" => 'home#order', :via => [:get,:post]
	match "/contact" => 'home#contact', :via => :get
end
