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

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      render :show
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end

  # private

  def pokemon_params
    #MAYBE MAKE MOVES INTO AN ARRAY
    params.require(:pokemon).permit( :name, :image_url, :poke_type, :attack,
      :defense, {moves: []} )
  end

end
