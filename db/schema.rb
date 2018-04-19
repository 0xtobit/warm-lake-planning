# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180418235956) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attendances", force: :cascade do |t|
    t.integer "attendees"
    t.string "party_name"
    t.string "day0", default: [], array: true
    t.string "day1", default: [], array: true
    t.string "day2", default: [], array: true
    t.string "day3", default: [], array: true
    t.string "day4", default: [], array: true
    t.string "day5", default: [], array: true
    t.string "day6", default: [], array: true
    t.string "day7", default: [], array: true
    t.string "day8", default: [], array: true
    t.string "day9", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "meals", force: :cascade do |t|
    t.integer "trip_id"
    t.integer "day_index"
    t.string "menu"
    t.string "name"
    t.string "host"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "trips", force: :cascade do |t|
    t.integer "num_days"
    t.datetime "first_day"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
