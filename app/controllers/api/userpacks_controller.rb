class Api::UserpacksController < ApplicationController
    before_action :require_logged_in, only: [:destroy, :create, :index]

    def index 
        @userpacks = UserPack.all
        @user = current_user
        @packs = Pack.all.joins(:user_packs).where(user_packs: { user_id: @user.id })
        @userpack_meds = Hash.new {|h,k| h[k] = Array.new }
        @packs.each do |pack|
            @userpack_meds[pack.id] = Meditation.select(:category, :duration, :id, :title)
                    .joins(:meditation_packs)
                    .where(meditation_packs: { pack_id: pack.id })
        end
        render 'api/userpacks/index'
    end

    def create
        @user = current_user
        @pack_id = params[:packId]
        @userpack = UserPack.new(user_id: @user.id, pack_id: @pack_id)
        @pack = Pack.find_by(id: @pack_id)
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
