Rails.application.routes.draw do
  get 'trip/show'

  root to: 'trip#show'
end
