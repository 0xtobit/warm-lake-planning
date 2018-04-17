Rails.application.routes.draw do
  get 'trip/show'
  post 'trip', to: 'trip#create'

  root to: 'trip#show'
end
