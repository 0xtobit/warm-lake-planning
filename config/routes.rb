Rails.application.routes.draw do
  get 'trip/show'

  root to: 'trip#show'

  resources :attendances, only: :create
end
