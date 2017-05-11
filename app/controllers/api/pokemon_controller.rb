class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    render :index
  end

  def show
    #add includes to fix n+1 BEFORE find
    @pokemon = Pokemon.find(params[:id])
    render :show
  end
end
