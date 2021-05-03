class Api::UserpacksController < ApplicationController
    before_action :require_logged_in, only: [:destroy, :create]

    def index 
        @user = current_user
        @packs = Pack.all.joins(:user_packs).where(user_packs: { user_id: current_user.id })
    end

    def create
        
    end

    def destroy
    end

    private

    def userpack_params
        params.require(:userpack).permit(:user_id, :pack_id)
    end

end
