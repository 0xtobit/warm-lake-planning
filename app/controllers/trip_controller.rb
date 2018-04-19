class TripController < ApplicationController
  def show
    trip = Trip.find(1)
    @days = (0..trip.num_days-1).map do |day_index|
      breakfast = Meal.breakfast.find_by(trip: trip, day_index: day_index)
      dinner = Meal.dinner.find_by(trip: trip, day_index: day_index)
      day = {
        day: dinner&.day_index,
        date: (trip.first_day + day_index.days).strftime('%a %b %d'),
        breakfast: breakfast&.menu,
        breakfast_host: breakfast&.host,
        breakfast_attendance: Attendance.pluck("day#{day_index}").transpose[0]&.map(&:to_i)&.sum || 0,
        dinner: dinner&.menu,
        dinner_host: dinner&.host,
        dinner_attendance: Attendance.pluck("day#{day_index}").transpose[2]&.map(&:to_i)&.sum || 0,
        breakfast_open: breakfast&.host.nil?,
        dinner_open: dinner&.host.nil?
      }
      day[:breakfast_link] = edit_meal_path(breakfast) if breakfast
      day[:dinner_link] =  edit_meal_path(dinner) if dinner
      day
    end
    @dayz =
      [
        {
          day: 0,
          date: 'Thursday, July 19th',
          breakfast: "",
          breakfast_host: "",
          breakfast_attendance: nil,
          dinner: "Steaks",
          dinner_host: "Jonely's",
          dinner_attendance: 20,
        },
        {
          day: 1,
          date: 'Friday, July 20th',
          breakfast: "Hash",
          breakfast_host: "Jonely's",
          breakfast_attendance: 20,
          dinner: "Ribs",
          dinner_host: "Raff's in the North",
          dinner_attendance: 20,
        },
        {
          day: 2,
          date: 'Saturday, July 21st',
          breakfast: "Hash",
          breakfast_host: "Tanner's",
          breakfast_attendance: 20,
          dinner: "Ribs",
          dinner_host: "Jonely's",
          dinner_attendance: 20,
        },
        {
          day: 3,
          date: 'Sunday, July 22nd',
          breakfast: "Hash",
          breakfast_host: "Kemper's",
          breakfast_attendance: 20,
          dinner: "Ribs",
          dinner_host: "Jonely's",
          dinner_attendance: 20,
          breakfast_open: true,
          dinner_open: false,
        },
        {
          day: 4,
          date: 'Monday, July 23rd',
          breakfast: "Hash",
          breakfast_host: "Raff's",
          breakfast_attendance: 20,
          dinner: "Ribs",
          dinner_host: "Jonely's",
          dinner_attendance: 20,
        },
    ]
  end
end
