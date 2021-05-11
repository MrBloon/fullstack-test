Rails.application.routes.draw do
  root to: 'pages#home'
  get "feedback/new", to: 'api/v1/feedbacks#new'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      get "feedback", to: 'feedbacks#index'
      post "feedback", to: 'feedbacks#create'
      patch "feedback", to: 'feedbacks#update'
      get "feedback/:id", to: 'feedbacks#show'
    end
  end

end
