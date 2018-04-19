class Meal < ApplicationRecord
  belongs_to :trip, inverse_of: :meals

  validates :name, inclusion: { in: %w(breakfast lunch dinner) }, uniqueness: { scope: [:day_index, :trip_id] }

  scope :breakfast, -> { where(name: 'breakfast') }
  scope :lunch, -> { where(name: 'lunch') }
  scope :dinner, -> { where(name: 'dinner') }
end
