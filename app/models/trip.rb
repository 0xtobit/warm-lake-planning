class Trip < ApplicationRecord
  has_many :meals, inverse_of: :trip
end
