class MealsController < ApplicationController
  before_action :set_meal

  def edit
  end

  def update
    @meal.update_attributes(params.permit(:host, :menu))
    if @meal.save
      redirect_to root_path, notice: 'Meal claimed!'
    else
      render :edit
    end
  end

  def set_meal
    @meal = Meal.find(params[:id])
  end
end
