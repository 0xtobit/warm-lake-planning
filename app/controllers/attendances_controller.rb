class AttendancesController < ApplicationController
  def create
    days_hash = {}
    (0..9).each { |i| days_hash["day#{i}"] = params[:selected][i].map { |x| x ? params[:attendees] : 0} }
    @attendance = Attendance.new(params.permit(:party_name, :attendees).merge(days_hash))
    if @attendance.save
      render json: { message: 'Success!' }, status: :success
    else
      render json: { message: @attendance.errors.full_messages }, status: :unprocessable_entity
    end
  end
end
