Rails.application.routes.draw do


  resources :produits
 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
   root "home#index"

   get 'details', to: 'home#details_produit'

end
