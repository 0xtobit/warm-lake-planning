class CreateMeals < ActiveRecord::Migration[5.1]
  def change
    create_table :meals do |t|
      t.integer :trip_id
      t.integer :day_index
      t.string :menu
      t.string :name
      t.string :host

      t.timestamps
    end
  end
end
