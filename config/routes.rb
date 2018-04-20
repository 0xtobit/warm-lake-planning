Rails.application.routes.draw do
  root to: 'meals#index'

  resources :attendances
  resources :meals, only: [:edit, :update]
end
