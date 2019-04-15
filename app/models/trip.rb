class Trip < ApplicationRecord
  has_many :meals, inverse_of: :trip
  has_many :attendances, inverse_of: :trip
end
