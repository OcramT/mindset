Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show] do 
      resources :userpacks, only: [:index, :show, :create, :destroy]
      resources :completedmeditations, only: [:index, :show, :create, :destroy]
    end
    resource :session, only: [:create, :destroy]
    resources :meditations, only: [:show, :index, :destroy]
    resources :packs, only: [:index, :show, :create, :update, :destroy]
  end

end
