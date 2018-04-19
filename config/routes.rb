Rails.application.routes.draw do
  get 'trip/show'

  root to: 'trip#show'
  #root to: 'meals#index'

  resources :attendances, only: [:new, :create]
  resources :meals, only: [:edit, :update]
end
