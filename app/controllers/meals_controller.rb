class MealsController < ApplicationController
  before_action :set_meal, only: [:edit, :update]

  def index
    trip = Trip.find(1)
    @parties = Attendance.pluck(:party_name).uniq.sort
    @days = (0..trip.num_days-1).map do |day_index|
      breakfast = Meal.breakfast.find_by(trip: trip, day_index: day_index)
      dinner = Meal.dinner.find_by(trip: trip, day_index: day_index)
      day = {
        day: dinner&.day_index,
        date: (trip.first_day + day_index.days).strftime('%a %b %d'),
        breakfast: breakfast&.menu,
        breakfast_host: breakfast&.host,
        breakfast_attendance: Attendance.pluck("day#{day_index}").transpose[0]&.map(&:to_f)&.sum || 0,
        breakfast_attendees: breakfast&.attendees,
        breakfast_open: breakfast&.host.nil?,
        dinner: dinner&.menu,
        dinner_host: dinner&.host,
        dinner_attendance: Attendance.pluck("day#{day_index}").transpose[2]&.map(&:to_f)&.sum || 0,
        dinner_open: dinner&.host.nil?,
        dinner_attendees: dinner&.attendees
      }
      day[:breakfast_link] = edit_meal_path(breakfast) if breakfast
      day[:dinner_link] =  edit_meal_path(dinner) if dinner
      day
    end
  end

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
