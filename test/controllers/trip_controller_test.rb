require "test_helper"

describe TripController do
  it "should get show" do
    get trip_show_url
    value(response).must_be :success?
  end

end
