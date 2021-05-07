class Api::UserpacksController < ApplicationController
    before_action :require_logged_in, only: [:destroy, :create, :index]

    def index 
        @userpacks = UserPack.all
        @user = current_user
        @packs = Pack.all.joins(:user_packs).where(user_packs: { user_id: @user.id })
        render 'api/userpacks/index'
    end

    def create
        # raise params.inspect
        @user = current_user
        @pack_id = params[:packId]
        @userpack = UserPack.new(user_id: @user.id, pack_id: @pack_id)
        if @userpack.save
            render 'api/userpacks/show'
        else
            render json: @userpack.errors.full_messages, status: 422
        end
    end

    def destroy
        @userpack = UserPack.find_by(pack_id: params[:id])
        @userpack.destroy
    end

    private

    def userpack_params
        params.require(:userpack).permit(:user_id, :pack_id)
    end

end
