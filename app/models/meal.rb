class Meal < ApplicationRecord
  belongs_to :trip, inverse_of: :meals

  validates :name, inclusion: { in: %w(breakfast lunch dinner) }

  scope :breakfast, -> { where(name: 'breakfast') }
  scope :lunch, -> { where(name: 'lunch') }
  scope :dinner, -> { where(name: 'dinner') }
end
