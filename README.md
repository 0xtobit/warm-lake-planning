# Warm Lake Planning

Every year my family spends 10 days in the mountains. We all share in meals and eat together as one. Having a meal sign up as well as figuring out how many people to cook for can be tricky.

We've tried Google Sheets, and Google Forms which worked well enough, but wasn't perfect.

Hopefully this app makes things easier.

* Rails version 5.1.5

## Models
Trip
- `first_day`
- `num_days`

Attendance
- `num_attendees`
- `days`
- `first_day`
- `last_day`
- `party_name`

Meal
- `day_number`
- `trip_id`
- `type` [breakfast, lunch?, dinner]
- `host`
- `food`
