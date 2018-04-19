class CreateAttendances < ActiveRecord::Migration[5.1]
  def change
    create_table :attendances do |t|
      t.integer :attendees
      t.string :party_name

      t.string :day0, array: true, default: []
      t.string :day1, array: true, default: []
      t.string :day2, array: true, default: []
      t.string :day3, array: true, default: []
      t.string :day4, array: true, default: []
      t.string :day5, array: true, default: []
      t.string :day6, array: true, default: []
      t.string :day7, array: true, default: []
      t.string :day8, array: true, default: []
      t.string :day9, array: true, default: []

      t.timestamps
    end
  end
end
