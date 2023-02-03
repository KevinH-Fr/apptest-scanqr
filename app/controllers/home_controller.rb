class HomeController < ApplicationController

    def index
    end

    def details_produit
        @produit = params[:produitId]
        #redirect_to root_path()
     end
    
end
