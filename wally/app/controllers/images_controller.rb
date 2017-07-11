class ImagesController < ApplicationController

  def index
    @images = Image.all
  end

  def show
    @image = Image.find(params[:id])
    @characters = @image.characters

    respond_to do |format|
      format.html
      format.json {render json: @characters}
    end
  end
end
