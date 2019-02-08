class Meal < ApplicationRecord
  belongs_to :trip, inverse_of: :meals

  validates :name, inclusion: { in: %w(breakfast lunch dinner) }, uniqueness: { scope: [:day_index, :trip_id] }

  scope :breakfast, -> { where(name: 'breakfast') }
  scope :lunch, -> { where(name: 'lunch') }
  scope :dinner, -> { where(name: 'dinner') }

  def attendees
    meal_lookup = { breakfast: 0, lunch: 1, dinner: 2 }
    Attendance.pluck("day#{day_index}", 'party_name').map { |a, party| party if a[meal_lookup[name.to_sym]] != '0' }.uniq.select{ |x| !x.nil?}.sort
  end
end
