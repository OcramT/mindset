class Api::PacksController < ApplicationController
    before_action :require_logged_in, only: [:destroy, :create]

    def index
        @packs = Pack.all
        @meditations = Meditation.all
        @flag = params[:flag]
    end

    def create
        @user = current_user
        @custom = params[:pack][:custom]
        @meditations = Meditation.all
        @medIds = []
        @pack = Pack.new(pack_params)
        if @pack.save
            UserPack.create(user_id: @user.id, pack_id: @pack.id)
            render 'api/packs/show'
        else
            render json: ["Sorry, couldn't make this pack!"]
            # render json: @userpack.errors.full_messages, status: 422
        end
    end

    def show
        @pack = Pack.find_by(id: params[:id])
        @meditations = Meditation.all
        @custom = @pack.custom
        @medIds = []
        if @pack 
            render 'api/packs/show'
        else
            render json: ['That pack does not exist!'], status: 404
        end
    end

    def update
        @pack = Pack.find_by(id: params[:id])
        if @pack
            render 'api/packs/show'
        else
            render json: ['That pack does not exist!'], status: 404
        end
    end

    def destroy
        @pack = Pack.find_by(id: params[:id])
        @pack.destroy
    end

    private

    def pack_params
        params.require(:pack).permit(:name, :category, :description, :custom, :flag)
    end

end
