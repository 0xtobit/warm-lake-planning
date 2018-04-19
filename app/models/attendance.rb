class Attendance < ApplicationRecord
  validates :attendees, numericality: true, presence: true
  validates :party_name, presence: true

  validate :not_all_zero

  private

  def not_all_zero
    if day0.all? { |x| x.to_i == 0} &&
       day1.all? { |x| x.to_i == 0} &&
       day2.all? { |x| x.to_i == 0} &&
       day3.all? { |x| x.to_i == 0} &&
       day4.all? { |x| x.to_i == 0} &&
       day5.all? { |x| x.to_i == 0} &&
       day6.all? { |x| x.to_i == 0} &&
       day7.all? { |x| x.to_i == 0} &&
       day8.all? { |x| x.to_i == 0} &&
       day9.all? { |x| x.to_i == 0}
      errors[:base] << 'Must select some days'
    end
  end
end
