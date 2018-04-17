class CreateTrips < ActiveRecord::Migration[5.1]
  def change
    create_table :trips do |t|
      t.integer :num_days
      t.timestamp :first_day

      t.timestamps
    end
  end
end
