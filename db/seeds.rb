# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

trip = Trip.create!(num_days: 10, first_day: 'July 19 2018'.to_datetime)

(0..10).each do |day|
  if day == 0
    Meal.create!(trip: trip, day_index: day, name: 'lunch')
    Meal.create!(trip: trip, day_index: day, name: 'dinner')
  elsif day == 9
    Meal.create!(trip: trip, day_index: day, name: 'breakfast')
  else
    %w(breakfast lunch dinner).each do |name|
      Meal.create!(trip: trip, day_index: day, name: name)
    end
  end
end
