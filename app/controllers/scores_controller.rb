class ScoresController < ApplicationController
  def create

    respond_to do |format|
      format.json { render json: {name: params[:name], time: params[:time], id: params[:id]}}
    end

    @image = Image.find(params[:id])
    @name = params[:name]
    @time = params[:time]
    @image.scores.create(name: @name, time: @time)
  end
end
