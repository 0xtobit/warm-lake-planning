class AddTripIdToAttendancesTable < ActiveRecord::Migration[5.1]
  def change
    add_column :attendances, :trip_id, :integer
  end
end
