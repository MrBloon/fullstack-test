Rails.application.routes.draw do
  root to: 'pages#home'
  get "feedback/new", to: 'api/v1/feedbacks#new'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :feedback, only: [:index, :create, :show]
    end
  end

end
