class Api::PacksController < ApplicationController
    before_action :require_logged_in, only: [:destroy, :create]

    def index
        @packs = Pack.all
        @pack_meds = Hash.new {|h,k| h[k] = Array.new }
        @packs.each do |pack|
            @pack_meds[pack.id] << Meditation.select(:category, :duration, :id, :title)
                    .joins(:meditation_packs)
                    .where(meditation_packs: { pack_id: pack.id })
        end
        @flag = params[:flag]
        render 'api/packs/index'
    end

    def create
        @user = current_user
        @custom = params[:pack][:custom]
        @meditations = Meditation.all
        @pack_meds = []
        @pack = Pack.new(pack_params)
        if @pack.save
            UserPack.create(user_id: @user.id, pack_id: @pack.id)
            render 'api/packs/show'
        else
            render json: ["Sorry, couldn't make this pack!"]
        end
    end

    def show
        @pack = Pack.find_by(id: params[:id])
        @meditations = Meditation.all
                        .joins(:meditation_packs)
                        .where(meditation_packs: { pack_id: @pack.id })
        @custom = @pack.custom
        @pack_meds = []
        @meditations.each do |meditation|
            @pack_meds << meditation
        end
        if @pack 
            render 'api/packs/show'
        else
            render json: ['That pack does not exist!'], status: 404
        end
    end

    def update
        @pack = Pack.find_by(id: params[:id])
        @userpack = UserPack.find_by(pack_id: params[:id])
        @user = @userpack.user_id
        @pack_meds = []
        @meditations = Meditation.all
                        .joins(:meditation_packs)
                        .where(meditation_packs: { pack_id: @pack.id })
        @meditations.each do |meditation|
            @pack_meds << meditation
        end
        
        if current_user.id == @userpack.user_id
            MeditationPack.create(pack_id: @pack.id, meditation_id: params[:medId])
            render 'api/packs/show'
        else
            render json: ['Cannot save to that custom pack!'], status: 404
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
