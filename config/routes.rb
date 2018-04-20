Rails.application.routes.draw do
  root to: 'meals#index'

  resources :attendances, only: [:new, :create]
  resources :meals, only: [:edit, :update]
end
