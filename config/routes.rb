Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'images#index'
  resources :images, only:[:index, :show]
  #resources :scores, only:[:create]
  post '/images/:id/scores', to: 'scores#create', as: 'score'
end
